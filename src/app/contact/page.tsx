'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getAllCampuses } from '@/data/schoolData';

export default function ContactPage() {
  const campuses = getAllCampuses();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campus: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          campus: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="campus-hero">
        <div className="container">
          <div className="campus-hero-content">
            <div className="campus-hero-icon">📧</div>
            <h1>Contact Us</h1>
            <p className="campus-hero-location">We&apos;re Here to Help</p>
            <p className="campus-hero-description">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="campus-info-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <h2 className="contact-form-title">
                Send Us a Message
              </h2>
              <p className="contact-form-subtitle">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSuccess ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, var(--success-color), #059669)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: '700',
                    margin: '0 auto 1.5rem',
                    animation: 'scaleIn 0.5s ease-out'
                  }}>✓</div>
                  <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: 'var(--gray-600)' }}>
                    Thank you for contacting us. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="campus">Preferred Campus</label>
                    <select
                      id="campus"
                      name="campus"
                      value={formData.campus}
                      onChange={handleChange}
                    >
                      <option value="">Select a campus</option>
                      {campuses.map((campus) => (
                        <option key={campus.id} value={campus.name}>
                          {campus.name} - {campus.location}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large" 
                    disabled={isSubmitting}
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="contact-info-card">
                <h3 className="contact-info-title">
                  Contact Information
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--gray-900)' }}>Main Office</strong>
                      <span style={{ color: 'var(--gray-600)' }}>123 Education Street<br />Learning City, LC 12345</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📞</span>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--gray-900)' }}>Phone</strong>
                      <a href="tel:+15551234567" className="contact-phone" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1rem' }}>
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>✉️</span>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--gray-900)' }}>Email</strong>
                      <a href="mailto:info@globallanguage.edu" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                        info@globallanguage.edu
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>⏰</span>
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--gray-900)' }}>Office Hours</strong>
                      <span style={{ color: 'var(--gray-600)' }}>
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--gray-900)' }}>
                  Follow Us
                </h3>
                <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                  Stay connected with us on social media for updates, tips, and community events.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" className="social-links" style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>f</a>
                  <a href="#" style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>𝕏</a>
                  <a href="#" style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>📷</a>
                  <a href="#" style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}>in</a>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Stack on Mobile */}
          <style jsx>{`
            @media (max-width: 768px) {
              div[style*="gridTemplateColumns"] {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
              }
              div[style*="padding: 2rem"] {
                padding: 1.5rem !important;
              }
            }
            
            @media (max-width: 480px) {
              div[style*="gridTemplateColumns"] {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
              }
              div[style*="padding: 2rem"] {
                padding: 1rem !important;
              }
              h2[style*="fontSize: 2rem"] {
                font-size: 1.5rem !important;
              }
              h3[style*="fontSize: 1.5rem"] {
                font-size: 1.25rem !important;
              }
              div[style*="width: 50px"] {
                width: 45px !important;
                height: 45px !important;
                font-size: 1.25rem !important;
              }
              .contact-phone {
                font-size: 0.875rem !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Campus Locations Section */}
      <section className="campuses-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Campuses</h2>
            <p>Six convenient locations to serve you better</p>
          </div>

          <div className="campuses-grid">
            {campuses.map((campus) => (
              <div key={campus.id} className="campus-card">
                <div className="campus-icon">{campus.icon}</div>
                <h3>{campus.name}</h3>
                <p className="campus-location">{campus.location}</p>
                <p className="campus-description">{campus.description}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginTop: '1rem' }}>
                  📍 {campus.address}
                </p>
                <Link href={`/campus/${campus.id}`} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  View Campus Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="campus-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="campus-info-card" style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <h3>What are your class schedules?</h3>
              <p>We offer flexible schedules with morning (9 AM - 12 PM), afternoon (1 PM - 4 PM), evening (5 PM - 8 PM), and weekend classes available at all campuses.</p>
            </div>

            <div className="campus-info-card" style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <h3>How do I enroll in a course?</h3>
              <p>You can enroll online through our website, visit any of our campuses, or call our admissions office at +1 (555) 123-4567 to speak with an advisor.</p>
            </div>

            <div className="campus-info-card" style={{ marginBottom: '1rem', textAlign: 'left' }}>
              <h3>Do you offer private lessons?</h3>
              <p>Yes! We offer one-on-one private lessons and small group tutoring sessions. Contact us for personalized pricing and scheduling.</p>
            </div>

            <div className="campus-info-card" style={{ textAlign: 'left' }}>
              <h3>What is your refund policy?</h3>
              <p>We offer a full refund if you withdraw within the first week of classes. After that, prorated refunds are available based on the number of classes attended.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Start Learning?</h2>
          <p>Explore our campuses and discover the perfect language program for you</p>
          <div className="cta-buttons">
            <Link href="/campuses" className="btn btn-secondary btn-large">
              View All Campuses
            </Link>
            <Link href="/languages" className="btn btn-success btn-large">
              Browse Languages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
