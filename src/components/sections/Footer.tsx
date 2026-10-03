import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { navLinks } from '@/data/portfolio';

export default function Footer() {
  const socials = [
    { icon: Github, href: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: profile.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="relative section-pad pt-20 pb-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo + tagline */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-mono text-xl font-bold text-white mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-signal text-ink-950">
                AR
              </span>
              {profile.name}
            </div>
            <p className="text-ink-300 text-sm leading-relaxed">
              {profile.role} crafting performant web applications with modern
              technologies. Always open to interesting conversations and new
              opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-300 hover:text-accent-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-ink-400">
            <span>&copy; {new Date().getFullYear()} {profile.name}. Built with</span>
            <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400/50" />
            <span>using React & Tailwind.</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/[0.02] text-ink-300 transition-all hover:text-accent-300 hover:border-accent-400/30 hover:-translate-y-0.5"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-accent-500/20 to-signal/20 border border-accent-400/20 text-accent-300 transition-all hover:-translate-y-0.5"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
