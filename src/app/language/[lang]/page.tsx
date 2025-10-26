import Link from 'next/link';
import Image from 'next/image';
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
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
            <Image 
              src={language.icon} 
              alt={`${language.name} flag`}
              width={120}
              height={90}
              style={{ borderRadius: '8px', objectFit: 'cover' }}
              unoptimized
              priority
            />
            {language.name} Teachers
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
                  <div className="btn btn-primary" style={{ marginTop: 'auto' }}>View Profile →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
