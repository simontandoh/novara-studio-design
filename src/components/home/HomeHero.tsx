import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl pt-6 md:pt-10">
          <div className="mb-8">
            <span className="text-4xl md:text-5xl font-light tracking-[0.6em] text-foreground">
              NOVARA
            </span>
          </div>
          <p className="label-small mb-4">BORN FROM LIGHT.</p>
          <h1 className="headline-hero mb-5">Quiet systems for the web.</h1>
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
