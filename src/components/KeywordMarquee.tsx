import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

const KEYWORDS = [
  "Neo-brutalism",
  "Swiss grids",
  "Bento layouts",
  "Editorial serif",
  "Dark luxury",
  "Aurora gradients",
  "Terminal interfaces",
  "Hard shadows",
  "Micro-interactions",
  "Grainy textures",
  "Jewel tones",
  "Floating navigation"
];

export function KeywordMarquee() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <div className="w-full border-y border-border-subtle py-4 bg-bg-secondary overflow-hidden relative flex items-center">
      <div 
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-2 w-max flex-nowrap",
          !prefersReducedMotion && "animate-marquee hover:[animation-play-state:paused]"
        )}
      >
        {/* We duplicate the list twice to create the infinite scroll effect */}
        {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((word, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xl font-medium font-serif text-text-primary whitespace-nowrap">
              {word}
            </span>
            <span className="text-accent/50 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
