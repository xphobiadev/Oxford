import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Universal Oxford Spires is dedicated to providing world-class
              language education. With over 15 years of experience and 6
              convenient campus locations, we&apos;ve helped thousands of students
              achieve their language learning goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/campuses">Our Campuses</Link></li>
              <li><Link href="/languages">All Languages</Link></li>
              <li><Link href="/#reviews">Student Reviews</Link></li>
              <li><Link href="/#team">Our Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Languages */}
          <div className="footer-section">
            <h3>Popular Languages</h3>
            <ul>
              <li><Link href="/language/english">🇬🇧 English</Link></li>
              <li><Link href="/language/spanish">🇪🇸 Spanish</Link></li>
              <li><Link href="/language/french">🇫🇷 French</Link></li>
              <li><Link href="/language/german">🇩🇪 German</Link></li>
              <li><Link href="/language/chinese">🇨🇳 Chinese</Link></li>
              <li><Link href="/language/japanese">🇯🇵 Japanese</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <strong>Main Office:</strong><br />
              📍 123 Education Street<br />
              Learning City, LC 12345
            </p>
            <p>📞 <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
            <p>
              ✉️{' '}
              <a href="mailto:info@globallanguage.edu">
                info@globallanguage.edu
              </a>
            </p>

            <div className="social-links">
              <a href="#" title="Facebook" aria-label="Facebook">f</a>
              <a href="#" title="Twitter" aria-label="Twitter">𝕏</a>
              <a href="#" title="Instagram" aria-label="Instagram">📷</a>
              <a href="#" title="LinkedIn" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; 2025 Universal Oxford Spires. All rights reserved. |{' '}
            <a href="#" style={{ color: 'var(--gray-400)' }}>Privacy Policy</a> |{' '}
            <a href="#" style={{ color: 'var(--gray-400)' }}>Terms of Service</a>
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-500)' }}>
            Created by Mohamed Bouliani
          </p>
        </div>
      </div>
    </footer>
  );
}
