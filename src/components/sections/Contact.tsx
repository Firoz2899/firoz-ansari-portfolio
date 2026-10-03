import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { socials } from '@/components/SocialLinks';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: '#' },
  ];

  return (
    <section id="contact" className="relative section-pad py-24 md:py-32 bg-ink-900/40">
      <div className="glow-orb h-[350px] w-[350px] bg-accent-500/8 top-1/3 left-[-150px]" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <ScrollReveal>
            <div className="glass-card p-7 md:p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-2">
                Get in touch
              </h3>
              <p className="text-ink-300 text-sm leading-relaxed mb-8">
                Whether you have a question about a project, a job opportunity,
                or just want to connect, feel free to reach out. I typically
                respond within 24 hours.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 rounded-xl bg-white/[0.02] border border-white/5 p-4 transition-all hover:border-accent-400/20 hover:bg-white/[0.04] hover:-translate-y-0.5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-400/10 border border-accent-400/20">
                      <info.icon className="h-5 w-5 text-accent-300" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-400 mb-0.5">{info.label}</div>
                      <div className="text-sm text-ink-100 font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <div className="text-sm text-ink-300 mb-3">Follow me</div>
                <div className="flex items-center gap-3">
                  {socials.filter(x => x.show).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl glass text-ink-300 transition-all hover:text-accent-300 hover:border-accent-400/30 hover:-translate-y-1"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={120}>
            <form onSubmit={handleSubmit} className="glass-card p-7 md:p-8 h-full">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ink-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/8 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-all focus:border-accent-400/40 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/8 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-all focus:border-accent-400/40 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-200 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl bg-white/[0.03] border border-white/8 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-all focus:border-accent-400/40 focus:bg-white/[0.05] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium transition-all ${
                    sent
                      ? 'bg-signal/20 border border-signal/30 text-signal'
                      : 'bg-gradient-to-r from-accent-500 to-accent-400 text-ink-950 hover:shadow-lg hover:shadow-accent-500/25 hover:-translate-y-0.5'
                  }`}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Message sent! I'll get back to you soon.
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
