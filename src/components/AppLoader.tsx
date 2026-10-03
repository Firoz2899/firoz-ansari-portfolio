import { Code2 } from 'lucide-react';

export default function AppLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-ink-950">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/5">
          <div className="absolute inset-0 rounded-2xl bg-accent-400/10 blur-xl" />

          <Code2 className="relative h-8 w-8 text-accent-400" />
        </div>

        {/* Name */}
        <h2 className="mt-5 text-xl font-bold text-white">
          Firoz Ansari
        </h2>

        {/* Loading text */}
        <p className="mt-2 font-mono text-sm text-ink-400">
          Loading portfolio...
        </p>

        {/* Loader */}
        <div className="mt-5 h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-loader rounded-full bg-accent-400" />
        </div>
      </div>
    </div>
  );
}