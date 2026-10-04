import { Coffee, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { profile } from '@/data/portfolio';
import Section from '@/components/Section'

export default function About() {
  const AboutStats = profile.stats.filter((stat) => stat.label.trim().length > 0);
  return (
    <Section id="about">
      <div className="glow-orb h-[300px] w-[300px] bg-accent-500/5 top-1/3 right-[-100px]" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who ships"
          description="Get to know the person behind the code"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Photo card */}
          <ScrollReveal className="lg:col-span-2">
            <div className="relative group">
              {/* Glow frame */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-500/30 to-signal/30 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative overflow-hidden rounded-2xl glass-card p-2">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} — ${profile.role}`}
                    className="w-full h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

                  {/* Name badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white text-sm">{profile.name}</div>
                        <div className="font-mono text-xs text-accent-300">{profile.role}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-pulse-ring" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
                        </span>
                        {profile.available ? (
                          <span className="text-xs text-ink-200">Available</span>
                        ) : (
                          <span className="text-xs text-ink-200">Not Available</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent dots */}
              <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-accent-400/20 border border-accent-400/30 animate-float" />
              <div className="absolute -bottom-3 -left-3 h-4 w-4 rounded-full bg-signal/20 border border-signal/30 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </ScrollReveal>

          {/* Bio + stats */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <ScrollReveal delay={100}>
              <div className="glass-card p-7 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-400/10 border border-accent-400/20">
                    <Coffee className="h-5 w-5 text-accent-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">My Story</h3>
                </div>
                {
                  profile.bio.map((bio, idx) => {
                    const className = idx === profile.bio.length - 1 ? '' : 'mb-4'
                    const isEven = idx % 2 === 0
                    return (
                      <p key={`bio-${idx}`} className={`${isEven ? "text-ink-200" : "text-ink-300"} leading-relaxed text-[15px] ${className}`}>
                        {bio}
                      </p>
                    )
                  })
                }

                <div className="mt-6 flex flex-wrap gap-3">
                  {
                    profile.storyBadges.map(({label, icon: Icon, iconColor}) => (
                      <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/5 px-4 py-2">
                        <Icon className={`h-4 w-4 ${iconColor}`} />
                        <span className="text-sm text-ink-200">
                          {label}
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {AboutStats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={150 + i * 80}>
                  <div className="glass-card p-5 h-full flex flex-col items-center justify-center text-center transition-all hover:border-accent-400/20 hover:-translate-y-1">
                    <Award className="h-5 w-5 text-gold mb-3" />
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-ink-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
