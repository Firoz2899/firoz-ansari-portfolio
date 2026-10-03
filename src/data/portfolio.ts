export const profile = {
  name: 'Alex Rivera',
  role: 'Full Stack Developer',
  tagline: 'Building performant web applications end-to-end',
  bio: 'I design and build robust web applications from the ground up — architecting APIs, crafting intuitive interfaces, and optimizing databases for scale. Passionate about clean architecture, developer experience, and shipping products that feel effortless.',
  location: 'San Francisco, CA',
  email: 'hello@alexrivera.dev',
  photo: 'https://images.pexels.com/photos/14189629/pexels-photo-14189629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  stats: [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Shipped', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'GitHub Stars', value: '1.2k' },
  ],
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 93 },
      { name: 'NestJS', level: 85 },
      { name: 'ASP.NET MVC', level: 82 },
      { name: '.NET Core', level: 80 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MSSQL', level: 85 },
      { name: 'Redis', level: 78 },
    ],
  },
];

export const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechFlow Inc.',
    period: '2023 — Present',
    description:
      'Leading a team of 5 developers building a SaaS analytics platform. Architected the migration from a monolith to a NestJS microservices architecture, reducing page load times by 40%.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Wave',
    period: '2021 — 2023',
    description:
      'Developed and maintained multiple client web applications using React and Node.js. Built a custom CMS handling 200k+ daily requests with a 99.9% uptime SLA.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    role: 'Backend Developer',
    company: 'CodeCraft Solutions',
    period: '2019 — 2021',
    description:
      'Built RESTful APIs and microservices with .NET Core and ASP.NET MVC. Designed database schemas for high-transaction fintech applications processing millions of records.',
    tech: ['.NET Core', 'ASP.NET MVC', 'MSSQL', 'Docker'],
  },
  {
    role: 'Junior Developer',
    company: 'StartHub Labs',
    period: '2018 — 2019',
    description:
      'Started my professional journey building features for early-stage startups. Learned the importance of clean code, testing, and continuous deployment.',
    tech: ['React.js', 'Node.js', 'PostgreSQL'],
  },
];

