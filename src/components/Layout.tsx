import { ReactNode, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import NovaNav from "./NovaNav";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

const SpaceBackground = lazy(() => import("./home/SpaceBackground"));
const PageStarBackdrop = lazy(() => import("./home/PageStarBackdrop"));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isContact = location.pathname === "/contact";
  const isStarBackdrop =
    location.pathname === "/" || location.pathname === "/portfolio";
  const showSpaceGradient = !isContact && !isStarBackdrop;

  return (
    <div
      className={`min-h-screen flex flex-col ${!isContact ? "bg-transparent" : "bg-background"}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      {showSpaceGradient && (
        <Suspense fallback={null}>
          <SpaceBackground />
        </Suspense>
      )}
      {isStarBackdrop && (
        <Suspense fallback={null}>
          <PageStarBackdrop />
        </Suspense>
      )}
      <NovaNav />
      <main id="main-content" className="flex-1 pt-16 md:pt-20 relative z-10 text-center">
        {children}
      </main>
      <section className="relative z-[20] mt-auto w-full bg-background text-center">
        <Footer />
      </section>
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
