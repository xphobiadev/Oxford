export interface Campus {
  id: number;
  name: string;
  icon: string;
  location: string;
  address: string;
  description: string;
  allLanguages: boolean;
}

export interface Language {
  id: string;
  name: string;
  icon: string;
  description: string;
  levels: string;
  duration: string;
  classSizes: string;
  schedule: string;
}

export interface Teacher {
  id: number;
  name: string;
  title: string;
  photo: string;
  languageId: string;
  specialization: string;
  experience: number;
  rating: number;
  students: number;
  bio: string;
  education: string[];
  certifications: string[];
  courses: string[];
  languages: string[];
  schedule: string;
  email: string;
}

export interface SchoolData {
  campuses: Campus[];
  languages: Language[];
  teachers: Teacher[];
  branches: Campus[];
}
