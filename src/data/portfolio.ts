import developerImage from "@/assets/images/Developer-Image.jpg"

export const profile = {
  name: 'Firoz Ansari',
  role: 'Full Stack Developer',
  tagline: 'Building scalable and user-focused web applications',
  bio: 'Full Stack Developer with 2+ years of experience building scalable web applications using React.js, Next.js, ASP.NET MVC, Node.js, and MSSQL. Experienced in developing responsive user interfaces, RESTful APIs, authentication systems, admin dashboards, and database-driven applications. Focused on clean architecture, performance optimization, and delivering reliable user experiences.',
  location: 'India',
  email: 'firozansari3712@gmail.com',
  photo: developerImage,
  social: {
    github: 'https://github.com/Firoz2899',
    linkedin: 'https://www.linkedin.com/in/firoz-alam-8a137b2b3/',
    twitter: '',
  },
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Professional Projects', value: '5+' },
    { label: 'Personal Projects', value: '2' },
    { label: 'Primary Stack', value: 'Full Stack' },
  ],
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Redux Toolkit', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'Context API', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'ASP.NET MVC', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MSSQL', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 80 },
      { name: 'Knex.js', level: 75 },
    ],
  },
  {
    category: 'Authentication & Tools',
    items: [
      { name: 'JWT Authentication', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Git', level: 85 },
      { name: 'Postman', level: 85 },
    ],
  },
];

export const experience = [
  {
    role: 'React & Dot Net Developer',
    company: 'Rnaura Technologies',
    period: 'Feb 2024 — Present',
    description:
      'Developing and maintaining scalable React.js applications with MVC C# backends. Building RESTful APIs, secure admin dashboards, role-based permissions, responsive interfaces, and database-driven features using MSSQL.',
    tech: ['React.js', 'ASP.NET MVC', 'C#', 'MSSQL', 'REST APIs'],
  },
];

