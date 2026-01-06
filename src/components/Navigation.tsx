import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-foreground">
            <span className="text-lg font-light tracking-wide">Novara</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/services"
              className={`text-sm font-light tracking-wide transition-colors ${
                isActive("/services")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              to="/studio"
              className={`text-sm font-light tracking-wide transition-colors ${
                isActive("/studio")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              How it works
            </Link>
            <Link
              to="/contact"
              className="text-sm font-light tracking-wide text-foreground border border-border px-5 py-2 hover:bg-secondary transition-colors"
            >
              Start a conversation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span
                className={`h-px bg-foreground transition-transform origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`h-px bg-foreground transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px bg-foreground transition-transform origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 animate-fade-in border-t border-border pt-6">
            <div className="flex flex-col gap-5">
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="text-base font-light"
              >
                Services
              </Link>
              <Link
                to="/studio"
                onClick={() => setMobileOpen(false)}
                className="text-base font-light"
              >
                How it works
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-base font-light"
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