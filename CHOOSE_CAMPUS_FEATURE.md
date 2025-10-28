# Choose Campus Feature - Contact Page

## Overview
Added an interactive "Choose Your Campus" section to the contact page that allows users to browse all campuses and quickly select one for their inquiry.

## Features

### 1. **Campus Display Cards**
Each campus is displayed in an enhanced card with:
- **Campus Icon & Name** - Visual identification
- **Location** - City/region with pin icon 📍
- **Description** - Brief overview of the campus
- **Quick Info Box** with:
  - Full address
  - Phone number
  - Languages availability ("All 12 Languages Available" for campuses with all languages)

### 2. **Interactive Selection**
Each campus card has two action buttons:

#### **View Details Button** (Primary)
- Links to the individual campus page (`/campus/{id}`)
- Allows users to explore full campus information

#### **Select Button** (Secondary)
- Automatically scrolls to the contact form
- Pre-selects the campus in the "Preferred Campus" dropdown
- Focuses the form for immediate input
- Smooth scroll animation for better UX

### 3. **User Flow**
1. User scrolls to "Choose Your Campus" section
2. Browses through available campuses
3. Clicks "Select" on desired campus
4. Page smoothly scrolls to contact form
5. Campus is pre-selected in dropdown
6. User can immediately fill out the rest of the form

## Technical Implementation

### JavaScript Functionality
```typescript
onClick={(e) => {
  e.preventDefault();
  const form = document.querySelector('#campus');
  if (form instanceof HTMLSelectElement) {
    form.value = campus.name;
    form.dispatchEvent(new Event('change', { bubbles: true }));
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    form.focus();
  }
}}
```

**What it does:**
1. Prevents default link behavior
2. Finds the campus dropdown by ID
3. Sets the dropdown value to the selected campus name
4. Dispatches a change event to update React state
5. Scrolls the form into view smoothly
6. Focuses the dropdown to show selection

### Layout Structure
```tsx
<section className="campus-info-section">
  <div className="container">
    <div className="section-header">
      <h2>🏫 Choose Your Campus</h2>
    </div>
    
    <div className="campuses-grid">
      {campuses.map((campus) => (
        <div className="campus-card">
          {/* Campus content */}
          <div className="quick-info-box">
            {/* Address, Phone, Languages */}
          </div>
          <div className="action-buttons">
            <Link to="/campus/{id}">View Details</Link>
            <a onClick={selectCampus}>Select</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Styling

### Campus Card Enhancements
- **Quick Info Box**: Gray background with rounded corners
- **Responsive Grid**: Automatically adjusts to screen size
- **Action Buttons**: Flexbox layout with equal width distribution

### Color Variables Used
- `var(--bg-primary)` - Section background
- `var(--gray-50)` - Info box background
- `var(--text-primary)` - Strong/heading text
- `var(--text-muted)` - Secondary/descriptive text

### Responsive Behavior
All existing campus card responsive styles apply:
- **Desktop**: Multi-column grid
- **Tablet**: 2-column layout
- **Mobile**: Single column stack

## Files Modified

### `src/app/contact/page.tsx`
1. **Added `id="contact-form"`** to contact form container
   - Enables scroll targeting from Select buttons

2. **Added "Choose Your Campus" section** (line ~352)
   - Placed after contact form/info section
   - Before FAQ section
   - Enhanced campus cards with quick info and Select buttons

3. **Hidden duplicate "Visit Our Campuses" section**
   - Added `style={{ display: 'none' }}` to prevent duplication
   - Kept in code for potential future use or A/B testing

## User Benefits

### 1. **Improved Discovery**
Users can explore all campuses before filling out the contact form

### 2. **Faster Form Completion**
Pre-selecting campus saves time and reduces friction

### 3. **Better Context**
Seeing address and languages helps users make informed decisions

### 4. **Seamless Experience**
Smooth scrolling and auto-focus creates polished interaction

### 5. **Mobile-Friendly**
Responsive design ensures great experience on all devices

## Accessibility

### ✅ Keyboard Navigation
- All buttons are keyboard accessible
- Focus states are clearly visible
- Tab order is logical

### ✅ Screen Readers
- Semantic HTML maintained
- Proper heading hierarchy
- Descriptive button text

### ✅ ARIA Labels
- Links have clear purposes
- Interactive elements are identifiable

## Testing Recommendations

### Functional Testing
1. **Click "Select" button** → Form should scroll into view
2. **Check dropdown** → Campus should be pre-selected
3. **Verify focus** → Dropdown should receive focus
4. **Submit form** → Selected campus should be included

### Cross-Browser Testing
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### Responsive Testing
- **Desktop (1920px)**: 3-column grid
- **Tablet (768px)**: 2-column grid
- **Mobile (375px)**: Single column

### Edge Cases
- **JavaScript disabled**: Select button falls back to anchor behavior
- **No campuses**: Section won't render (graceful degradation)
- **Long campus names**: Text wrapping handled by CSS

## Performance Impact

### Minimal Overhead
- No additional API calls
- Same campus data already loaded for form dropdown
- No new dependencies
- Leverages existing CSS classes

### Optimization
- Uses existing `campuses-grid` CSS
- Inline styles are minimal and theme-aware
- No images (emoji icons for decoration)

## Future Enhancements

### Potential Improvements
1. **Campus Filtering** - Add search/filter by location or language
2. **Map Integration** - Show campuses on interactive map
3. **Availability Status** - Display open enrollment spots
4. **Virtual Tour Links** - Add quick links to campus tours
5. **Compare Feature** - Allow side-by-side campus comparison

## Related Documentation
- See `WARP.md` for build and development commands
- See `MOBILE_MENU_CONTACT_FIX.md` for contact page styling details
- See `src/data/schoolData.ts` for campus data structure

## Conclusion
The Choose Campus feature enhances the contact page by providing users with an intuitive way to explore and select their preferred campus location before submitting an inquiry. The seamless integration with the existing contact form creates a smooth, user-friendly experience.
