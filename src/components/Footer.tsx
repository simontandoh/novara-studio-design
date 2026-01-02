import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-editorial section-padding">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl tracking-wide">Novara</span>
            <p className="mt-4 body-refined max-w-xs">
              A premium web studio designing elegant, high-performance websites and systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              <Link to="/studio" className="text-sm hover:text-accent transition-colors">
                Studio
              </Link>
              <Link to="/services" className="text-sm hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end md:text-right">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Get in touch
            </p>
            <a
              href="mailto:hello@novara.studio"
              className="text-sm hover:text-accent transition-colors"
            >
              hello@novara.studio
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Novara Studio
          </p>
          <p className="text-sm text-muted-foreground">
            Designing clarity, building confidence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
