import type { Interest } from '../types/content';

export const interests: Interest[] = [
  {
    section: '01',
    kicker: 'Continuous Learning',
    title: 'Always exploring what comes next',
    description:
      'Keeping up with the rapidly evolving AI landscape, experimenting with emerging models, tools, and engineering patterns, and continuously expanding my technical toolkit.',
    tags: ['AI', 'LLMs', 'Generative AI', 'Emerging Tech'],
    metrics: [
      { label: 'Mindset', value: 'Always Learning' },
      { label: 'Focus', value: 'AI & Software' },
      { label: 'Curiosity', value: 'High' },
    ],
    icon: 'BrainCircuit',
  },

  {
    section: '02',
    kicker: 'Software Engineering',
    title: 'Building, breaking, and understanding systems',
    description:
      'I enjoy turning ideas into working software, exploring new technologies through hands-on experimentation, and finding better ways to build systems that are simple, reliable, and scalable.',
    tags: ['System Design', 'Experimentation', 'Problem Solving'],
    metrics: [
      { label: 'Approach', value: 'Hands-on' },
      { label: 'Mindset', value: 'Builder' },
      { label: 'Focus', value: 'Scalability' },
    ],
    icon: 'Code',
  },
  {
    section: '03',
    kicker: 'Life Outside Code',
    title: 'Exploring places, meeting paws',
    description:
      'Outside of software engineering, I enjoy traveling, discovering new places, experiencing different cultures, and spending time with my three cats. A good balance of exploration, downtime, and a little chaos keeps life interesting.',
    tags: ['Travel', 'Cats', 'Exploration'],
    metrics: [
      { label: 'Cats', value: '3' },
      { label: 'Travel', value: 'Exploring' },
      { label: 'Free Time', value: 'Well Spent' },
    ],
    icon: 'MapPin',
  },
];
