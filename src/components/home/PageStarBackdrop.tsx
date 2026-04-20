import { lazy, Suspense } from 'react';

const CanvasScene = lazy(() => import('./CanvasScene'));

/** Full-viewport WebGL stars behind page content (home + portfolio). */
export default function PageStarBackdrop() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none w-full transform-gpu backface-hidden"
      aria-hidden
    >
      <Suspense fallback={null}>
        <CanvasScene />
      </Suspense>
    </div>
  );
}
