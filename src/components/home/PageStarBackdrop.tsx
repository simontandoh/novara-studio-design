import { lazy, Suspense, useEffect, useState } from 'react';

const CanvasScene = lazy(() => import('./CanvasScene'));

/** Matches `NovaNav` tablet breakpoint: static image below, animated WebGL from `lg` up. */
function useDesktopStarfield() {
  const [wide, setWide] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return wide;
}

/** Stars behind home + portfolio: still SVG on mobile/tablet, animated canvas on desktop. */
export default function PageStarBackdrop() {
  const desktop = useDesktopStarfield();

  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none h-full w-full transform-gpu backface-hidden overflow-hidden"
      aria-hidden
    >
      {desktop ? (
        <Suspense fallback={null}>
          <CanvasScene />
        </Suspense>
      ) : (
        <img
          src="/images/starfield-still.svg"
          alt=""
          width={2400}
          height={1350}
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
          decoding="async"
          fetchPriority="low"
        />
      )}
    </div>
  );
}
