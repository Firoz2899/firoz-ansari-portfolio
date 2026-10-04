import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { socials } from '../SocialLinks';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />
      <div className="glow-orb h-[500px] w-[500px] bg-accent-500/10 top-[-100px] left-[-100px]" />
      <div className="glow-orb h-[400px] w-[400px] bg-signal/10 bottom-[-80px] right-[-80px]" />

      {/* Floating code snippets */}
      <div className="absolute top-1/4 left-[8%] hidden xl:block animate-float">
        <div className="glass rounded-xl px-4 py-3 font-mono text-xs text-ink-300">
          <span className="text-accent-400">const</span> dev = <span className="text-signal">{'<FullStack />'}</span>
        </div>
      </div>
      <div className="absolute bottom-1/4 right-[8%] hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass rounded-xl px-4 py-3 font-mono text-xs text-ink-300">
          <span className="text-gold">npm</span> run build <span className="text-signal">✓</span>
        </div>
      </div>

      <div className="relative z-10 section-pad max-w-5xl mx-auto text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-pulse-ring" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          <span className="text-sm text-ink-200">Available for new projects</span>
          <Sparkles className="h-3.5 w-3.5 text-gold" />
        </div>

        {/* Greeting */}
        <p className="font-mono text-accent-400 text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-3 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {profile.name}
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          {profile.role}
        </h2>

        {/* Tagline */}
        <p className="mb-7 min-h-[28px] text-base font-semibold text-gold md:text-lg animate-fade-up" style={{ animationDelay: '0.25s' }}>
          <Typewriter
            words={profile.tagline}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href={profile.cv_url}
            download="Firoz-Ansari-CV.pdf"
            className="btn-ghost"
          >
            Download CV
            <Download className="h-4 w-4" />
          </a>
            
          <a href="#contact" className="btn-ghost">
            Get In Touch
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {socials.filter(x => x.show).map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-ink-300 transition-all hover:text-accent-300 hover:border-accent-400/30 hover:-translate-y-1"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs text-ink-400 font-mono">scroll</span>
        <div className="h-10 w-6 rounded-full border-2 border-white/10 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-accent-400 animate-float" />
        </div>
      </div>
    </section>
  );
}
