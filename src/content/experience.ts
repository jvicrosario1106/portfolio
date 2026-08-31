import {
  AudioLines,
  ChartNoAxesCombined,
  Network,
  ScanSearch,
  TableProperties,
} from 'lucide-react';
import type { Experience } from '../types/content';

export const experiences: Experience[] = [
  {
    company: 'Restoplus',
    role: 'Full Stack Software Engineer',
    startDate: 'Oct 2022',
    endDate: 'Present',
    highlights: [
      {
        title: 'AI Voice Ordering System',
        icon: AudioLines,
        bullets: [
          'Built the production AI voice ordering system using OpenAI Realtime and WebSockets, integrating Twilio/SIP for live call handling and human handoff.',
          'Optimized system performance through prompt caching, workflow refinement, and model upgrades to improve latency and cost efficiency.',
          'Integrated AI call recording and transcription for real-time performance evaluation and agent refinement.',
          'Expanded the ordering workflow with Uber Direct delivery integration.',
        ],
      },
      {
        title: 'BigQuery Sales Dashboards',
        icon: ChartNoAxesCombined,
        bullets: [
          'Designed SQL-based sales reporting dashboards on GCP BigQuery, tracking 10+ KPIs across a Firestore to BigQuery analytics pipeline.',
        ],
      },
      {
        title: 'POS System & Retail Features',
        icon: TableProperties,
        bullets: [
          'Refactored POS state management from MobX to React Context API, improving rendering and data flow.',
          'Implemented Group Orders, Table Bookings, and Linkly payment processing for retail transactions.',
          'Established a Playwright E2E regression suite covering 20+ critical workflows.',
        ],
      },
    ],
    technologies: [
      'TypeScript',
      'OpenAI',
      'Google Cloud Platform',
      'Firebase',
      'React.js',
      'Node.js',
      'Docker',
      'WebSockets',
      'Twilio',
      'Playwright',
      'SCSS',
      'Cursor',
      'MCP',
    ],
  },
  {
    company: 'SentiAI',
    role: 'AI Engineer Apprentice',
    startDate: 'Apr 2022',
    endDate: 'Nov 2022',
    highlights: [
      {
        title: 'Recommendation Engine Research',
        icon: Network,
        bullets: [
          'Explored collaborative filtering and matrix factorization techniques to prototype dynamic product suggestion models.',
        ],
      },
      {
        title: 'Automated Data Pipeline',
        icon: ScanSearch,
        bullets: [
          'Developed Selenium-based scraping architectures to aggregate large-scale training datasets from job listings.',
          'Created data visualization and insight reports using Matplotlib.',
          'Prototyped initial data pipelines on Google Cloud Platform.',
        ],
      },
    ],
    technologies: [
      'Python',
      'Pandas',
      'Selenium',
      'Matplotlib',
      'Google Cloud Platform',
      'Data Pipelines',
      'Data Analytics',
      'Machine Learning',
      'Scikit-learn',
    ],
  },
];
