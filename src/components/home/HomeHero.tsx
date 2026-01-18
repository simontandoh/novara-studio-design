import { Link } from "react-router-dom";
const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="w-full h-full object-cover"
        >
          <source src="/video/novara-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 18% 12%, rgba(10, 16, 24, 0.55), transparent 60%), radial-gradient(800px 520px at 82% 18%, rgba(10, 16, 24, 0.45), transparent 65%)",
          }}
        />
      </div>

      <div className="container-editorial relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            <span className="text-4xl md:text-5xl font-light tracking-[0.6em] text-foreground">
              NOVARA
            </span>
          </div>
          <p className="label-small mb-4">Born From Light. Built For The Future.</p>
          <h1 className="headline-hero mb-6">Websites that stay calm under pressure.</h1>
          <p className="body-large max-w-xl mb-8">
            Calm digital systems that last, maintained with clarity and continuity.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mb-10">
            Clear, maintained systems for local services that need reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="btn-primary rounded-full px-7 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact
            </Link>
            <Link
              to="/websites"
              className="btn-secondary rounded-full px-6 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Websites
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
