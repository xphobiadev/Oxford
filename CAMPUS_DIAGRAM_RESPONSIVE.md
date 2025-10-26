# Campus Diagram Responsive Sizing Guide

## Overview

The campus diagram now adapts perfectly to **every international screen size** from 280px (folded phones) to 4K displays (1920px+).

## Visual Behavior by Screen Size

### 🖥️ Desktop (1024px+)
**Layout**: Hierarchical tree with SVG connection lines
- Main campus at top
- 3 sub-campuses in tier 1 (horizontal)
- 2 sub-campuses in tier 2 (horizontal)
- Full SVG connections visible

**Sizes**:
- Main circle: 180px × 180px
- Sub circles: 150px × 150px
- Icon (main): 5.5rem
- Icon (sub): 4.5rem
- Info card: max-width 200px
- Gaps: 120-180px between nodes

---

### 📱 Tablet Landscape (768px - 1023px)
**Layout**: Hierarchical tree with reduced spacing
- SVG connections visible
- Smaller nodes
- Tighter gaps

**Sizes**:
- Main circle: 160px × 160px
- Sub circles: 130px × 130px
- Icon (main): 4.5rem
- Icon (sub): 3.75rem
- Info card: max-width 190px
- Gaps: 80-100px
- Min height: 750px

---

### 📱 Tablet Portrait (600px - 767px)
**Layout**: Hybrid - vertical with some horizontal rows
- **SVG hidden** (too cluttered)
- Main campus: centered
- Tier 1: 2 columns wrapped
- Tier 2: 2 columns

**Sizes**:
- Main circle: 145px × 145px
- Sub circles: 115px × 115px
- No fixed height (auto)
- Gaps: 2rem

---

### 📱 Large Phones (540px - 599px)
**Layout**: Full vertical stack
- SVG hidden
- All nodes in single column
- Easy scrolling

**Sizes**:
- Main circle: 130px × 130px
- Sub circles: 105px × 105px
- Icon (main): 3.75rem
- Icon (sub): 3rem
- Info card: 280px max-width (full responsive)

---

### 📱 Standard Phones (414px - 539px)
**iPhone 14 Plus, Pixel 7 Pro, Galaxy S21+**

**Layout**: Vertical stack with optimized spacing

**Sizes**:
- Main circle: 125px × 125px
- Sub circles: 100px × 100px
- Icon (main): 3.5rem
- Icon (sub): 2.75rem
- Info card: 90vw (max 360px)
- Gaps: 1.5-2rem
- Padding: 1.5rem 0.75rem

---

### 📱 Medium Phones (375px - 413px)
**iPhone 13/14, Galaxy S21, Pixel 7**

**Layout**: Compact vertical stack

**Sizes**:
- Main circle: 115px × 115px
- Sub circles: 95px × 95px
- Icon (main): 3.25rem
- Icon (sub): 2.5rem
- Info card: max-width 330px
- Gaps: 1.75-2rem
- H3: 1rem, H4: 0.938rem

---

### 📱 Small Phones (320px - 374px)
**iPhone SE, older Android devices**

**Layout**: Minimal compact design

**Sizes**:
- Main circle: 105px × 105px
- Sub circles: 85px × 85px
- Icon (main): 2.75rem
- Icon (sub): 2.25rem
- Info card: max-width 280px
- Padding: 1rem 0.5rem
- Badge: 0.625rem
- H3: 1rem, H4: 0.938rem

---

### 📱 Foldable Folded (280px)
**Galaxy Z Fold (folded state)**

Uses same sizing as 320px with ultra-compact spacing.

---

## Component Elements Sizing

### Campus Node Circles

