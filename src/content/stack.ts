import { Bot, Code2, ServerCog, Wrench } from 'lucide-react';
import type { StackGroup } from '../types/content';

export const stack: StackGroup[] = [
  {
    title: 'Frontend',
    icon: Code2,
    description:
      'Production interfaces with maintainable component architecture and reliable state flow.',
    items: [
      {
        name: 'React',
        tags: ['Context API', 'Reusable Components', 'SPA Routing'],
      },
      {
        name: 'TypeScript',
        tags: ['Strong Typing', 'Content Models', 'Interfaces'],
      },
      {
        name: 'SCSS / CSS',
        tags: ['Responsive Layouts', 'Design Tokens', 'Accessibility'],
      },
      { name: 'Vite', tags: ['Client Apps', 'Fast Builds'] },
    ],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    description:
      'Service logic, integrations, data movement, and application infrastructure.',
    items: [
      {
        name: 'Node.js',
        tags: ['APIs', 'Integrations', 'Application Services'],
      },
      {
        name: 'Python',
        tags: ['Data Workflows', 'Automation', 'ML Prototypes', 'APIs'],
      },
      { name: 'Go', tags: ['Services', 'Backend Systems', 'APIs'] },
      { name: 'SQL', tags: ['Reporting', 'Analytics Models'] },
    ],
  },
  {
    title: 'AI and Cloud',
    icon: Bot,
    description:
      'Realtime AI workflows, voice systems, analytics infrastructure, and cloud data pipelines.',
    items: [
      {
        name: 'OpenAI',
        tags: ['Voice Agents', 'Prompt Caching', 'Low Latency', 'Tools', 'MCP'],
      },
      {
        name: 'Twilio / SIP',
        tags: [
          'Live Calls',
          'Human Handoff',
          'Call Handling',
          'Call Recording',
          'SIP Trunk',
        ],
      },
      {
        name: 'Google Cloud Platform',
        tags: [
          'Cloud Functions',
          'Cloud Run',
          'BigQuery (OLAP)',
          'Cloud Storage',
          'Cloud Tasks',
        ],
      },
      {
        name: 'Firestore / Cloud Functions',
        tags: ['CDC Pipelines', 'Event-Driven Architecture', 'OLTP'],
      },
      {
        name: 'Machine Learning',
        tags: ['Scikit-learn', 'Pandas'],
      },
    ],
  },
  {
    title: 'Automation and Developer Tools',
    icon: Wrench,
    description:
      'Tooling that protects release quality and reduces manual engineering drag.',
    items: [
      { name: 'Playwright', tags: ['E2E Regression', 'Critical User Flows'] },
      { name: 'Selenium', tags: ['Scraping', 'Dataset Collection'] },
      { name: 'Docker', tags: ['Environment Parity', 'Packaging'] },
      { name: 'Matplotlib', tags: ['Insight Reports', 'Visualization'] },
      { name: 'Cursor / Codex', tags: ['AI Development'] },
    ],
  },
];
