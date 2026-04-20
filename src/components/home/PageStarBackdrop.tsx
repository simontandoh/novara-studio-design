/**
 * Static starfield image behind home + portfolio (no WebGL).
 * Avoids scroll-linked canvas work and mobile browser jank from a moving backdrop.
 */
export default function PageStarBackdrop() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none h-full w-full transform-gpu backface-hidden overflow-hidden"
      aria-hidden
    >
      <img
        src="/images/starfield-still.svg"
        alt=""
        width={2400}
        height={1350}
        className="absolute inset-0 h-full w-full object-cover object-center select-none"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}