| Screen Size | Main Campus | Sub Campus |
|------------|-------------|------------|
| Desktop (1024px+) | 180×180px | 150×150px |
| Tablet Landscape (768-1023px) | 160×160px | 130×130px |
| Tablet Portrait (600-767px) | 145×145px | 115×115px |
| Large Phone (540-599px) | 130×130px | 105×105px |
| Standard Phone (414-539px) | 125×125px | 100×100px |
| Medium Phone (375-413px) | 115×115px | 95×95px |
| Small Phone (320-374px) | 105×105px | 85×85px |

### Icon Sizes (Font Size)

| Screen Size | Main Campus Icon | Sub Campus Icon |
|------------|-----------------|----------------|
| Desktop (1024px+) | 5.5rem | 4.5rem |
| Tablet Landscape | 4.5rem | 3.75rem |
| Large Phone | 3.75rem | 3rem |
| Standard Phone | 3.5rem | 2.75rem |
| Medium Phone | 3.25rem | 2.5rem |
| Small Phone | 2.75rem | 2.25rem |

### Info Card Width

| Screen Size | Max Width | Special |
|------------|-----------|---------|
| Desktop | 200px | Fixed |
| Tablet Landscape | 190px | Fixed |
| Tablet Portrait | Auto | Responsive |
| Large Phone | 280px | Full width available |
| Standard Phone | 360px | 90vw (90% viewport) |
| Medium Phone | 330px | Constrained |
| Small Phone | 280px | Compact |

---

## SVG Connection Lines

### When Visible
- ✅ Desktop (1024px+)
- ✅ Tablet Landscape (768-1023px)

### When Hidden
- ❌ Tablet Portrait (< 768px)
- ❌ All phones (< 768px)

**Reason**: Connection lines create visual clutter on small screens. Vertical stacking is clearer.

---

## Layout Changes by Breakpoint

### Desktop (1024px+)
```
        [Main Campus]
             |
      -------|-------
      |      |      |
    [Sub1] [Sub2] [Sub3]
      |             |
    [Sub4]        [Sub5]
```

### Tablet Portrait (600-767px)
```
    [Main Campus]

    [Sub1]  [Sub2]
    [Sub3]

    [Sub4]  [Sub5]
```

### Mobile (< 600px)
```
    [Main Campus]
    
    [Sub1]
    [Sub2]
    [Sub3]
    [Sub4]
    [Sub5]
```

---

## Spacing & Gaps

### Row Margins (bottom)

| Screen Size | row-main | row-tier-1 | row-tier-2 |
|------------|----------|------------|------------|
| Desktop | 120px | 120px | N/A |
| Tablet Landscape | Auto | 80px | 100px |
| Tablet Portrait | 2.5rem | 2.5rem | 2rem |
| Large Phone | 2rem | 2rem | 1.75rem |
| Medium Phone | 2rem | 2rem | 2rem |

### Gap Between Nodes

| Screen Size | Tier 1 Gap | Tier 2 Gap |
|------------|-----------|-----------|
| Desktop | 120px | 180px |
| Tablet Landscape | 80px | 100px |
| Tablet Portrait | 2rem | 2rem |
| Mobile | 2rem | 1.75rem |

---

## Container Padding

| Screen Size | Container Padding |
|------------|-------------------|
| Desktop | 3rem 1rem |
| Tablet Landscape | 2.5rem 1rem |
| Standard Phone | 1.5rem 0.75rem |
| Small Phone | 1rem 0.5rem |

---

## Animation Behavior

### Fade In Animation
- **Active on**: All screen sizes
- **Delay**: Staggered (main: 0.1s, tier1: 0.3-0.5s, tier2: 0.6-0.7s)
- **Duration**: 0.6s ease-out
- **Effect**: Opacity 0→1, translateY(20px)→0

### Hover Effects
- **Desktop/Tablet**: Full hover effects (scale, glow, shadow)
- **Mobile**: Reduced/simplified hover for touch
- **Touch devices**: Tap feedback maintained

---

## Image Handling

### Main Campus Logo
- **Source**: `/images/logo.jpg`
- **Sizes**: 200×200px (scales with circle)
- **Style**: Circular crop, golden shadow
- **Optimization**: `unoptimized` prop (local file)

