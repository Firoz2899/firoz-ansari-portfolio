import {
  ArrowRight,
  Code2,
  Download,
  Sparkles,
} from 'lucide-react';

import { profile } from '@/data/portfolio';
import { socials } from '../SocialLinks';
import React from 'react';

export default function Hero() {
  const heroStats = profile.stats.filter((stat) => stat.heroLabel.trim().length > 0);
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />

      <div className="glow-orb absolute -left-40 -top-40 h-[500px] w-[500px] bg-accent-500/10" />

      <div className="glow-orb absolute -bottom-40 -right-40 h-[500px] w-[500px] bg-signal/10" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="text-center lg:text-left">

            {/* Availability */}

            {
              profile.available && (
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
                  </span>

                  <span className="text-sm text-ink-200">
                    Available for new projects
                  </span>

                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                </div>
              )
            }

            {/* Greeting */}

            <p className="mb-4 font-mono text-sm text-accent-400 md:text-base">
              Hi, my name is
            </p>

            {/* Name */}

            <h1 className="mb-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
              {profile.name[0]}{' '}
              {
                profile.name.length > 1 && (
                  <span className="gradient-text">
                    {profile.name[1]}
                  </span>
                )
              }
            </h1>

            {/* Role */}

            <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {profile.role[0]}{' '}
              {
                profile.role.length > 1 && (
                  <span className="gradient-text">
                    {profile.role[1]}
                  </span>
                )
              }
            </h2>

            {/* Description */}

            <p className="mx-auto mb-6 max-w-2xl text-base leading-7 text-ink-300 sm:text-lg lg:mx-0">
              {profile.short_work_desc.split('/n').map((line, index) => (
                <React.Fragment key={index}>
                  {line.trim()}
                  {index < profile.short_work_desc.split('/n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            {/* Typewriter */}

            <p
              className="mb-8 text-base font-semibold text-accent-500 md:text-lg animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              {profile.tagline[0]}
            </p>

            {/* ================= CTA ================= */}

            <div className="mb-9 flex flex-wrap justify-center gap-3 lg:justify-start">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-400 hover:shadow-accent-500/30"
              >
                View My Work

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={profile.cv_url}
                download="Firoz-Ansari-CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-white/[0.08]"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-6 py-3.5 font-semibold text-ink-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
              >
                Get In Touch
              </a>

            </div>

            {/* ================= SOCIALS ================= */}

            <div className="mb-10 flex justify-center gap-3 lg:justify-start">
              {socials
                .filter((x) => x.show)
                .map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:bg-accent-500/10 hover:text-accent-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
            </div>

            {/* ================= STATS ================= */}

            <div className="mx-auto flex max-w-xl items-center justify-center gap-6 lg:mx-0 lg:justify-start">

              {
                heroStats.map((stat, idx) => (
                  <>
                    <Stat key={stat.heroLabel} value={stat.value} label={stat.heroLabel} />
                    {
                      (heroStats.length - 1) !== idx && (
                        <div className="h-10 w-px bg-white/10" />
                      )
                    }
                  </>
                ))
              }
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}

          <div className="relative flex min-h-[560px] items-center justify-center">

            {/* Main glow */}

            <div className="absolute h-[380px] w-[380px] rounded-full bg-accent-500/20 blur-[100px]" />

            <div className="absolute h-[300px] w-[300px] rounded-full bg-signal/10 blur-[80px]" />

            {/* Orbit */}

            <div className="absolute h-[430px] w-[430px] rounded-full border border-accent-400/20" />

            <div className="absolute h-[500px] w-[500px] rounded-full border border-dashed border-accent-400/20" />

            {/* Orbit ring */}

            <div className="absolute h-[430px] w-[430px] animate-[spin_15s_linear_infinite] rounded-full border border-transparent border-t-accent-400/60 border-r-accent-400/20" />

            {/* Image container */}

            <div className="relative z-10">

              {/* Image glow */}

              <div className="absolute inset-5 rounded-[40%] bg-accent-500/20 blur-2xl" />

              {/* Image */}

              <div className="relative h-[500px] w-[350px] overflow-hidden rounded-[45%_45%_20%_20%] border border-white/10 bg-gradient-to-b from-accent-500/10 to-transparent shadow-2xl">

                <img
                  src={profile.heroImage}
                  alt={`${profile.name.join(' ')} - ${profile.role.join(' ')}`}
                  className="h-full w-full object-cover object-top"
                />

                {/* bottom gradient */}

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

              </div>

            </div>

            {/* ================= FLOATING CODE CARD ================= */}

            <div className="absolute right-0 top-16 hidden w-52 rounded-2xl border border-white/10 bg-ink-900/80 p-4 shadow-2xl backdrop-blur-xl xl:block">

              <div className="mb-3 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-accent-400" />

                <span className="font-mono text-xs text-ink-300">
                  developer.js
                </span>
              </div>

              <div className="font-mono text-xs leading-6">
                <p className="text-purple-400">
                  const <span className="text-white">dev</span>
                </p>

                <p className="pl-3 text-ink-400">
                  = {'{'}
                </p>

                <p className="pl-6 text-green-400">
                  passion: <span className="text-yellow-300">
                    "coding"
                  </span>
                </p>

                <p className="pl-6 text-green-400">
                  focus: <span className="text-yellow-300">
                    "quality"
                  </span>
                </p>

                <p className="pl-3 text-ink-400">
                  {'}'}
                </p>
              </div>
            </div>

            {/* ================= BUILD CARD ================= */}

            <div className="absolute bottom-14 left-0 hidden rounded-2xl border border-white/10 bg-ink-900/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10">
                  <span className="text-sm text-accent-400">
                    &gt;_
                  </span>
                </div>

                <div>
                  <p className="font-mono text-xs text-ink-400">
                    npm run build
                  </p>

                  <p className="font-mono text-xs text-signal">
                    ✓ Build successful
                  </p>
                </div>

              </div>

            </div>

            {/* ================= TECH BADGES ================= */}

            <TechBadge
              className="right-[-5px] top-1/2"
              label="React"
            />

            <TechBadge
              className="right-8 bottom-28"
              label=".NET"
            />

            <TechBadge
              className="left-4 top-24"
              label="Node.js"
            />

          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-xs text-ink-400">
          scroll
        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-white/10 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-accent-400" />
        </div>
      </div>
    </section>
  );
}


/* =====================================================
   STAT COMPONENT
===================================================== */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-xl font-bold text-accent-400 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 whitespace-nowrap text-[11px] text-ink-400 sm:text-xs">
        {label}
      </p>
    </div>
  );
}


/* =====================================================
   TECH BADGE
===================================================== */

function TechBadge({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-20 hidden rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2 font-mono text-xs text-ink-200 shadow-xl backdrop-blur-xl sm:block ${className}`}
    >
      {label}
    </div>
  );
}