export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  status: 'available' | 'coming-soon';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}