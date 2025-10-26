'use client';

import { useState } from 'react';

interface EnrollmentModalProps {
  teacherName: string;
  teacherLanguage: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ 
  teacherName, 
  teacherLanguage, 
  isOpen, 
  onClose 
}: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    level: 'beginner',
    preferredSchedule: '',
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
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          level: 'beginner',
          preferredSchedule: '',
          message: ''
        });
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {isSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Enrollment Request Sent!</h2>
            <p>Thank you for your interest. We&apos;ll contact you shortly to confirm your enrollment with {teacherName}.</p>
          </div>
        ) : (
          <>
            <h2>Enroll with {teacherName}</h2>
            <p className="modal-subtitle">Start your {teacherLanguage} learning journey</p>

            <form onSubmit={handleSubmit} className="enrollment-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="level">Current Level</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                >
                  <option value="beginner">Beginner (A1-A2)</option>
                  <option value="intermediate">Intermediate (B1-B2)</option>
                  <option value="advanced">Advanced (C1-C2)</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredSchedule">Preferred Schedule</label>
                <input
                  type="text"
                  id="preferredSchedule"
                  name="preferredSchedule"
                  value={formData.preferredSchedule}
                  onChange={handleChange}
                  placeholder="e.g., Weekday evenings, Weekend mornings"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your learning goals..."
                  rows={4}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-large" 
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enrollment Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
