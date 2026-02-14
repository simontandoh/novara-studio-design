import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "Home", path: "/", primary: true },
  { label: "Websites", path: "/websites" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Process", path: "/how-it-works" },
  { label: "Continuity", path: "/continuity" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Legal", path: "/legal" },
  { label: "Contact", path: "/contact" },
];

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Process", path: "/how-it-works" },
  { label: "Continuity", path: "/continuity" },
  { label: "FAQ", path: "/faq" },
];

const focusSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const MenuIcon = ({ open }: { open: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-[180ms] ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
};

const NovaNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  const activePath = useMemo(() => location.pathname, [location.pathname]);
  useEffect(() => {
    setOpen(false);
  }, [activePath]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = Array.from(panel.querySelectorAll<HTMLElement>(focusSelector));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleTrap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener("keydown", handleTrap);
    return () => panel.removeEventListener("keydown", handleTrap);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleNavClick = (label: string, path: string) => {
    trackEvent("nav_click", { label, path });
    closeMenu();
  };

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[200ms] ${
        scrolled ? "bg-black/90 border-b border-border/60" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          <div />
          <div className="flex justify-center">
            <Link
              to="/"
              className="flex items-center gap-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <img
                src="/favicon.png"
                alt="Novara logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              {!isHome && <span className="text-lg font-light tracking-[0.4em]">NOVARA</span>}
            </Link>
          </div>
          <div className="flex justify-end items-center justify-self-end w-full">
            <button
              ref={toggleRef}
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="nova-nav-panel"
              onClick={handleToggle}
              className="text-white rounded-full p-2.5 min-h-[44px] min-w-[44px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-black/70"
            >
              <span className="sr-only">Toggle navigation</span>
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[110] bg-background/80 transition-opacity duration-[200ms] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
        onClick={closeMenu}
      >
        <div
          id="nova-nav-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute right-0 top-0 h-full w-full max-w-md p-8 md:p-10 bg-card border-l border-border shadow-2xl nav-glow z-[120] transition-transform duration-[220ms] overflow-y-auto ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Menu
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((item, index) => {
              const isActive = activePath === item.path;
              return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.label, item.path)}
                aria-current={isActive ? "page" : undefined}
                className={`group relative text-2xl font-light tracking-tight transition-all duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  item.primary
                    ? "text-accent"
                    : isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-lg border border-border/60 bg-background/60">
            <p className="text-sm text-muted-foreground mb-4">
              Share the brief. We respond.
            </p>
            <Link
              to="/contact"
              onClick={() => handleNavClick("Contact", "/contact")}
              className="btn-primary rounded-full px-6 py-2"
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto pt-10 border-t border-border flex items-center gap-6 text-sm">
            {footerLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.label, item.path)}
                className="group relative text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NovaNav;
