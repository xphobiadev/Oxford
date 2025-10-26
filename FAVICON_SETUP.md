# Favicon Setup Guide

## Current Configuration

✅ **Logo is now set as the favicon!**

The favicon has been configured in `src/app/layout.tsx` to use your logo at `/images/logo.jpg`.

```typescript
icons: {
  icon: '/images/logo.jpg',
  shortcut: '/images/logo.jpg',
  apple: '/images/logo.jpg',
}
```

## How It Works

Next.js will automatically serve your logo as the favicon. The browser will:
1. Load `/images/logo.jpg` as the favicon
2. Display it in the browser tab
3. Show it in bookmarks
4. Use it for Apple touch icons (iOS home screen)

## Optimal Favicon Setup (Optional Enhancement)

For best browser compatibility, you can create multiple favicon formats:

### Option 1: Quick Setup (Current - Using JPG)
✅ Already done! Your logo is being used.

**Pros:**
- Simple, no conversion needed
- Works in all modern browsers

**Cons:**
- Slightly larger file size
- May not have transparency

### Option 2: Professional Setup (ICO + PNG)

Create optimized favicon files in multiple sizes for different devices.

#### Step 1: Convert Logo to Proper Formats

**Online Tools (Easiest):**
1. Go to [Favicon.io](https://favicon.io/favicon-converter/)
2. Upload your `public/images/logo.jpg`
3. Download the generated favicon package
4. Extract files to `public/` directory

**OR use RealFaviconGenerator:**
1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload `public/images/logo.jpg`
3. Customize settings
4. Download and extract to `public/`

#### Step 2: Place Files in Public Directory

After conversion, you should have:
```
public/
├── favicon.ico          (16x16, 32x32, 48x48 multi-size)
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png (180x180)
└── android-chrome-192x192.png
└── android-chrome-512x512.png
```

#### Step 3: Update Layout Metadata

Replace the icons section in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... other metadata
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
    ],
  },
};
```

---

## Manual Conversion Using ImageMagick (Advanced)

If you have ImageMagick installed:

```bash
# Install ImageMagick (if needed)
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: apt-get install imagemagick

# Navigate to your project
cd C:\Users\bouli\Desktop\school-website\nextjs-app\public\images

# Create favicon.ico (multi-size)
magick logo.jpg -define icon:auto-resize=16,32,48 ../favicon.ico

# Create PNG favicons
magick logo.jpg -resize 16x16 ../favicon-16x16.png
magick logo.jpg -resize 32x32 ../favicon-32x32.png
magick logo.jpg -resize 180x180 ../apple-touch-icon.png
magick logo.jpg -resize 192x192 ../android-chrome-192x192.png
magick logo.jpg -resize 512x512 ../android-chrome-512x512.png
```

---

## Using Sharp (Node.js - For Automated Build)

Install sharp:
```bash
npm install --save-dev sharp
```

Create `scripts/generate-favicons.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');

const sizes = [16, 32, 180, 192, 512];
const inputFile = 'public/images/logo.jpg';

sizes.forEach(size => {
  const outputFile = size === 180 
    ? 'public/apple-touch-icon.png'
    : size === 192
    ? 'public/android-chrome-192x192.png'
    : size === 512
    ? 'public/android-chrome-512x512.png'
    : `public/favicon-${size}x${size}.png`;

  sharp(inputFile)
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(outputFile)
    .then(() => console.log(`✓ Created ${outputFile}`))
    .catch(err => console.error(`✗ Error creating ${outputFile}:`, err));
});
```

Run:
```bash
node scripts/generate-favicons.js
```

Add to `package.json`:
```json
{
  "scripts": {
    "generate-favicons": "node scripts/generate-favicons.js"
  }
}
```

---

## Browser Support

### Current Setup (JPG)
✅ Chrome/Edge - Works
✅ Firefox - Works
✅ Safari - Works
✅ Mobile browsers - Works

### With Proper ICO/PNG
✅ All modern browsers - Optimal
✅ Old IE browsers - Works better
✅ Better quality on high-DPI displays
✅ Supports transparency

---

## Testing Your Favicon

### Local Testing
1. Run dev server: `npm run dev`
2. Open: `http://localhost:3000`
3. Check browser tab for your logo
4. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Production Testing
After deployment:
1. Visit your live site
2. Check favicon appears in tab
3. Add to bookmarks - check bookmark icon
4. On mobile - add to home screen, check icon

### Clearing Favicon Cache
If you don't see the new favicon:

**Chrome/Edge:**
```
chrome://favicon/[YOUR-SITE-URL]
```

**Firefox:**
- Right-click tab → Reload Tab
- Or clear browser cache

**Safari:**
- Clear History and Website Data

---

## File Size Optimization

### Current Logo Size
Check size:
```bash
ls -lh public/images/logo.jpg
# or on Windows PowerShell:
(Get-Item public\images\logo.jpg).length / 1KB
```

### Recommended Sizes
- favicon.ico: < 15 KB
- favicon-32x32.png: < 5 KB
- apple-touch-icon.png: < 20 KB

### Optimize JPG (if needed)
Using ImageMagick:
```bash
magick logo.jpg -quality 85 -resize 512x512 logo-optimized.jpg
```

---

## Manifest.json (PWA Support - Optional)

For Progressive Web App support, create `public/site.webmanifest`:

```json
{
  "name": "Universal Oxford Spires",
  "short_name": "Oxford Spires",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#F5C93A",
  "background_color": "#101633",
  "display": "standalone"
}
```

Add to metadata:
```typescript
export const metadata: Metadata = {
  // ... other metadata
  manifest: '/site.webmanifest',
};
```

---

## Summary

✅ **Current Status**: Logo is set as favicon (works everywhere)

**Optional Enhancements**:
1. Convert to ICO/PNG for optimal quality
2. Create multiple sizes for different devices
3. Add PWA manifest for installability

**Quick Command** (if you just want to test):
Your favicon should appear immediately after refreshing the page!

---

## Troubleshooting

### Favicon not showing?
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check DevTools → Network tab for `/favicon.ico` request
4. Verify file exists: `public/images/logo.jpg`

### Wrong icon showing?
- Browser might be caching old favicon
- Wait a few seconds or restart browser
- Check incognito/private window

### Favicon too large/small?
- Logo will be auto-scaled by browser
- For best quality, create proper sizes (see Option 2 above)

### Transparent background needed?
- JPG doesn't support transparency
- Convert to PNG format (see conversion steps above)
