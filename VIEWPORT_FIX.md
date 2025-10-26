# Viewport Metadata Fix - Next.js 16

## Issue

Build warnings appeared during deployment:

```
⚠ Unsupported metadata viewport is configured in metadata export
Please move it to viewport export instead.
```

This warning appeared on all pages because viewport was incorrectly configured as part of the metadata export.

## Root Cause

In **Next.js 16**, the `viewport` configuration was moved from the `metadata` export to its own separate `viewport` export for better type safety and API clarity.

### ❌ Old Way (Next.js 15 and earlier):
```typescript
export const metadata: Metadata = {
  title: 'My App',
  viewport: 'width=device-width, initial-scale=1',
  // other metadata...
};
```

### ✅ New Way (Next.js 16+):
```typescript
import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'My App',
  // other metadata...
};
```

## Solution Applied

### File Changed: `src/app/layout.tsx`

**Before:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Universal Oxford Spires - Excellence in Language Education',
  description: '...',
  keywords: '...',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5', // ❌ Old way
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};
```

**After:**
```typescript
import type { Metadata, Viewport } from 'next'; // Added Viewport import

export const metadata: Metadata = {
  title: 'Universal Oxford Spires - Excellence in Language Education',
  description: '...',
  keywords: '...',
  // viewport removed from here
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

// ✅ New separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};
```

## Benefits of the New Approach

1. **Type Safety**: Better TypeScript types for viewport configuration
2. **API Clarity**: Separates concerns between page metadata and viewport settings
3. **Future-Proof**: Aligns with Next.js 16 best practices
4. **No Runtime Changes**: Functionally identical, just better organized

## Viewport Configuration Details

### Settings Explained:

```typescript
{
  width: 'device-width',    // Use device's native width
  initialScale: 1,          // Start at 100% zoom
  maximumScale: 5,          // Allow zoom up to 500%
}
```

### Why These Values?

- **`width: 'device-width'`**: Ensures proper responsive behavior on all devices
- **`initialScale: 1`**: Prevents unwanted auto-zoom on mobile (e.g., when focusing inputs)
- **`maximumScale: 5`**: Allows accessibility zoom while preventing excessive zoom
  - WCAG 2.1 Level AA compliant
  - Balances usability and accessibility

## Verification

### ✅ Tests Passed:
- `npm run lint` - No errors
- `npx tsc --noEmit` - TypeScript validation passed
- Build warnings eliminated
- Responsive design still working on all devices

### ✅ Browser Behavior:
- Mobile devices scale correctly
- No horizontal scrolling
- Pinch-to-zoom works
- No layout shift on load

## Impact on Other Pages

Since this change is in `src/app/layout.tsx` (root layout), it applies to **all pages** in the application:
- `/` (Homepage)
- `/about`
- `/campuses`
- `/campus/[id]`
- `/languages`
- `/language/[lang]`
- `/teacher/[id]`
- `/contact`

All pages now inherit the correct viewport configuration automatically.

## Migration Guide for Similar Projects

If you're upgrading a Next.js project to version 16:

1. **Find all viewport metadata:**
   ```bash
   grep -r "viewport:" src/app
   ```

2. **For each `layout.tsx` or `page.tsx` with viewport:**
   - Import `Viewport` type: `import type { Viewport } from 'next';`
   - Remove `viewport` from `metadata` export
   - Create new `viewport` export
   - Convert string to object format

3. **Example conversion:**
   ```typescript
   // Old string format
   viewport: 'width=device-width, initial-scale=1'
   
   // New object format
   export const viewport: Viewport = {
     width: 'device-width',
     initialScale: 1,
   }
   ```

## Common Viewport Patterns

### Basic Responsive:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
```

### With Zoom Control:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
};
```

### With Theme Color:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5C93A', // Matches your brand color
};
```

### Full Configuration:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5C93A' },
    { media: '(prefers-color-scheme: dark)', color: '#101633' },
  ],
};
```

## Reference Links

- [Next.js generateViewport Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-viewport)
- [Viewport Meta Tag Best Practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [WCAG 2.1 Resize Text Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)

## Summary

✅ **Fixed**: Viewport configuration now uses Next.js 16 format  
✅ **Zero Impact**: Functionality unchanged, only API compliance  
✅ **Build Clean**: No more warnings during deployment  
✅ **Future-Proof**: Aligned with Next.js best practices  

The viewport configuration is now properly separated from metadata and fully compliant with Next.js 16 requirements!
