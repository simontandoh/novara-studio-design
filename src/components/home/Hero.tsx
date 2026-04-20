import { lazy, Suspense } from 'react';
import HeroOverlay from './HeroOverlay';

const CanvasScene = lazy(() => import('./CanvasScene'));

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] md:min-h-[90vh] w-full overflow-hidden -mt-16 md:-mt-20"
      aria-label="Novara Studios hero"
      style={{ background: '#060608' }}
    >
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <CanvasScene />
        </Suspense>
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }}
      />
      <HeroOverlay />
    </section>
  );
}
