# School Website Next.js Conversion

## ✅ What's Been Completed

The following has been set up for you:

1. ✅ Next.js app initialized with TypeScript and App Router
2. ✅ TypeScript types defined (`src/types/index.ts`)
3. ✅ School data converted to TypeScript (`src/data/schoolData.ts`)
4. ✅ CSS styles copied to `src/app/globals.css`
5. ✅ Header component created (`src/components/Header.tsx`)
6. ✅ Footer component created (`src/components/Footer.tsx`)
7. ✅ Root layout updated (`src/app/layout.tsx`)
8. ✅ Homepage created (`src/app/page.tsx`)
9. ✅ Images copied to `public/images` (if they existed)

## 📋 Remaining Pages to Create

You need to create the following page files. Here's the complete code for each:

### 1. Campuses Page

Create: `src/app/campuses/page.tsx`

```typescript
'use client';

import Link from 'next/link';
import { getAllCampuses } from '@/data/schoolData';

export default function CampusesPage() {
  const campuses = getAllCampuses();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h2>Our Campuses</h2>
          <p>Six Convenient Locations Serving Your Language Learning Needs</p>
        </div>
      </section>

      <section className="campuses-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Campus</h2>
            <p>Each campus offers all 12 languages with expert instructors</p>
          </div>

          <div className="campuses-grid">
            {campuses.map((campus) => (
              <Link
                key={campus.id}
                href={`/campus/${campus.id}`}
                className="campus-card"
              >
                <div className="campus-icon">{campus.icon}</div>
                <h3>{campus.name}</h3>
                <p className="campus-location">📍 {campus.location}</p>
                <p className="campus-description">{campus.description}</p>
                <ul className="campus-features">
                  <li>✓ All 12 Languages Available</li>
                  <li>✓ Modern Learning Labs</li>
                  <li>✓ Expert Instructors</li>
                  <li>✓ Flexible Schedules</li>
                </ul>
                <button className="btn btn-primary">Explore Campus →</button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

### 2. Languages Page

Create: `src/app/languages/page.tsx`

```typescript
'use client';

import Link from 'next/link';
import { getAllLanguages, getTeachersByLanguage } from '@/data/schoolData';

