# Responsive Breakpoints - Complete Coverage

## Overview
This project now supports **every screen size** from 280px (folded phones) to 1920px+ (4K displays), including landscape orientations and foldable devices.

## Desktop & Large Screens

### 🖥️ Extra Large - 4K Displays (1920px+)
- Container: 1600px max-width
- Hero titles: 4rem
- Section headers: 3rem
- **Devices**: 4K monitors, Ultra-wide displays

### 🖥️ Large Desktop (1440px - 1919px)
- Container: 1400px max-width
- Standard desktop optimization
- **Devices**: MacBook Pro 16", Large monitors

### 🖥️ Standard Desktop (1280px - 1439px)
- Container: 1200px max-width
- Default grid layouts
- **Devices**: MacBook Pro 13", Standard monitors

### 💻 Small Desktop / Large Laptop (1024px - 1279px)
- Container: 1000px max-width
- Grids: `repeat(auto-fill, minmax(300px, 1fr))`
- **Devices**: MacBook Air, Small laptops

## Tablet Sizes

### 📱 Tablet Landscape (768px - 1023px)
- 2-column grids for languages/campuses
- 2-column stats grid
- Hero: 2.5rem
- **Devices**: iPad Pro landscape, Surface Pro

### 📱 Tablet Portrait (600px - 767px)
- 2-column grids
- Single column teachers
- Hero: 2.25rem
- **Devices**: iPad, Android tablets portrait

## Phone Sizes

### 📱 Large Phones (540px - 599px)
- Single column layouts
- 2-column stats
- Hero: 2rem
- **Devices**: iPhone 14 Pro Max, Galaxy S23 Ultra

### 📱 Standard Phones (414px - 539px)
- Hero: 1.875rem
- Section headers: 1.625rem
- Campus nodes: 100px/120px
- **Devices**: iPhone 14 Plus, Pixel 7 Pro

### 📱 Medium Phones (375px - 413px)
- Hero: 1.75rem
- Section headers: 1.5rem
- Optimized button sizes
- **Devices**: iPhone 13/14, Galaxy S21

### 📱 Small Phones (320px - 374px)
- Container: Small padding
- Hero: 1.5rem
- Campus nodes: 85px/105px
- Compact buttons
- **Devices**: iPhone SE, older Android

### 📱 Foldable (Folded: 280px)
- Minimal padding
- Hero: 1.25rem
- Campus nodes: 75px/95px
- Ultra-compact layout
- **Devices**: Galaxy Z Fold (folded)

## Landscape Orientation

### 📱 Phone Landscape (max-height: 500px)
- Reduced vertical spacing
- Hero: 1.75rem
- Horizontal campus rows with wrap
- Compact navigation: 350px max-height
- **Use case**: Browsing in landscape mode

### 📱 Tablet Landscape (768px - 1024px)
- 3-column grids
- Expanded padding
- **Use case**: iPad/Surface landscape browsing

## Special Device Support

### 📱 Foldable Devices - Unfolded (800px - 900px)
- Container: 850px max-width
- 2-column grids optimized for fold width
- **Devices**: Samsung Z Fold (unfolded), Surface Duo

### 🎨 High DPI / Retina Displays
- Image rendering optimization
- Enhanced contrast for sharp images
- **Devices**: MacBook Pro, iPad Pro, high-end phones

## Breakpoint Summary Table

| Screen Size | Width Range | Grid Columns | Container | Hero Size |
|------------|-------------|--------------|-----------|-----------|
| 4K Display | 1920px+ | 3-4 | 1600px | 4rem |
| Large Desktop | 1440-1919px | 3-4 | 1400px | 3rem |
| Standard Desktop | 1280-1439px | 3-4 | 1200px | 3rem |
| Small Desktop | 1024-1279px | 2-3 | 1000px | 2.5rem |
| Tablet Landscape | 768-1023px | 2 | Fluid | 2.5rem |
| Tablet Portrait | 600-767px | 2 | Fluid | 2.25rem |
| Large Phone | 540-599px | 1 | Fluid | 2rem |
| Standard Phone | 414-539px | 1 | Fluid | 1.875rem |
| Medium Phone | 375-413px | 1 | Fluid | 1.75rem |
| Small Phone | 320-374px | 1 | Fluid | 1.5rem |
| Foldable (folded) | 280px | 1 | Minimal | 1.25rem |

## Component Behavior by Size

