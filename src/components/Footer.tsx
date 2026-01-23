import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-10 md:py-12">
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/novara-logo.png"
                alt="Novara logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-light tracking-wide">Novara</span>
            </div>
            <p className="mt-4 body-refined max-w-sm">
              A digital systems studio. Build, rebuild, maintain.
            </p>
          </div>

          <div>
            <p className="label-small mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/websites" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Websites
              </Link>
              <Link to="/portfolio" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="label-small mb-4">Contact</p>
            <a
              href="mailto:hello@novarastudios.co.uk"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@novarastudios.co.uk
            </a>
            <p className="label-small mt-6 mb-4">Legal</p>
            <nav className="flex flex-col gap-3">
              <Link to="/privacy-policy" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-muted-foreground">
            Novara Studios (C) 2026 All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Quiet systems. Steady care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
