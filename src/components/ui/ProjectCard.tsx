import { ExternalLink, Github, Images } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  demo: string;
  github: string;
  featured?: boolean;
  index: number;
  haveScreenshots: boolean;
  onOpenSlider: () => void;
};

export default function ProjectCard({
  title,
  description,
  tech,
  gradient,
  demo,
  github,
  featured,
  haveScreenshots,
  index,
  onOpenSlider,
}: ProjectCardProps) {

  const showGithub = github && github.trim() !== '';
  const showDemo = demo && demo.trim() !== '';

  const showActions = showGithub || showDemo || haveScreenshots;

  return (
    <ScrollReveal
      delay={index * 80}
      className={`group relative ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative h-full overflow-hidden rounded-2xl glass-card p-6 md:p-7 transition-all duration-500 hover:border-accent-400/20 hover:bg-ink-800/50 hover:-translate-y-1">
        {/* Gradient glow */}
        <div
          className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${gradient} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-signal/20 border border-white/5 font-mono text-lg font-bold text-accent-300">
                {title.charAt(0)}
              </div>
              {featured && (
                <span className="rounded-full bg-signal/10 border border-signal/20 px-3 py-1 text-xs font-medium text-signal">
                  Featured
                </span>
              )}
            </div>
            <div className="flex h-2 w-2 rounded-full bg-signal/60 group-hover:bg-signal group-hover:shadow-signal/50" />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
            {title}
          </h3>
          <p className="text-ink-300 text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-white/[0.04] border border-white/5 px-3 py-1 font-mono text-xs text-ink-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          {
            showActions && (
              <div className="flex flex-wrap items-center gap-3">
                {
                  showDemo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-500 to-accent-400 px-4 py-2 text-sm font-medium text-ink-950 transition-all hover:shadow-lg hover:shadow-accent-500/20 hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )
                }
                {
                  showGithub && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink-100 transition-all hover:border-accent-400/30 hover:bg-accent-400/5 hover:-translate-y-0.5"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )
                }
                {
                  haveScreenshots && (
                    <button
                      onClick={onOpenSlider}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink-100 transition-all hover:border-signal/30 hover:bg-signal/5 hover:-translate-y-0.5"
                    >
                      <Images className="h-4 w-4" />
                      Screenshots
                    </button>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </ScrollReveal>
  );
}
