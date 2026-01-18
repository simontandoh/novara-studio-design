import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const lastMoveRef = useRef<number>(0);
  const enabledRef = useRef(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    enabledRef.current = !reduceMotion.matches && !hasTouch;

    if (!enabledRef.current) {
      return () => undefined;
    }

    pointerRef.current = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
    };
    currentRef.current = { ...pointerRef.current };

    const handleMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      lastMoveRef.current = performance.now();
    };

    const tick = () => {
      const node = followerRef.current;
      if (!node) return;

      const now = performance.now();
      const idle = now - lastMoveRef.current > 900;
      const drift = idle ? Math.sin(now / 2200) * 8 : 0;

      const targetX = pointerRef.current.x + drift;
      const targetY = pointerRef.current.y + drift * 0.6;

      currentRef.current.x += (targetX - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetY - currentRef.current.y) * 0.08;

      node.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, rgba(168, 178, 196, 0.35), rgba(29, 35, 47, 0.05) 60%, transparent 70%)",
      }}
    />
  );
};

export default CursorFollower;
