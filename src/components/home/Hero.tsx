import { lazy, Suspense } from 'react';
import HeroOverlay from './HeroOverlay';

const CanvasScene = lazy(() => import('./CanvasScene'));

interface HeroProps {
  /** When false, the page renders a full-viewport star canvas instead (e.g. home). */
  showScene?: boolean;
}

export default function Hero({ showScene = true }: HeroProps) {
  return (
    <section
      className="relative min-h-[100svh] md:min-h-[90vh] w-full overflow-hidden -mt-16 md:-mt-20"
      aria-label="Novara Studios hero"
      style={{ background: showScene ? '#060608' : 'transparent' }}
    >
      {showScene ? (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <CanvasScene />
          </Suspense>
        </div>
      ) : null}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }}
      />
      <HeroOverlay />
    </section>
  );
}