### Icons
- **Type**: Emoji characters (🏫, 🏢, etc.)
- **Scaling**: Font-size based (responsive)
- **Filter**: Drop shadow for depth

---

## Performance Optimizations

### CSS Optimizations
- ✅ CSS Grid for layout (not table)
- ✅ Flexbox for alignment
- ✅ Transform for animations (GPU accelerated)
- ✅ Will-change on animated elements
- ✅ Contain for isolated paint

### SVG Optimizations
- ✅ `viewBox` for scalability
- ✅ `preserveAspectRatio` for responsive
- ✅ Hidden on mobile (CSS `display: none`)
- ✅ Animations with `stroke-dasharray`

### Image Optimizations
- ✅ Next.js Image component
- ✅ Lazy loading (not on main campus - priority)
- ✅ Proper sizing props

---

## Accessibility

### Keyboard Navigation
- ✅ All nodes are `<Link>` elements (focusable)
- ✅ Tab order: main → tier 1 (left to right) → tier 2

### Screen Readers
- ✅ Semantic HTML structure
- ✅ Alt text on logo image
- ✅ Text content in info cards

### Touch Targets
- ✅ Minimum 44×44px on mobile (circles 85px+)
- ✅ Full card clickable area
- ✅ Adequate spacing between nodes

---

## Testing Recommendations

### Visual Regression Testing
Test these specific widths:
- 1920px (4K)
- 1440px (Large desktop)
- 1024px (Tablet landscape)
- 768px (Tablet portrait)
- 600px (Small tablet)
- 540px (Large phone landscape)
- 414px (iPhone Plus)
- 390px (iPhone 13/14)
- 375px (iPhone SE)
- 360px (Android common)
- 320px (iPhone SE portrait)
- 280px (Foldable folded)

### Device Testing
- ✅ iPhone 14 Pro Max (430×932)
- ✅ iPhone 14 (390×844)
- ✅ iPhone SE (375×667)
- ✅ Galaxy S23 Ultra (412×915)
- ✅ iPad Pro 12.9" (1024×1366)
- ✅ iPad Air (820×1180)
- ✅ Galaxy Z Fold (280×653 / 884×1104)

### Orientation Testing
- Portrait mode (all devices)
- Landscape mode (phones and tablets)

---

## Troubleshooting

### Diagram too large on mobile?
- Check: `campus-diagram { min-height }` should be `auto` on mobile
- Verify: SVG is hidden with `display: none` at < 768px

### Nodes overlapping?
- Check: `gap` values in `.campus-row`
- Verify: `flex-direction: column` on mobile

### Text too small?
- Check: Font size breakpoints for `.campus-node-info h3/h4`
- Verify: Not using fixed px values that don't scale

### Logo not circular?
- Check: `border-radius: 50%` on Image
- Verify: Width and height are equal

### Gaps too wide on tablet?
- Check: Tablet-specific gap values (should be 80-100px)
- Verify: Not inheriting desktop values

---

## Future Enhancements

Potential improvements:
- [ ] Add smooth scroll to nodes on tap
- [ ] Add expand/collapse animation
- [ ] Support for more than 6 campuses
- [ ] Interactive SVG connections
- [ ] Custom node colors per campus
- [ ] Zoom functionality for mobile
- [ ] Print stylesheet optimization

---

## Summary

✅ **Desktop**: Full hierarchical tree with SVG connections  
✅ **Tablet**: Optimized tree with smaller nodes  
✅ **Mobile**: Clean vertical stack, no SVG  
✅ **All sizes**: Responsive text, icons, and spacing  
✅ **Touch-friendly**: Adequate tap targets (85px+)  
✅ **Performant**: GPU-accelerated animations  
✅ **Accessible**: Keyboard navigation, screen reader support  

The campus diagram now provides an **optimal viewing experience** on every device from folded phones to 4K displays!
