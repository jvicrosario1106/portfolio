import type { LucideIcon } from 'lucide-react';
import React from 'react';

export interface Cta {
  label: string;
  href: string;
}

export interface HomeContent {
  eyebrow: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  status: string;
  visualCaption: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface StackItem {
  name: string;
  tags?: string[];
}

export interface StackGroup {
  title: string;
  description?: string;
  icon: LucideIcon;
  items: StackItem[];
}

export interface ExperienceHighlight {
  title: string;
  bullets: string[];
  icon: LucideIcon;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights: ExperienceHighlight[];
  technologies: string[];
}

export interface InterestMetric {
  label: string;
  value: string;
}

export interface Interest {
  section: string;
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  metrics?: InterestMetric[];
  projects?: {
    name: string;
    description: string;
    meta: string;
  }[];
  icon: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  statusTitle: string;
  statusText: string;
  email: string;
  location: string;
  socials: SocialLink[];
}
