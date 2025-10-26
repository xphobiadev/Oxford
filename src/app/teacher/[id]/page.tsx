import { getTeacherById, getLanguageById } from '@/data/schoolData';
import { notFound } from 'next/navigation';
import TeacherProfileClient from '@/components/TeacherProfileClient';

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
            <TeacherProfileClient 
              teacherName={teacher.name}
              teacherLanguage={language?.name || ''}
            />
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
