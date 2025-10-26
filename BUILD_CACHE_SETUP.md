# Next.js Build Cache Configuration

## What is the "No Cache" Warning?

This warning appears when Next.js can't find a cached build from previous deployments. It's **not an error** - your site will still build successfully, but subsequent builds will be slower without caching.

## Local Development

**No action needed!** The cache is automatically stored in `.next/cache/` during local development.

## Deployment Platform Setup

Choose your deployment platform below:

---

## 🚀 Vercel (Recommended - Automatic)

**No configuration needed!** Vercel automatically caches Next.js builds.

Simply:
1. Connect your GitHub/GitLab repository
2. Deploy - caching is enabled by default

---

## 🐙 GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Next.js

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Cache Next.js build
        uses: actions/cache@v4
        with:
          path: |
            ~/.npm
            ${{ github.workspace }}/.next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
            
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
```

---

## 🦊 GitLab CI

Create `.gitlab-ci.yml`:

```yaml
image: node:18

cache:
  key:
    files:
      - package-lock.json
  paths:
    - node_modules/
    - .next/cache/

stages:
  - build

build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - .next/
    expire_in: 1 hour
```

---

## 🔵 Azure Pipelines

Create `azure-pipelines.yml`:

```yaml
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  npm_config_cache: $(Pipeline.Workspace)/.npm

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '18.x'
    displayName: 'Install Node.js'

  - task: Cache@2
    inputs:
      key: 'npm | "$(Agent.OS)" | package-lock.json'
      restoreKeys: |
        npm | "$(Agent.OS)"
      path: $(npm_config_cache)
    displayName: Cache npm

  - task: Cache@2
    inputs:
      key: 'next | "$(Agent.OS)" | package-lock.json'
      path: '$(System.DefaultWorkingDirectory)/.next/cache'
    displayName: Cache Next.js

  - script: npm ci
    displayName: 'Install dependencies'

  - script: npm run build
    displayName: 'Build Next.js'
```

---

## 🟠 CircleCI

Create `.circleci/config.yml`:

```yaml
version: 2.1

jobs:
  build:
    docker:
      - image: cimg/node:18.18
    
    steps:
      - checkout
      
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package-lock.json" }}
            - v1-dependencies-
      
      - restore_cache:
          keys:
            - v1-next-cache-{{ .Branch }}-{{ .Revision }}
            - v1-next-cache-{{ .Branch }}-
            - v1-next-cache-
      
      - run:
          name: Install Dependencies
          command: npm ci
      
      - run:
          name: Build
          command: npm run build
      
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package-lock.json" }}
      
      - save_cache:
          paths:
            - .next/cache
          key: v1-next-cache-{{ .Branch }}-{{ .Revision }}

workflows:
  version: 2
  build:
    jobs:
      - build
```

---

## 🟣 Netlify

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.cache]
  paths = [
    ".next/cache"
  ]
```

---

## 🐳 Docker

Update your `Dockerfile` to use build cache:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Enable Next.js build cache
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

**Docker Compose with volume for cache:**

```yaml
version: '3.8'
services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .next-cache:/app/.next/cache
```

---

## 🟢 Cloudflare Pages

Cloudflare Pages automatically caches `.next/cache` directory. No configuration needed!

---

## 📊 AWS Amplify

Create `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

---

## Manual Cache Configuration

If your CI/CD platform isn't listed, follow these general steps:

### 1. Cache the following directories:
```
.next/cache/
node_modules/
```

### 2. Use these cache keys:
```
Primary key: OS-nextjs-package-lock-hash
Fallback key: OS-nextjs-
```

### 3. Restore cache before build
### 4. Save cache after build

---

## Performance Impact

### Without Cache:
- Build time: ~3-5 minutes
- Downloads all dependencies
- Rebuilds all pages

### With Cache:
- Build time: ~30-60 seconds
- Reuses dependencies
- Only rebuilds changed pages
- **Up to 80% faster!**

---

## Verifying Cache is Working

### Check build logs for:
```
✓ Creating optimized production build
✓ Compiled successfully
✓ Linting and checking validity of types  
✓ Collecting page data
✓ Generating static pages (X/Y)
```

### You should NOT see:
```
⚠ No build cache found
```

### You SHOULD see:
```
✓ Using build cache from previous build
```

---

## Common Issues

### Cache not working?

1. **Check cache directory exists**: `.next/cache/`
2. **Verify gitignore**: `.next/` should be in `.gitignore`
3. **Cache key changed**: Update cache key in CI config
4. **First build**: Cache warning is normal for first deployment

### Cache size too large?

The `.next/cache/` directory can grow large. Most CI platforms have cache size limits:
- GitHub Actions: 10GB
- GitLab CI: 1GB per project
- CircleCI: 15GB

Clean cache periodically or use cache size limits in your CI config.

---

## Local Cache Management

### Clear local cache:
```bash
rm -rf .next/cache
# or on Windows
rmdir /s /q .next\cache
```

### Clear everything:
```bash
npm run clean  # if you have a clean script
# or manually:
rm -rf .next node_modules
npm install
npm run build
```

---

## .gitignore Configuration

**Your `.gitignore` is already correct!**

Should include:
```
# next.js
/.next/
/out/

# build cache
*.tsbuildinfo
```

Do NOT commit:
- `.next/` directory
- `out/` directory
- `*.tsbuildinfo` files

---

## Summary

✅ **Vercel/Cloudflare Pages**: Automatic - no setup needed
✅ **GitHub/GitLab/CircleCI**: Add cache configuration to CI file
✅ **Docker**: Use volumes for `.next/cache`
✅ **Local**: Cache works automatically

The warning you saw is normal for **first-time deployments** and will disappear once cache is configured!
