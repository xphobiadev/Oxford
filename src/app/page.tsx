'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import CampusDiagram from '@/components/CampusDiagram';

export default function Home() {
  useEffect(() => {
    // Animate counters when they come into view
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const increment = target / speed;
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '+';
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  // Campuses are rendered via CampusDiagram component

  return (
    <>
      <section className="hero">
        <div className="container">
          <h2>Welcome to Universal Oxford Spires</h2>
          <p>Unlock Your Potential Through Language Learning</p>
          <div className="cta-buttons">
            <Link href="/campuses" className="btn btn-primary btn-large">Explore Our Campuses</Link>
            <Link href="/languages" className="btn btn-secondary btn-large">View All Languages</Link>
            <Link href="/contact" className="btn btn-secondary btn-large">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="branches-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Campus Network</h2>
            <p>Six convenient locations - Click any campus to explore</p>
          </div>
          <CampusDiagram />
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link href="/campuses" className="btn btn-primary btn-large">View All Campus Details →</Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-target="2500">0+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="50">0+</div>
              <div className="stat-label">Expert Teachers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="12">0+</div>
              <div className="stat-label">Languages Offered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="6">0+</div>
              <div className="stat-label">Campus Locations</div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Students Say</h2>
            <p>Real experiences from our satisfied students across all campuses</p>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">JS</div>
                <div className="reviewer-info">
                  <h4>John Smith</h4>
                  <p>Business Professional | Main Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;The English program here transformed my career. The teachers are exceptional and the curriculum is perfectly designed for business professionals. Highly recommend!&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">EW</div>
                <div className="reviewer-info">
                  <h4>Emma Wilson</h4>
                  <p>University Student | North Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;I passed my IELTS exam with a score of 8.0 thanks to Dr. Johnson&apos;s excellent preparation course. The facilities at North Campus are top-notch!&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">DM</div>
                <div className="reviewer-info">
                  <h4>David Martinez</h4>
                  <p>Travel Enthusiast | South Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;Learning Spanish with Prof. María García was an amazing experience. Her teaching style is engaging and I can now confidently communicate during my travels.&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">LA</div>
                <div className="reviewer-info">
                  <h4>Lisa Anderson</h4>
                  <p>Corporate Manager | East Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;The French course exceeded my expectations. Sophie Dubois&apos;s cultural insights made learning the language so much more meaningful. East Campus is very convenient!&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">RT</div>
                <div className="reviewer-info">
                  <h4>Robert Taylor</h4>
                  <p>Engineer | West Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;Dr. Mueller&apos;s technical German course was exactly what I needed for my job in Germany. Professional, highly effective, and great parking at West Campus!&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">JL</div>
                <div className="reviewer-info">
                  <h4>Jennifer Lee</h4>
                  <p>Business Owner | Central Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;Learning Mandarin with Li Wei opened up new business opportunities for me in China. Excellent teacher and the Central Campus location is perfect!&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">SK</div>
                <div className="reviewer-info">
                  <h4>Sarah Kim</h4>
                  <p>Graduate Student | Main Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;Yuki Tanaka&apos;s Japanese classes are incredible! I went from zero knowledge to passing JLPT N3 in just one year. The teaching methods are very effective.&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">MC</div>
                <div className="reviewer-info">
                  <h4>Marco Costa</h4>
                  <p>Chef | South Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;Giulia Romano&apos;s Italian Through Cooking class is genius! I learned Italian while mastering authentic Italian recipes. Best language class ever!&quot;
              </p>
            </div>
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">AP</div>
                <div className="reviewer-info">
                  <h4>Aisha Patel</h4>
                  <p>Healthcare Professional | North Campus</p>
                </div>
              </div>
              <div className="rating">★★★★★</div>
              <p className="review-text">
                &quot;Dr. Ahmed Al-Rahman&apos;s Arabic course helped me communicate with patients effectively. His patient teaching style made learning Arabic script easy!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p>Dedicated professionals committed to your language learning success</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <div className="team-info">
                <h3>Dr. James Wilson</h3>
                <p className="role">Academy Director</p>
                <p>Leading educational innovation and strategic development for over 20 years. PhD in Educational Leadership.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <div className="team-info">
                <h3>Patricia Brown</h3>
                <p className="role">Academic Coordinator</p>
                <p>Ensuring excellence in curriculum development and teacher training across all campuses.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <div className="team-info">
                <h3>Michael Davis</h3>
                <p className="role">Student Services Manager</p>
                <p>Dedicated to student success and satisfaction through comprehensive support services.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <div className="team-info">
                <h3>Rachel Green</h3>
                <p className="role">Marketing Director</p>
                <p>Connecting students with opportunities and building community partnerships worldwide.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <div className="team-info">
                <h3>David Kumar</h3>
                <p className="role">Technology Director</p>
                <p>Leading digital transformation and innovative learning technologies across all platforms.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <div className="team-info">
                <h3>Lisa Chen</h3>
                <p className="role">Campus Operations Manager</p>
                <p>Overseeing facility management and ensuring optimal learning environments at all locations.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <div className="team-info">
                <h3>Robert Martinez</h3>
                <p className="role">Financial Director</p>
                <p>Managing financial operations and scholarship programs to make education accessible to all.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <div className="team-info">
                <h3>Sarah Johnson</h3>
                <p className="role">Human Resources Director</p>
                <p>Building a world-class team and fostering professional development for all staff members.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
