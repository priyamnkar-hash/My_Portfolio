export type TabType = 'home' | 'projects' | 'about' | 'contact';

export interface ProjectItem {
  id: string;
  serialNumber: string;
  title: string;
  category: 'Engineering' | 'Code' | 'Hybrid';
  tags: string[];
  description: string;
  image: string;
  altText: string;
  featured?: boolean;
  specs?: {
    structuralSystem?: string;
    algorithmicApproach?: string;
    loadCapacity?: string;
    simulationEngine?: string;
    languageStack?: string[];
    benchmark?: string;
  };
}

export interface SkillProgress {
  name: string;
  percentage: number;
}

export interface ProgrammingSkill {
  id: string;
  name: string;
  iconName: string;
  subtitle: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  active?: boolean;
}
