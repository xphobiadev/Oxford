'use client';

import Link from 'next/link';
import Image from 'next/image';
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
                  <div className="language-icon">
                    <Image 
                      src={language.icon} 
                      alt={`${language.name} flag`}
                      width={160}
                      height={120}
                      style={{ borderRadius: '8px', objectFit: 'cover' }}
                    />
                  </div>
                  <h3>{language.name}</h3>
                  <p>{language.description}</p>
                  <div className="language-stats">
                    <div className="stat">
                      <span className="stat-value">{teacherCount}</span>
                      <span className="stat-label">Teachers</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value" style={{ fontSize: '0.75rem', whiteSpace: 'normal', lineHeight: '1.3' }}>{language.levels}</span>
                      <span className="stat-label">Levels</span>
                    </div>
                  </div>
                  <div className="btn btn-primary" style={{ marginTop: 'auto' }}>View Teachers →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