export const projects = [
  {
    title: 'Rnaura',
    description:
      'A full-fledged React.js web application with an MVC C# backend. Implemented separate Public and Admin themes with role-based authentication and an admin panel for managing content and users.',
    tech: ['React.js', 'ASP.NET MVC', 'MSSQL'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    demo: 'https://rnaura.com/',
    github: '',
    featured: true,
    images: [],
  },
  {
    title: 'Car Rental – Admin Panel',
    description:
      'Admin panel and backend APIs for a car rental booking application. Developed MVC C# and MSSQL APIs for mobile integration and implemented booking and user management functionality.',
    tech: ['ASP.NET MVC', 'C#', 'MSSQL'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    demo: 'http://eaglecarrental.singhfarmfresh.in/',
    github: '',
    featured: true,
    images: [],
  },
  {
    title: 'Bharat Touch',
    description:
      'A digital business card and NFC virtual card platform that allows users to create and manage personal and professional profiles. Worked across frontend and backend development, profile sharing, NFC functionality, and new application modules.',
    tech: ['ASP.NET MVC', 'C#', 'MSSQL', 'NFC'],
    gradient: 'from-violet-500/20 to-indigo-600/20',
    demo: 'https://bharattouch.com',
    github: '',
    featured: true,
    images: [],
  },
  {
    title: 'Bonc Network',
    description:
      'An e-commerce platform for products and services. Developed new React.js frontend modules, enhanced the existing application, created an admin panel, and improved responsiveness and overall user experience.',
    tech: ['React.js', 'ASP.NET MVC', 'MSSQL'],
    gradient: 'from-amber-500/20 to-orange-600/20',
    demo: 'https://www.boncnetwork.com/',
    github: '',
    featured: true,
    images: [],
  },
  {
    title: 'MyProBook',
    description:
      'A business marketplace platform with business listings, profile management, and marketplace features. Developed REST APIs using ASP.NET MVC and SQL Server, built frontend modules using Next.js and Zustand, and enhanced existing React.js admin modules.',
    tech: ['Next.js', 'React.js', 'ASP.NET MVC', 'MSSQL', 'Zustand'],
    gradient: 'from-sky-500/20 to-cyan-600/20',
    demo: 'https://myprobook.com/',
    github: '',
    featured: true,
    images: [],
  },
  {
    title: 'Portfolio Backend API',
    description:
      'A modular REST API built with Node.js, Express.js, MongoDB, Mongoose, and JWT authentication. Includes authentication, profile management, file uploads, validation, reusable utilities, middleware, and a scalable backend architecture.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    gradient: 'from-rose-500/20 to-pink-600/20',
    demo: '#',
    github: 'https://github.com/Firoz2899/my-portfolio-backend',
    featured: false,
    images: [],
  },
  {
    title: 'Portfolio Frontend',
    description:
      'A responsive portfolio application built with React.js and TypeScript. Demonstrates reusable component architecture, Redux Toolkit state management, Tailwind CSS, responsive design, and API integration.',
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    gradient: 'from-violet-500/20 to-indigo-600/20',
    demo: '#',
    github: 'https://github.com/Firoz2899/portfolio-frontend',
    featured: false,
    images: [],
  },
];

export const services = [
  {
    icon: 'Code2',
    title: 'Web Application Development',
    description:
      'Building responsive and scalable web applications using React.js, Next.js, ASP.NET MVC, and Node.js.',
  },
  {
    icon: 'Server',
    title: 'REST API Development',
    description:
      'Designing and developing RESTful APIs using ASP.NET MVC, Node.js, and Express.js with clean and reusable architecture.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Admin Dashboard Development',
    description:
      'Developing responsive admin panels with content management, user management, role-based permissions, and business workflows.',
  },
  {
    icon: 'Database',
    title: 'Database Development',
    description:
      'Working with MSSQL and MongoDB to build database-driven applications, integrate APIs, and optimize database queries.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Authentication & Authorization',
    description:
      'Implementing JWT authentication, role-based permissions, and secure user access across web applications and APIs.',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive UI Development',
    description:
      'Creating responsive and user-friendly interfaces using React.js, Tailwind CSS, Bootstrap, and modern frontend practices.',
  },
];

export const techStack = [
  { name: 'React.js', icon: 'Atom' },
  { name: 'Next.js', icon: 'Triangle' },
  { name: 'JavaScript', icon: 'Braces' },
  { name: 'TypeScript', icon: 'Braces' },
  { name: 'Node.js', icon: 'Hexagon' },
  { name: 'Express.js', icon: 'Server' },
  { name: 'ASP.NET MVC', icon: 'Code2' },
  { name: 'C#', icon: 'FileCode' },
  { name: 'MongoDB', icon: 'Database' },
  { name: 'Mongoose', icon: 'Database' },
  { name: 'MSSQL', icon: 'Database' },
  { name: 'Knex.js', icon: 'Database' },
  { name: 'Redux Toolkit', icon: 'Boxes' },
  { name: 'Zustand', icon: 'Boxes' },
  { name: 'Tailwind CSS', icon: 'Palette' },
  { name: 'Bootstrap', icon: 'Palette' },
  { name: 'JWT', icon: 'ShieldCheck' },
  { name: 'Git', icon: 'GitBranch' },
  { name: 'Postman', icon: 'Send' },
  { name: 'REST APIs', icon: 'Globe' },
];

export const githubActivity = {
  username: 'Firoz2899',
  show: false, // Set to true to display GitHub activity section

  // These values are intentionally not fabricated because
  // the resume does not provide GitHub statistics.
  totalCommits: 0,
  totalRepos: 0,
  totalStars: 0,
  totalPRs: 0,

  contributionGraph: [],

  recentRepos: [
    {
      name: 'portfolio-frontend',
      stars: 0,
      forks: 0,
      language: 'TypeScript',
    },
    {
      name: 'my-portfolio-backend',
      stars: 0,
      forks: 0,
      language: 'JavaScript',
    },
  ],
};
