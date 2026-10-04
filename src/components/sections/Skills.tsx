import { Code2, Server, Database } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { skills } from '@/data/portfolio';
import Section from '@/components/Section'

const categoryIcons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-ink-100">{name}</span>
        <span className="font-mono text-xs text-ink-400">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-signal transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <div className="glow-orb h-[350px] w-[350px] bg-signal/8 top-1/2 left-[-150px]" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise"
          description="Proficiency across the full development stack"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => {
            const Icon = categoryIcons[category.category] || Code2;
            return (
              <ScrollReveal key={category.category} delay={catIndex * 120}>
                <div className="glass-card p-6 md:p-7 h-full transition-all hover:border-accent-400/20 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-signal/15 border border-white/5">
                      <Icon className="h-6 w-6 text-accent-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={i * 100}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
