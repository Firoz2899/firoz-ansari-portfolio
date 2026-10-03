import ScrollReveal from './ScrollReveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <ScrollReveal className={`flex flex-col ${alignment} mb-14`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-accent-400/50" />
        <span className="font-mono text-sm tracking-wider text-accent-400 uppercase">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-accent-400/50" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-ink-300 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