export const projects = [
  {
    title: 'Nexus Analytics',
    description:
      'A real-time analytics dashboard processing millions of events daily. Features customizable widgets, live data streaming, and exportable reports.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    demo: '#',
    github: '#',
    featured: true,
    images: [
      'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    title: 'DevFlow CMS',
    description:
      'A headless CMS with a drag-and-drop page builder, multi-language support, and a plugin system. Handles 200k+ daily requests at 99.9% uptime.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    demo: '#',
    github: '#',
    featured: true,
    images: [
      'https://images.pexels.com/photos/14851420/pexels-photo-14851420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8247921/pexels-photo-8247921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    title: 'PayGate API',
    description:
      'A payment processing gateway supporting multiple providers with unified webhooks, idempotency keys, and fraud detection rules.',
    tech: ['.NET Core', 'MSSQL', 'Docker'],
    gradient: 'from-amber-500/20 to-orange-600/20',
    demo: '#',
    github: '#',
    featured: false,
    images: [
      'https://images.pexels.com/photos/4841737/pexels-photo-4841737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29502363/pexels-photo-29502363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29502357/pexels-photo-29502357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    title: 'TaskPilot',
    description:
      'A project management tool with kanban boards, Gantt charts, real-time collaboration, and automated workflow triggers.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL'],
    gradient: 'from-rose-500/20 to-pink-600/20',
    demo: '#',
    github: '#',
    featured: false,
    images: [
      'https://images.pexels.com/photos/38888656/pexels-photo-38888656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6804093/pexels-photo-6804093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38888681/pexels-photo-38888681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    title: 'CodeQuiz Arena',
    description:
      'An interactive coding challenge platform with live code execution, leaderboards, and a custom test-case runner backed by Docker.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    gradient: 'from-violet-500/20 to-indigo-600/20',
    demo: '#',
    github: '#',
    featured: false,
    images: [
      'https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
  {
    title: 'InsightHub',
    description:
      'A data visualization tool that transforms raw CSV uploads into interactive dashboards with filtering, grouping, and predictive trend lines.',
    tech: ['React.js', '.NET Core', 'MSSQL'],
    gradient: 'from-sky-500/20 to-cyan-600/20',
    demo: '#',
    github: '#',
    featured: false,
    images: [
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38808473/pexels-photo-38808473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6366444/pexels-photo-6366444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
  },
];

export const services = [
  {
    icon: 'Code2',
    title: 'Web Application Development',
    description:
      'End-to-end development of responsive, performant web applications using modern frameworks and best practices.',
  },
  {
    icon: 'Server',
    title: 'API Design & Architecture',
    description:
      'Designing scalable RESTful and GraphQL APIs with clean architecture, authentication, and thorough documentation.',
  },
  {
    icon: 'Database',
    title: 'Database Optimization',
    description:
      'Schema design, query optimization, and migration strategies for SQL and NoSQL databases to handle scale.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'UI/UX Implementation',
    description:
      'Translating Figma designs into pixel-perfect, accessible, and animated interfaces with Tailwind CSS.',
  },
  {
    icon: 'Cloud',
    title: 'DevOps & Deployment',
    description:
      'CI/CD pipelines, Docker containerization, and cloud deployment on AWS, Vercel, and DigitalOcean.',
  },
  {
    icon: 'Search',
    title: 'Code Review & Mentoring',
    description:
      'Thorough code reviews, architectural guidance, and mentoring junior developers on best practices.',
  },
];

export const techStack = [
  { name: 'React.js', icon: 'Atom' },
  { name: 'Next.js', icon: 'Triangle' },
  { name: 'Node.js', icon: 'Hexagon' },
  { name: 'NestJS', icon: 'Boxes' },
  { name: 'ASP.NET MVC', icon: 'Code2' },
  { name: '.NET Core', icon: 'FileCode' },
  { name: 'MongoDB', icon: 'Database' },
  { name: 'MSSQL', icon: 'Database' },
  { name: 'PostgreSQL', icon: 'Database' },
  { name: 'TypeScript', icon: 'Braces' },
  { name: 'Tailwind CSS', icon: 'Palette' },
  { name: 'Docker', icon: 'Container' },
  { name: 'AWS', icon: 'Cloud' },
  { name: 'Redis', icon: 'Zap' },
  { name: 'GraphQL', icon: 'Share2' },
  { name: 'Git', icon: 'GitBranch' },
];

export const githubActivity = {
  username: 'alexrivera',
  totalCommits: 2847,
  totalRepos: 64,
  totalStars: 1240,
  totalPRs: 312,
  contributionGraph: [
    0, 1, 0, 2, 1, 0, 0, 3, 2, 1, 0, 1, 4, 0,
    1, 2, 3, 1, 0, 2, 1, 0, 3, 5, 2, 1, 0, 1,
    0, 1, 4, 2, 3, 1, 0, 2, 1, 3, 0, 1, 2, 0,
    3, 2, 1, 0, 4, 3, 2, 1, 0, 2, 3, 1, 0, 1,
    1, 0, 2, 3, 4, 2, 1, 0, 3, 2, 1, 4, 2, 0,
    2, 3, 1, 0, 1, 2, 3, 4, 2, 1, 0, 3, 1, 2,
    0, 1, 2, 3, 4, 3, 2, 1, 0, 2, 1, 3, 2, 0,
    3, 4, 2, 1, 0, 2, 3, 1, 4, 2, 0, 1, 3, 2,
    1, 0, 2, 3, 4, 2, 1, 0, 3, 2, 4, 1, 0, 2,
    2, 3, 1, 0, 4, 2, 3, 1, 0, 2, 1, 3, 4, 2,
    0, 1, 2, 3, 4, 2, 1, 0, 3, 2, 1, 4, 2, 0,
    3, 2, 1, 0, 4, 3, 2, 1, 0, 2, 3, 4, 1, 2,
  ],
  recentRepos: [
    { name: 'nexus-analytics', stars: 234, forks: 45, language: 'TypeScript' },
    { name: 'devflow-cms', stars: 189, forks: 32, language: 'TypeScript' },
    { name: 'paygate-api', stars: 156, forks: 28, language: 'C#' },
    { name: 'taskpilot', stars: 142, forks: 21, language: 'TypeScript' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
] as const;
