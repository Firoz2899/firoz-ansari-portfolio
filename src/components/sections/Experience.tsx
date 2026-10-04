import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad py-8 md:py-12">
      <div className="glow-orb h-[300px] w-[300px] bg-accent-500/5 bottom-1/4 right-[-120px]" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="My career journey"
          description="Roles I've held and impact I've delivered"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400/30 via-white/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <ScrollReveal key={exp.role} delay={index * 100}>
                  <div className={`relative flex flex-col md:flex-row gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-850 border-2 border-accent-400/40">
                        <Briefcase className="h-3.5 w-3.5 text-accent-300" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />

                    {/* Content card */}
                    <div className="flex-1 pl-14 md:pl-0">
                      <div className={`md:pl-8 ${isLeft ? 'md:pl-8 md:text-right' : 'md:pr-8 md:pl-0'}`}>
                        <div className="glass-card p-5 md:p-6 transition-all hover:border-accent-400/20 hover:-translate-y-1">
                          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                            <Calendar className="h-4 w-4 text-accent-400" />
                            <span className="font-mono text-xs text-accent-400">{exp.period}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
                          <p className="text-signal text-sm font-medium mb-3">{exp.company}</p>
                          <p className="text-ink-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-lg bg-white/[0.04] border border-white/5 px-2.5 py-1 font-mono text-xs text-ink-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
