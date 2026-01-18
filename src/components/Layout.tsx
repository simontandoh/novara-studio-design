import { ReactNode } from "react";
import NovaNav from "./NovaNav";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NovaNav />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Layout;
