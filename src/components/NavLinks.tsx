import { experience, githubActivity, projects, services, skills, techStack } from "@/data/portfolio";
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import GitHubActivity from '@/components/sections/GitHubActivity';
import Contact from '@/components/sections/Contact';

export const navLinks = [
  { label: 'Home', href: '#home', show: true, component: Hero },
  { label: 'About', href: '#about', show: true, component: About },
  { label: 'Skills', href: '#skills', show: skills.length > 0, component: Skills },
  { label: 'Experience', href: '#experience', show: experience.length > 0, component: Experience },
  { label: 'Projects', href: '#projects', show: projects.length > 0, component: Projects },
  { label: 'Services', href: '#services', show: services.length > 0, component: Services },
  { label: 'Tech Stack', href: '#tech-stack', show: techStack.length > 0, component: TechStack },
  { label: 'GitHub', href: '#github', show: githubActivity.show, component: GitHubActivity },
  { label: 'Contact', href: '#contact', show: true, component: Contact },
] as const;