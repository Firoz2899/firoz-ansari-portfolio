import { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import type { Theme } from '@/hooks/useTheme';

type ThemeToggleProps = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const activeOption = options.find((o) => o.value === theme) ?? options[1];
  const ActiveIcon = activeOption.icon;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-100 transition-all hover:border-accent-400/30 hover:text-accent-300"
      >
        <ActiveIcon className="h-5 w-5" />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-12 z-50 w-40 origin-top-right transition-all duration-200 ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="glass rounded-xl p-1.5 shadow-2xl">
          <div className="px-3 py-2 mb-1">
            <span className="text-xs font-mono text-ink-400 uppercase tracking-wider">Theme</span>
          </div>
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-accent-400/10 text-accent-300'
                    : 'text-ink-200 hover:bg-white/5 hover:text-ink-100'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" />
                  {option.label}
                </span>
                {isActive && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
