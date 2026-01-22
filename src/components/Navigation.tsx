import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const leftNav = [
  { label: "Services", path: "/services" },
  { label: "Process", path: "/how-it-works" },
];

const rightNav = [
  { label: "Continuity", path: "/continuity" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  { label: "Builds", path: "/services" },
  { label: "Rebuilds", path: "/services" },
  { label: "Ongoing care", path: "/services" },
  { label: "Continuity", path: "/continuity" },
  { label: "Tiers", path: "/services" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center h-16 md:h-20">
          {/* Left navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div
              ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setServicesOpen(false);
                }
              }}
              className="relative"
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                className={`text-sm font-light tracking-wide transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive("/services")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Services
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-accent transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive("/services") || servicesOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>

              <div
                id="services-menu"
                className={`absolute left-0 mt-4 min-w-[260px] rounded-lg border border-border bg-card/95 backdrop-blur-lg p-5 shadow-xl transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Services
                </div>
                <div className="flex flex-col gap-3">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setServicesOpen(false)}
                      className="text-sm font-light text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {leftNav
              .filter((item) => item.label !== "Services")
              .map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-light tracking-wide transition-colors relative group ${
                    isActive(item.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-accent transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
          </div>

          {/* Logo */}
          <div className="flex justify-start lg:justify-center">
            <Link to="/" className="text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <span className="text-lg font-light tracking-[0.25em]">NOVARA</span>
            </Link>
          </div>

          {/* Right navigation */}
          <div className="hidden lg:flex items-center justify-end gap-8">
            {rightNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-light tracking-wide transition-colors relative group ${
                  isActive(item.path)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-accent transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-secondary rounded-full px-5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex justify-end lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span
                  className={`h-[3px] bg-foreground rounded-full transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[8px]" : ""
                  }`}
                />
                <span
                  className={`h-[3px] bg-foreground rounded-full transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`h-[3px] bg-foreground rounded-full transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 animate-fade-in border-t border-border pt-6">
            <div className="flex flex-col gap-5">
              {leftNav.concat(rightNav).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-light ${
                    isActive(item.path) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary rounded-full px-5 py-2 w-fit"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
