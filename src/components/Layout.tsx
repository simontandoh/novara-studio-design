import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NovaNav from "./NovaNav";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import SpaceBackground from "./home/SpaceBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const showSpace = location.pathname !== "/contact";

  return (
    <div className={`min-h-screen flex flex-col ${showSpace ? "bg-transparent" : "bg-background"}`}>
      {showSpace && <SpaceBackground />}
      <NovaNav />
      <main className="flex-1 pt-16 md:pt-20 relative z-10 snap-container">{children}</main>
      <FloatingWhatsApp />
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
