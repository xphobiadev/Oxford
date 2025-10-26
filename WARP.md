# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Windows-Specific File Creation
When creating nested route files with bracket notation (e.g., `[id]`, `[lang]`):
```powershell
# Create directories
New-Item -ItemType Directory -Path "src/app/teacher/[id]" -Force

# Create page files
New-Item -ItemType File -Path "src/app/teacher/[id]/page.tsx"
```

## Project Architecture

### Technology Stack
- **Framework**: Next.js 16 with App Router (React 19.2.0)
- **Language**: TypeScript 5
- **Styling**: CSS (globals.css) with CSS custom properties for theming
- **Compiler**: React Compiler enabled (`reactCompiler: true`)
- **Deployment**: Configured for image optimization with `flagcdn.com` remote patterns
- **Responsive Design**: Fully responsive with breakpoints at 1024px, 768px, and 480px

### Core Architecture Pattern

This is a **data-driven multilingual education platform** with a centralized data layer and dynamic routing:

1. **Single Source of Truth**: All school data (campuses, languages, teachers) is defined in `src/data/schoolData.ts` as typed TypeScript objects
2. **Dynamic Routes**: Uses Next.js App Router with catch-all routes for campuses (`[id]`), languages (`[lang]`), and teachers (`[id]`)
3. **Component Separation**: Clear separation between client components (interactive UI with `'use client'`) and server components (data fetching, static content)
4. **Theme System**: Implements a custom theme toggle system with localStorage persistence and SSR hydration handling

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── campus/[id]/        # Dynamic campus detail pages
│   ├── campuses/           # All campuses list
│   ├── language/[lang]/    # Dynamic language detail pages
│   ├── languages/          # All languages list
│   ├── teacher/[id]/       # Dynamic teacher profile pages
│   ├── about/              # Static about page
│   ├── contact/            # Static contact page
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles with CSS variables
├── components/             # Reusable React components
│   ├── Header.tsx          # Main navigation (client component)
│   ├── Footer.tsx          # Site footer (server component)
│   ├── ThemeToggle.tsx     # Dark/light theme switcher
│   ├── CampusDiagram.tsx   # Interactive campus visualization
│   ├── EnrollmentModal.tsx # Registration modal
│   └── TeacherProfileClient.tsx # Client-side teacher profile wrapper
├── data/
│   └── schoolData.ts       # Centralized data with helper functions
├── types/
│   └── index.ts            # TypeScript type definitions
└── styles/                 # Additional style modules (if any)
```

### Data Architecture

**File**: `src/data/schoolData.ts`

The entire application is driven by a single `schoolData` object containing:
- **6 Campuses**: Each with id, name, icon, location, address, description
- **12 Languages**: English, Spanish, French, German, Chinese, Japanese, Italian, Portuguese, Russian, Arabic, Korean, Hindi
- **8+ Teachers**: Each linked to a language via `languageId`, with full profiles

**Key Helper Functions**:
- `getAllCampuses()`, `getCampusById(id)`
- `getAllLanguages()`, `getLanguageById(id)`
- `getAllTeachers()`, `getTeacherById(id)`, `getTeachersByLanguage(langId)`

**Critical Pattern**: When adding new data entities, ALWAYS:
1. Update type definitions in `src/types/index.ts`
2. Add data to `src/data/schoolData.ts`
3. Create/update helper functions for data access
4. Use helper functions in components (never access `schoolData` directly)

### Routing Patterns

**Dynamic Routes with Async Params** (Next.js 16 requirement):
```typescript
// CORRECT - async params
export default async function LanguagePage({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  const language = getLanguageById(lang);
  // ...
}
```

**Client vs Server Components**:
- Use `'use client'` for: interactive components, useState/useEffect, event handlers
- Server components (default): data fetching, static content, SEO-critical pages

### Theme System

The app implements a custom light/dark theme system:
- Theme state stored in `localStorage` with key `'theme'`
- SSR hydration handled in `layout.tsx` with inline script to prevent flash
- Theme toggle component (`ThemeToggle.tsx`) is a client component
- CSS uses custom properties (e.g., `var(--primary-color)`) that change based on `data-theme` attribute

**To modify themes**: Edit the CSS custom properties in `src/app/globals.css` under `[data-theme="light"]` and `[data-theme="dark"]`.

### Image Handling

- **Remote Images**: Language flags from `flagcdn.com` (configured in `next.config.ts`)
- **Local Images**: Logo and other assets in `public/images/`
- **Usage**: Use Next.js `Image` component with `unoptimized` prop for local development or `priority` for above-fold images

## Development Guidelines

### Adding a New Language

1. Add language data to `src/data/schoolData.ts` in the `languages` array
2. Ensure `languageId` follows kebab-case convention (e.g., "portuguese")
3. Add at least one teacher with matching `languageId`
4. Language will automatically appear on `/languages` and be routable at `/language/{languageId}`

### Adding a New Campus

1. Add campus data to `src/data/schoolData.ts` in the `campuses` array
2. Increment `id` sequentially
3. Campus will automatically appear on `/campuses` and be routable at `/campus/{id}`

### Adding a New Teacher

1. Add teacher data to `src/data/schoolData.ts` in the `teachers` array
2. Set `languageId` to match an existing language's `id`
3. Teacher will automatically appear on the language detail page and be routable at `/teacher/{id}`

### Modifying Styles

- **Global styles**: Edit `src/app/globals.css`
- **Component-specific**: Add styles to globals.css with descriptive class names (existing pattern)
- **Theme colors**: Modify CSS custom properties at the top of globals.css
- The project does NOT use Tailwind CSS or CSS modules

### Key Conventions

- **Type safety**: All data must match interfaces in `src/types/index.ts`
- **Path alias**: Use `@/` to import from `src/` (configured in `tsconfig.json`)
- **Link navigation**: Always use Next.js `Link` component, never `<a>` tags for internal navigation
- **Emoji icons**: Some entities use emoji for icons (e.g., teacher photos, campus icons); language flags use `flagcdn.com` URLs

## Common Tasks

### Run the development server
```bash
npm run dev
```
Access at http://localhost:3000

### Lint the codebase before committing
```bash
npm run lint
```

### Build for production
```bash
npm run build
npm start
```

## Important Notes

- **React Compiler**: Enabled in `next.config.ts`. Avoid manual memoization patterns as the compiler handles optimization.
- **Hydration**: The theme toggle script in `layout.tsx` runs before hydration to prevent theme flash. Do not remove or modify without understanding SSR implications.
- **Windows Development**: This project was developed on Windows. File paths use backslashes in some tooling outputs but forward slashes in imports.
- **No Database**: All data is static in TypeScript files. For production, consider migrating to a CMS or database.
- **TypeScript Strict Mode**: Enabled. All new code must satisfy strict type checking.
- **Build Cache Warning**: The "No build cache found" warning is normal for first deployments. See `BUILD_CACHE_SETUP.md` for CI/CD cache configuration.
