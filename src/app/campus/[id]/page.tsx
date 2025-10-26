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
