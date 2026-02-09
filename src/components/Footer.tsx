import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border">
      <div className="container-editorial py-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-light tracking-wide">Novara</span>
            <p className="text-xs text-muted-foreground">
              A digital systems studio. Build, rebuild, maintain.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/" className="font-light text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/websites" className="font-light text-muted-foreground hover:text-foreground transition-colors">
              Websites
            </Link>
            <Link to="/portfolio" className="font-light text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link to="/faq" className="font-light text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="font-light text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/legal" className="font-light text-muted-foreground hover:text-foreground transition-colors">
              Legal
            </Link>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-muted-foreground">
            <a
              href="mailto:hello@novarastudios.co.uk"
              className="font-light hover:text-foreground transition-colors"
            >
              hello@novarastudios.co.uk
            </a>
            <span>Quiet systems. Steady care.</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          Novara Studios Ltd. Company No. [Company Number]. Registered in England and Wales.
          Registered office: [Registered Address].
        </div>
      </div>
    </footer>
  );
};

export default Footer;
