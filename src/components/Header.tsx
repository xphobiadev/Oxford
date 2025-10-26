'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="contact-info">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉️ info@globallanguage.edu</span>
          </div>
          <div className="social-info">
            <span>Follow Us: Facebook | Twitter | Instagram | LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <div className="nav-container">
          {/* Logo Section */}
          <Link href="/" className="logo-section" style={{ cursor: 'pointer' }}>
            <Image 
              src="/images/logo.jpg" 
              alt="Universal Oxford Groupe Logo" 
              width={60} 
              height={60}
              className="logo-image"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
              unoptimized
              priority
            />
            <div className="school-name">
              <h1>Universal Oxford Groupe</h1>
              <p>Excellence in Language Education</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className={mobileMenuOpen ? 'active' : ''}>
            <ul>
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/campuses" onClick={() => setMobileMenuOpen(false)}>Our Campuses</Link></li>
              <li><Link href="/languages" onClick={() => setMobileMenuOpen(false)}>All Languages</Link></li>
              <li><Link href="/#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link></li>
              <li><Link href="/#team" onClick={() => setMobileMenuOpen(false)}>Our Team</Link></li>
              <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
