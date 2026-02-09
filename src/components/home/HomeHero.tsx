
import { useEffect, useState } from "react";

const HomeHero = () => {
  const [scrollUnlocked, setScrollUnlocked] = useState(false);

  useEffect(() => {
    if (scrollUnlocked) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [scrollUnlocked]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl pt-6 md:pt-10 mx-auto text-center">
          <div className="mb-6">
            <span className="text-4xl md:text-5xl font-light tracking-[0.6em] text-foreground">
              NOVARA
            </span>
          </div>
          <p className="text-2xl md:text-3xl font-light tracking-[0.4em] text-muted-foreground">
            BORN FROM LIGHT.
          </p>
        </div>
      </div>
      <a
        href="#home-next"
        onClick={() => setScrollUnlocked(true)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full border border-border/60 text-foreground/80 hover:text-foreground hover:border-accent/60 transition-colors"
        aria-label="Scroll to next section"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
};

export default HomeHero;
