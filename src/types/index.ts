export type ProjectCategory = 
  | 'All' 
  | 'Machine Learning' 
  | 'Deep Learning' 
  | 'Generative AI' 
  | 'Agentic AI' 
  | 'Full Stack AI';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  githubUrl: string;
  liveDemoUrl?: string;
  thumbnail: string;
  highlights: string[];
  architectureNotes?: string;
}

export interface SkillItem {
  name: string;
  category: string;
  level?: string;
  badge?: string;
  isKey?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
  image: string;
  skills: string[];
  status: 'Verified' | 'Completed' | 'Pursuing';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  location: string;
  focus: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  points: string[];
  tags: string[];
}