export default function LanguagesPage() {
  const languages = getAllLanguages();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h2>Languages We Offer</h2>
          <p>Choose from our wide range of language courses</p>
        </div>
      </section>

      <section className="languages-section">
        <div className="container">
          <div className="section-header">
            <h2>All Languages</h2>
            <p>Click any language to view teachers and course details</p>
          </div>

          <div className="languages-grid">
            {languages.map((language) => {
              const teacherCount = getTeachersByLanguage(language.id).length;
              return (
                <Link
                  key={language.id}
                  href={`/language/${language.id}`}
                  className="language-card"
                >
                  <div className="language-icon">{language.icon}</div>
                  <h3>{language.name}</h3>
                  <p>{language.description}</p>
                  <div className="language-stats">
                    <div className="stat">
                      <span className="stat-label">Teachers:</span>
                      <span className="stat-value">{teacherCount}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Levels:</span>
                      <span className="stat-value">{language.levels}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary">View Teachers</button>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
```

### 3. Individual Language Page

Create: `src/app/language/[lang]/page.tsx`

```typescript
import Link from 'next/link';
import { getLanguageById, getTeachersByLanguage } from '@/data/schoolData';
import { notFound } from 'next/navigation';

export default async function LanguagePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const language = getLanguageById(lang);

  if (!language) {
    notFound();
  }

  const teachers = getTeachersByLanguage(lang);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h2>
            {language.icon} {language.name} Teachers
          </h2>
          <p>{language.description}</p>
        </div>
      </section>

      <section className="teachers-section">
        <div className="container">
          <div className="section-header">
            <h2>Our {language.name} Instructors</h2>
            <p>Click on any teacher to view their profile and register</p>
          </div>

          <div className="teachers-container">
            {teachers.map((teacher) => (
              <Link
                key={teacher.id}
                href={`/teacher/${teacher.id}`}
                className="teacher-card"
              >
                <div className="teacher-photo">{teacher.photo}</div>
                <div className="teacher-info">
                  <h3>{teacher.name}</h3>
                  <p className="teacher-title">{teacher.title}</p>
                  <p className="teacher-specialization">{teacher.specialization}</p>
                  <div className="teacher-stats">
                    <div className="stat">
                      <span className="stat-value">{teacher.experience}</span>
                      <span className="stat-label">Years</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{teacher.rating}</span>
                      <span className="stat-label">Rating</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{teacher.students}</span>
                      <span className="stat-label">Students</span>
                    </div>
                  </div>
                  <p className="teacher-bio">
                    {teacher.bio.substring(0, 150)}...
                  </p>
                  <button className="btn btn-primary">View Profile</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

### 4. Individual Teacher Page

Create: `src/app/teacher/[id]/page.tsx`

```typescript
import { getTeacherById, getLanguageById } from '@/data/schoolData';
import { notFound } from 'next/navigation';

export default async function TeacherPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teacher = getTeacherById(parseInt(id));

  if (!teacher) {
    notFound();
  }

  const language = getLanguageById(teacher.languageId);

  return (
    <>
      <section className="teacher-profile">
        <div className="container">
          <div className="profile-header">
            <div className="profile-top">
              <div className="profile-photo-container">
                <div className="profile-photo">{teacher.photo}</div>
              </div>
              <div className="profile-details">
                <h1>{teacher.name}</h1>
                <p className="profile-title">{teacher.title}</p>
                <p className="profile-language">
                  {language?.icon} {language?.name} Instructor
                </p>
                <div className="quick-stats">
                  <div className="quick-stat">
                    <span className="quick-stat-value">{teacher.experience}</span>
                    <span className="quick-stat-label">Years Experience</span>
                  </div>
                  <div className="quick-stat">
                    <span className="quick-stat-value">{teacher.rating}</span>
                    <span className="quick-stat-label">Rating</span>
                  </div>
                  <div className="quick-stat">
                    <span className="quick-stat-value">{teacher.students}</span>
                    <span className="quick-stat-label">Students Taught</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-main">
            <div className="profile-content">
              <div className="content-section">
                <h2>About {teacher.name}</h2>
                <p>{teacher.bio}</p>
              </div>

              <div className="content-section">
                <h2>Education</h2>
                <ul>
                  {teacher.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className="content-section">
                <h2>Certifications</h2>
                <ul>
                  {teacher.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>

              <div className="content-section">
                <h2>Courses Offered</h2>
                {teacher.courses.map((course, index) => (
                  <div key={index} className="course-item">
                    {course}
                  </div>
                ))}
              </div>

              <div className="content-section">
                <h2>Languages Spoken</h2>
                <ul>
                  {teacher.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="profile-sidebar">
              <div className="sidebar-section">
                <h3>Quick Stats</h3>
                <div className="sidebar-stats">
                  <div className="sidebar-stat">
                    <span className="sidebar-stat-label">Experience</span>
                    <span className="sidebar-stat-value">{teacher.experience} years</span>
                  </div>
                  <div className="sidebar-stat">
                    <span className="sidebar-stat-label">Students</span>
                    <span className="sidebar-stat-value">{teacher.students}+</span>
                  </div>
                  <div className="sidebar-stat">
                    <span className="sidebar-stat-label">Rating</span>
                    <span className="sidebar-stat-value">{teacher.rating}/5.0</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <span className="contact-icon">📅</span>
                  <div className="contact-text">
                    <span className="contact-label">Schedule</span>
                    <span className="contact-value">{teacher.schedule}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{teacher.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

### 5. Individual Campus Page

Create: `src/app/campus/[id]/page.tsx`

```typescript
import Link from 'next/link';
import { getCampusById, getAllLanguages } from '@/data/schoolData';
import { notFound } from 'next/navigation';

export default async function CampusPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const campus = getCampusById(parseInt(id));

  if (!campus) {
    notFound();
  }

  const languages = getAllLanguages();

  return (
    <>
      <section className="campus-hero">
        <div className="campus-hero-content">
          <div className="campus-hero-icon">{campus.icon}</div>
          <h1>{campus.name}</h1>
          <p className="campus-hero-location">📍 {campus.location}</p>
          <p className="campus-hero-description">{campus.description}</p>
          <div className="campus-hero-actions">
            <Link href="/languages" className="btn btn-primary btn-large">
              View All Languages
            </Link>
            <Link href="/campuses" className="btn btn-secondary btn-large">
              View Other Campuses
            </Link>
          </div>
        </div>
      </section>

      <section className="campus-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Campus Information</h2>
            <p>Everything you need to know about {campus.name}</p>
          </div>

          <div className="campus-info-grid">
            <div className="campus-info-card">
              <h3>📍 Location</h3>
              <p>{campus.address}</p>
            </div>
            <div className="campus-info-card">
              <h3>🌍 Languages</h3>
              <p>All 12 languages available</p>
            </div>
            <div className="campus-info-card">
              <h3>👥 Class Sizes</h3>
              <p>8-15 students per class</p>
            </div>
            <div className="campus-info-card">
              <h3>⏰ Schedule</h3>
              <p>Morning, Afternoon, Evening & Weekend classes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="languages-section">
        <div className="container">
          <div className="section-header">
            <h2>Languages at {campus.name}</h2>
            <p>All languages are available at this campus</p>
          </div>

          <div className="languages-grid">
            {languages.map((language) => (
              <Link
                key={language.id}
                href={`/language/${language.id}`}
                className="language-card"
              >
                <div className="language-icon">{language.icon}</div>
                <h3>{language.name}</h3>
                <p>{language.description}</p>
                <button className="btn btn-primary">View Teachers</button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

## 🚀 Running the Application

1. Navigate to the Next.js app directory:
   ```bash
   cd nextjs-app
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## 📁 Project Structure

```
nextjs-app/
├── src/
│   ├── app/
│   │   ├── campus/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── campuses/
│   │   │   └── page.tsx
│   │   ├── language/
│   │   │   └── [lang]/
│   │   │       └── page.tsx
│   │   ├── languages/
│   │   │   └── page.tsx
│   │   ├── teacher/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── schoolData.ts
│   └── types/
│       └── index.ts
└── public/
    └── images/
```

## ⚠️ Important Notes

1. **All pages use Next.js App Router** with TypeScript
2. **Dynamic routes** are used for individual campus, language, and teacher pages
3. **Client components** are marked with `'use client'` where needed
4. **The CSS from the original project** has been preserved in `globals.css`
5. **All data** is typed and centralized in `src/data/schoolData.ts`

## 🎨 Styling

The original CSS has been copied to `src/app/globals.css` and is imported in the root layout. All CSS class names remain the same as the original HTML project.

## 🔄 Next Steps

After creating the remaining page files listed above:

1. Test all routes
2. Add any missing functionality (e.g., registration modal, search features)
3. Optimize images with Next.js `Image` component if needed
4. Add any additional features you want

## 🐛 Troubleshooting

If you encounter TypeScript errors, make sure:
- All files are in the correct directories
- The `@/` path alias is configured in `tsconfig.json`
- Dependencies are installed

## ✅ Conversion Complete!

Once you create the files listed above, your Next.js conversion will be complete! The site will have the same functionality as the original HTML version but with all the benefits of Next.js.
