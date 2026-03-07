import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border">
      <div className="container-editorial py-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-light tracking-wide">NOVARA</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link to="/" className="font-light text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="font-light text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/services" className="font-light text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link to="/portfolio" className="font-light text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/websites" className="font-light text-muted-foreground hover:text-foreground transition-colors">Websites & Automation</Link>
            <Link to="/it-support" className="font-light text-muted-foreground hover:text-foreground transition-colors">IT Support</Link>
            <Link to="/faq" className="font-light text-muted-foreground hover:text-foreground transition-colors">FAQs</Link>
            <Link to="/legal" className="font-light text-muted-foreground hover:text-foreground transition-colors">Legal</Link>
            <Link to="/contact" className="font-light text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-2 text-xs text-muted-foreground">
            <span>Built for business continuity.</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          Copyright 2026 Novara Studios Ltd. All rights reserved. Registered in England and Wales. Company No. 17025468.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
