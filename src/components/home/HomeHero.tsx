
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

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
          <p className="label-small mb-4">Born from light. Built for the future.</p>
          <h1 className="headline-hero mb-5">
            Digital systems studio for websites that stay clear, fast, and reliable.
          </h1>
          <p className="body-large mb-6">
            We design, build, and maintain high-performing sites for teams that need calm
            delivery and measurable outcomes.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5">+</span>
              Faster load times and cleaner UX paths
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5">+</span>
              Systems that scale without constant rebuilds
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5">+</span>
              Ongoing care so nothing drifts out of date
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/contact"
              onClick={() => trackEvent("cta_click", { label: "Start a project", location: "hero" })}
              className="btn-primary rounded-full px-7 py-3"
            >
              Start a project
            </Link>
            <Link
              to="/websites"
              onClick={() => trackEvent("cta_click", { label: "View services", location: "hero" })}
              className="btn-secondary rounded-full px-6 py-2"
            >
              View services
            </Link>
          </div>
          <a
            href="#home-next"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border/60 text-foreground/80 hover:text-foreground hover:border-accent/60 transition-colors"
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
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
