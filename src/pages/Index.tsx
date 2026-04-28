import BookCallButton from "@/components/BookCallButton";
import Hero from "@/components/home/Hero";
import Layout from "@/components/Layout";
import PortfolioVideoCarousel, {
  type PortfolioCarouselSlide,
} from "@/components/PortfolioVideoCarousel";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const HOME_PORTFOLIO_SNIPPETS: PortfolioCarouselSlide[] = [
  { id: "onyx", imageSrc: "/images/portfolio/onyx-preview.png" },
  { id: "celeste-vane", imageSrc: "/images/portfolio/celeste-vane-preview.png" },
  { id: "redfield-fc", imageSrc: "/images/portfolio/redfield-fc-preview.png" },
];

const servicePaths = [
  {
    title: "Websites & Automation",
    description:
      "Professional websites with structured maintenance, SEO foundations, and optional automation upgrades.",
    href: "/websites",
    cta: "Explore Websites & Automation",
  },
  {
    title: "IT Support",
    description:
      "Practical business IT support for devices, accounts, Microsoft 365, backups, and network reliability.",
    href: "/it-support",
    cta: "Explore IT Support",
  },
];

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Novara | Websites, Automation, and IT Support"
        description="Novara helps small businesses launch, maintain, and improve technology through websites, automation, and practical business IT support."
        path="/"
      />

      <Hero />

      <section id="service-paths" className="section-padding py-14 sm:py-16 md:py-24">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 text-center">
            <p className="label-small mb-4">Service Paths</p>
            <h2 className="headline-primary">Choose the right support track.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {servicePaths.map((path) => (
              <article
                key={path.title}
                className="rounded-2xl p-6 sm:p-7 md:p-10 border border-border/60 bg-card/40 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(120% 120% at 15% 0%, rgba(180, 200, 235, 0.14), transparent 56%), radial-gradient(120% 120% at 100% 100%, rgba(86, 108, 150, 0.16), transparent 62%)",
                }}
              >
                <h3 className="headline-secondary mb-4">{path.title}</h3>
                <p className="body-refined mb-7">{path.description}</p>
                <Link to={path.href} className="btn-secondary rounded-full px-6 py-2">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-14 sm:py-16 md:py-24">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
            <p className="label-small mb-4">Portfolio Preview</p>
            <h2 className="headline-primary">Selected work snapshots.</h2>
          </div>
          <PortfolioVideoCarousel maxSlides={3} slides={HOME_PORTFOLIO_SNIPPETS} />
          <div className="text-center mt-7 sm:mt-8 md:mt-10">
            <Link to="/portfolio" className="btn-secondary rounded-full px-7 py-3">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card py-14 sm:py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="headline-primary mb-4">Ready to strengthen your systems?</h2>
          <p className="body-large mb-8">Start with a short call and a clear recommendation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookCallButton
              location="home_final_cta"
              className="btn-primary rounded-full px-7 py-3"
            />
            <Link to="/services" className="btn-secondary rounded-full px-7 py-3">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
