import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HomeHero from "@/components/home/HomeHero";
import Seo from "@/components/Seo";
import { trackEvent } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    document.body.classList.add("home-snap");
    return () => {
      document.body.classList.remove("home-snap");
    };
  }, []);

  return (
    <Layout>
      <Seo
        title="Digital Systems for Premium Websites"
        description="Novara Studios designs, builds, and maintains calm, high-performing websites and digital systems with clear delivery, continuity, and measurable outcomes."
        path="/"
      />
      <h1 className="sr-only">Novara Studios digital systems studio</h1>
      <HomeHero />

      <section
        id="home-next"
        className="section-padding min-h-[calc(100svh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center snap-start"
      >
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="rounded-lg p-8 md:p-10 border border-border/60 bg-transparent transition-all duration-200 hover:bg-card/30 hover:border-accent/60 hover:shadow-xl noise-overlay">
              <h2 className="headline-secondary mb-4">Websites built to last.</h2>
              <p className="body-refined mb-6">
                Strategy, design, and build with ongoing care built in.
              </p>
              <Link
                to="/websites"
                onClick={() => trackEvent("cta_click", { label: "Explore website builds", location: "home_cards" })}
                className="btn-secondary rounded-full px-6 py-2"
              >
                Explore website builds
              </Link>
            </div>
            <div className="rounded-lg p-8 md:p-10 border border-border/60 bg-transparent transition-all duration-200 hover:bg-card/30 hover:border-accent/60 hover:shadow-xl noise-overlay">
              <h2 className="headline-secondary mb-4">Systems that scale quietly.</h2>
              <p className="body-refined mb-6">
                Stable infrastructure and steady improvements.
              </p>
              <Link
                to="/contact"
                onClick={() => trackEvent("cta_click", { label: "Talk to Novara", location: "home_cards" })}
                className="btn-secondary rounded-full px-6 py-2"
              >
                Talk to Novara
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
