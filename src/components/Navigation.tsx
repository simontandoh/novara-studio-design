import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container-editorial">
        <div className="flex items-center justify-between py-6 md:py-8">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/studio"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/studio")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Studio
            </Link>
            <Link
              to="/services"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/services")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Services
            </Link>
          </div>

          {/* Center logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-xl md:text-2xl tracking-wide">
              Novara
            </span>
          </Link>

          {/* Right links */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link
              to="/contact"
              className={`text-sm tracking-wide transition-colors ${
                isActive("/contact")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`h-px bg-foreground transition-transform origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              />
              <span
                className={`h-px bg-foreground transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px bg-foreground transition-transform origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-8 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/studio"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-serif"
              >
                Studio
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-serif"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-serif"
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