### Campus Diagram
- **Desktop**: Full hierarchical tree with SVG connections
- **Tablet**: Simplified connections, smaller nodes
- **Mobile (768px-)**: Vertical stack, hidden SVG, full-width cards
- **Landscape**: Horizontal wrap with reduced spacing

### Navigation
- **Desktop**: Horizontal menu bar
- **Mobile (768px-)**: Hamburger menu with slide-down
- **Landscape**: Compact menu (350px height)

### Grid Layouts
- **Desktop (1280px+)**: 3-4 columns
- **Tablet (768-1023px)**: 2 columns
- **Large Phone (540-767px)**: 1-2 columns
- **Small Phone (320-539px)**: 1 column

### Stats Grid
- **Desktop**: 4 columns
- **Tablet/Large Phone**: 2 columns
- **Small Phone (480px-)**: 1 column

## Testing Checklist

### Desktop Sizes ✓
- [ ] 4K Display (2560px, 3840px)
- [ ] Standard Desktop (1920px, 1440px, 1280px)
- [ ] Small Desktop/Laptop (1024px)

### Tablet Sizes ✓
- [ ] iPad Pro 12.9" (1024x1366)
- [ ] iPad Air (820x1180)
- [ ] iPad (768x1024)
- [ ] iPad Mini (744x1133)

### Phone Sizes ✓
- [ ] iPhone 14 Pro Max (430px)
- [ ] iPhone 14/13 (390px)
- [ ] iPhone SE (375px)
- [ ] Galaxy S23 Ultra (412px)
- [ ] Pixel 7 Pro (412px)

### Foldable Devices ✓
- [ ] Galaxy Z Fold (folded: 280px)
- [ ] Galaxy Z Fold (unfolded: 884px)
- [ ] Surface Duo (540px/720px)

### Orientations ✓
- [ ] Portrait mode (all devices)
- [ ] Landscape mode (phones)
- [ ] Landscape mode (tablets)

## Browser DevTools Testing

### Chrome DevTools Presets
- iPhone SE (375x667)
- iPhone 12 Pro (390x844)
- iPhone 14 Pro Max (430x932)
- Pixel 5 (393x851)
- Samsung Galaxy S20 Ultra (412x915)
- iPad Air (820x1180)
- iPad Pro (1024x1366)
- Surface Pro 7 (912x1368)
- Galaxy Fold (280x653 folded, 653x884 unfolded)

## CSS File Structure

```
src/app/globals.css
├── Variables & Root Styles
├── Reset & Base Styles
├── Component Styles
│   ├── Header
│   ├── Hero
│   ├── Grids
│   ├── Cards
│   ├── Campus Diagram
│   └── Footer
└── Responsive Breakpoints
    ├── Desktop (1920px+, 1440px, 1280px, 1024px)
    ├── Tablets (768px, 600px)
    ├── Phones (540px, 414px, 375px, 320px, 280px)
    ├── Landscape (max-height: 500px, tablets)
    ├── Foldable Devices
    └── Retina/High DPI
```

## Performance Notes

- **Lazy Loading**: Flag images use `loading="lazy"` on mobile
- **Priority Loading**: Hero images use `priority` for LCP optimization
- **Unoptimized**: External CDN images bypass Next.js optimization
- **Mobile First**: Base styles optimized for performance
- **Conditional Rendering**: SVG connections hidden on mobile

## Viewport Configuration

```typescript
// src/app/layout.tsx
viewport: 'width=device-width, initial-scale=1, maximum-scale=5'
```

This ensures:
- Proper scaling on all devices
- Prevents unwanted zoom on input focus
- Allows user pinch-to-zoom up to 5x
- WCAG 2.1 Level AA compliant

## Known Device Quirks

### iOS Safari
- Fixed positioning may behave differently
- 100vh includes browser UI bars
- Use `-webkit-` prefixes for some properties

### Android Chrome
- Different viewport behavior with URL bar
- May need `touch-action` CSS for smooth scrolling

### Foldable Devices
- May need `env(fold-left)` and `env(fold-right)` in future
- Currently using fixed breakpoints for fold widths

## Future Enhancements

- [ ] Add `@container` queries for component-level responsiveness
- [ ] Implement CSS `prefers-reduced-motion` for animations
- [ ] Add `prefers-contrast` for accessibility
- [ ] Support for ultra-wide displays (21:9 aspect ratio)
- [ ] TV/large screen optimization (1080p+)
