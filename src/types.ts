export type ThemeMode = 'dark' | 'light';

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100 percentage
  iconName: string;
  category: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Web Apps' | 'Utilities';
  description: string;
  techStack: string[];
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageBg: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  date?: string;
  metric: string;
  description: string;
  iconName: string;
  badgeColor: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  status?: string;
  issueDate: string;
  credentialUrl?: string;
  category: string;
  badgeText: string;
  skillsCovered: string[];
  previewGradient: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  years: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  location: string;
  courses: string[];
  iconName: string;
}

export interface CodingProfile {
  id: string;
  platform: string;
  handle: string;
  statTitle: string;
  statValue: string;
  profileUrl: string;
  iconName: string;
  colorGradient: string;
  badgeText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
