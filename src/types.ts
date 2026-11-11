export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'data' | 'marketing' | 'tech' | 'consulting';
  iconName: 'chart' | 'cloud' | 'megaphone' | 'media' | 'code' | 'lightbulb';
  fullDescription: string;
  technologies: string[];
  deliverables: string[];
  expectedImpact: string;
}

export interface MethodologyStep {
  stepNumber: number;
  title: string;
  summary: string;
  details: string;
  duration: string;
  deliverables: string[];
  iconName: 'search' | 'calendar' | 'rocket' | 'trending';
}

export interface ArticleItem {
  id: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
  tags: string[];
  imagePlaceholderGradient: string;
  author: {
    name: string;
    role: string;
  };
}

export interface ClientPartner {
  name: string;
  role: string;
  logoType: 'google' | 'bci' | 'samsung' | 'alef' | 'bancoestado' | 'falabella';
}
