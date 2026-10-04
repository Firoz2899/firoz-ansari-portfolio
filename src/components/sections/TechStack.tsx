import {
  Atom, Triangle, Hexagon, Boxes, Code2, FileCode,
  Database, Braces, Palette, Container, Cloud, Zap,
  Share2, GitBranch, type LucideIcon,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { techStack } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Atom, Triangle, Hexagon, Boxes, Code2, FileCode,
  Database, Braces, Palette, Container, Cloud, Zap,
  Share2, GitBranch,
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative section-pad py-8 md:py-12 bg-ink-900/40">
      <div className="glow-orb h-[300px] w-[300px] bg-signal/6 top-1/3 right-[-120px]" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I work with"
          description="The technologies and tools I use day-to-day"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code2;
            return (
              <ScrollReveal key={tech.name} delay={index * 50}>
                <div className="group flex flex-col items-center gap-3 rounded-2xl glass-card p-5 transition-all duration-300 hover:border-accent-400/20 hover:bg-ink-800/50 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/10 to-signal/10 border border-white/5 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-accent-300 transition-colors group-hover:text-accent-200" />
                  </div>
                  <span className="text-sm font-medium text-ink-200 text-center">
                    {tech.name}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
