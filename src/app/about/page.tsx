import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="campus-hero">
        <div className="container">
          <div className="campus-hero-content">
            <div className="campus-hero-icon">🎓</div>
            <h1>About Universal Oxford Spires</h1>
            <p className="campus-hero-location">Excellence in Language Education Since 2009</p>
            <p className="campus-hero-description">
              Empowering students worldwide to achieve their language learning goals through innovative teaching methods and world-class instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="campus-info-section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="section-header">
              <h2>Our Story</h2>
              <p>Building bridges through language education</p>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Founded in 2009, Universal Oxford Spires began with a simple yet powerful vision: to make world-class language education accessible to everyone. What started as a single classroom in downtown has grown into a thriving network of 6 campuses serving over 2,500 active students.
              </p>
              
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our journey has been marked by innovation, dedication, and an unwavering commitment to student success. We&apos;ve expanded our offerings from 3 languages to 12, assembled a team of over 50 expert instructors from around the world, and developed cutting-edge teaching methodologies that blend traditional excellence with modern technology.
              </p>

              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                Today, we&apos;re proud to be recognized as one of the leading language academies in the region, with a 95% student satisfaction rate and countless success stories of students who have achieved their personal and professional goals through language learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="campuses-grid-section">
        <div className="container">
          <div className="campus-info-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="campus-info-card">
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional language education that empowers individuals to communicate confidently across cultures, achieve their academic and professional goals, and become global citizens. We strive to create an inclusive, supportive learning environment where every student can thrive.
              </p>
            </div>

            <div className="campus-info-card">
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the world&apos;s most trusted and innovative language academy, recognized for transforming lives through education. We envision a future where language barriers no longer limit opportunities, and where our graduates serve as ambassadors of cultural understanding worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="campus-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="languages-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="language-card">
              <div className="language-icon">💡</div>
              <h3>Excellence</h3>
              <p>
                We maintain the highest standards in teaching, curriculum development, and student support services.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">🤝</div>
              <h3>Inclusivity</h3>
              <p>
                We welcome students from all backgrounds and create a respectful, diverse learning community.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                We continuously evolve our methods, embracing new technologies and pedagogical approaches.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">❤️</div>
              <h3>Student-Centered</h3>
              <p>
                Every decision we make prioritizes student success, satisfaction, and personal growth.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">🌍</div>
              <h3>Cultural Awareness</h3>
              <p>
                We celebrate diversity and promote understanding across cultures through language learning.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">📈</div>
              <h3>Continuous Growth</h3>
              <p>
                We invest in our teachers, facilities, and programs to ensure ongoing improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2>By The Numbers</h2>
            <p>Our impact in the language education community</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Teachers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Languages Offered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Campus Locations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Graduates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="campuses-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Universal Oxford Spires?</h2>
            <p>What makes us different from other language schools</p>
          </div>

          <div className="languages-grid">
            <div className="language-card">
              <div className="language-icon">🎯</div>
              <h3>Expert Instructors</h3>
              <p>
                All our teachers are certified professionals with advanced degrees and years of international teaching experience. They bring authentic cultural perspectives to every lesson.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>
                From beginner to advanced levels, our carefully designed curriculum covers all language skills: speaking, listening, reading, and writing with cultural context.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">⏰</div>
              <h3>Flexible Scheduling</h3>
              <p>
                We offer morning, afternoon, evening, and weekend classes to accommodate your busy lifestyle. Learn at your own pace with our flexible program options.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">🏢</div>
              <h3>Modern Facilities</h3>
              <p>
                All our campuses feature state-of-the-art classrooms, multimedia learning centers, libraries, and comfortable student lounges for optimal learning.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">🏆</div>
              <h3>Exam Preparation</h3>
              <p>
                Specialized courses for IELTS, TOEFL, DELE, DELF, TestDaF, JLPT, HSK, and other internationally recognized language proficiency exams.
              </p>
            </div>

            <div className="language-card">
              <div className="language-icon">🌐</div>
              <h3>Global Community</h3>
              <p>
                Join a diverse community of learners from over 40 countries. Practice languages with native speakers and make international friendships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <div className="team-info">
                <h3>Dr. James Wilson</h3>
                <p className="role">Academy Director</p>
                <p>PhD in Educational Leadership with 20+ years of experience in language education.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <div className="team-info">
                <h3>Patricia Brown</h3>
                <p className="role">Academic Coordinator</p>
                <p>Ensuring curriculum excellence and teacher training across all campuses.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <div className="team-info">
                <h3>Michael Davis</h3>
                <p className="role">Student Services Manager</p>
                <p>Dedicated to comprehensive student support and satisfaction.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <div className="team-info">
                <h3>Rachel Green</h3>
                <p className="role">Marketing Director</p>
                <p>Building partnerships and connecting students with opportunities.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/#team" className="btn btn-primary btn-large">
              View All Team Members
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Start Your Language Learning Journey?</h2>
          <p>Join thousands of successful students at Universal Oxford Spires</p>
          <div className="cta-buttons">
            <Link href="/campuses" className="btn btn-secondary btn-large">
              Explore Our Campuses
            </Link>
            <Link href="/languages" className="btn btn-success btn-large">
              View All Languages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
