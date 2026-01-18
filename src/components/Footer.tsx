import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
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
              A digital systems studio that builds, rebuilds, and maintains websites
              businesses can rely on.
            </p>
          </div>

          <div>
            <p className="label-small mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/local" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
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
            <p className="label-small mb-4">Get in touch</p>
            <a
              href="mailto:hello@novarastudios.io"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@novarastudios.io
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Ac {new Date().getFullYear()} Novara
          </p>
          <p className="text-xs text-muted-foreground">
            Digital systems that run quietly and reliably.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
