import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ImageSliderModalProps = {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageSliderModal({
  images,
  title,
  isOpen,
  onClose,
}: ImageSliderModalProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, next, prev]);

  useEffect(() => {
    if (isOpen) setCurrent(0);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/90 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl mx-4 animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink-200 transition-all hover:text-white hover:border-accent-400/30"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-2xl glass-card p-2">
          <div className="relative overflow-hidden rounded-xl aspect-video bg-ink-900">
            {/* Image track */}
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-full h-full">
                  <img
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950/60 backdrop-blur-sm border border-white/10 text-white transition-all hover:bg-ink-950/80 hover:border-accent-400/30"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950/60 backdrop-blur-sm border border-white/10 text-white transition-all hover:bg-ink-950/80 hover:border-accent-400/30"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute top-3 right-3 rounded-lg bg-ink-950/60 backdrop-blur-sm border border-white/10 px-3 py-1 font-mono text-xs text-ink-200">
              {current + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? 'w-8 bg-accent-400'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
