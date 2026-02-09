import { ReactNode, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import NovaNav from "./NovaNav";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

const SpaceBackground = lazy(() => import("./home/SpaceBackground"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const showSpace = location.pathname !== "/contact";

  return (
    <div className={`min-h-screen flex flex-col ${showSpace ? "bg-transparent" : "bg-background"}`}>
      {showSpace && (
        <Suspense fallback={null}>
          <SpaceBackground />
        </Suspense>
      )}
      <NovaNav />
      <main className="flex-1 pt-16 md:pt-20 relative z-10 text-center">
        {children}
      </main>
      <section className="section-padding footer-section mt-auto w-full text-center">
        <Footer />
      </section>
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
