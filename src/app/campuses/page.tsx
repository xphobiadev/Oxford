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
