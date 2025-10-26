'use client';

import { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';

interface TeacherProfileClientProps {
  teacherName: string;
  teacherLanguage: string;
}

export default function TeacherProfileClient({ teacherName, teacherLanguage }: TeacherProfileClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="profile-actions">
        <button 
          className="btn btn-primary btn-large" 
          onClick={() => setIsModalOpen(true)}
        >
          📚 Enroll Now
        </button>
        <button className="btn btn-secondary btn-large">
          📧 Send Message
        </button>
      </div>

      <EnrollmentModal
        teacherName={teacherName}
        teacherLanguage={teacherLanguage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
