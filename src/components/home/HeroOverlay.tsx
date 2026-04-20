import BookCallButton from '@/components/BookCallButton';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-[1400ms] ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="pointer-events-auto text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.28em] sm:tracking-[0.34em] md:tracking-[0.42em] mb-2 sm:mb-3 text-white/95">
        NOVARA
      </h1>
      <p className="pointer-events-auto text-lg sm:text-2xl md:text-3xl font-light tracking-[0.12em] sm:tracking-[0.14em] md:tracking-[0.16em] text-white/60 mb-5 sm:mb-6">
        BORN FROM LIGHT.
      </p>
      <p className="pointer-events-auto text-base sm:text-lg font-light text-white/50 max-w-2xl mx-auto mb-7 sm:mb-8">
        Websites, automation, and IT support. Bringing clarity and control to business technology.
      </p>
      <div className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <BookCallButton location="home_hero" className="btn-primary rounded-full px-7 py-3" />
        <Link to="/services" className="btn-secondary rounded-full px-7 py-3">
          Explore Services
        </Link>
      </div>
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-light uppercase tracking-[0.3em] text-white/30">
        Scroll
      </div>
    </div>
  );
}
