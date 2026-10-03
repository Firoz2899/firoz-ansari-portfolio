import { Code2, Server, Database, LayoutDashboard, Cloud, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { services } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Database,
  LayoutDashboard,
  Cloud,
  Search,
};

export default function Services() {
  return (
    <section id="services" className="relative section-pad py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          description="From concept to deployment — full-cycle development services"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <ScrollReveal key={service.title} delay={index * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass-card p-6 md:p-7 transition-all duration-500 hover:border-accent-400/20 hover:bg-ink-800/50 hover:-translate-y-1">
                  {/* Hover glow */}
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-signal/15 border border-white/5 mb-5 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6 text-accent-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-ink-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent-400 to-signal transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
