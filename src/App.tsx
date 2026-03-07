import { Suspense, useEffect, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { trackEvent, trackPageView } from "@/lib/analytics";
import { buildTitle } from "@/lib/seo";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Local = lazy(() => import("./pages/Local"));
const ContinuitySupport = lazy(() => import("./pages/ContinuitySupport"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Submitted = lazy(() => import("./pages/Submitted"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const CookieNotice = lazy(() => import("./pages/CookieNotice"));
const AccessibilityStatement = lazy(() => import("./pages/AccessibilityStatement"));
const Legal = lazy(() => import("./pages/Legal"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
};

const AnalyticsListener = () => {
  const location = useLocation();

  useEffect(() => {
    const title = buildTitle(document.title);
    trackPageView(location.pathname + location.search, title);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const seen = new Set<number>();
    const thresholds = [25, 50, 75, 90];
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const pct = Math.round((scrollTop / height) * 100);
      thresholds.forEach((threshold) => {
        if (pct >= threshold && !seen.has(threshold)) {
          seen.add(threshold);
          trackEvent("scroll_depth", { percent: threshold });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnalyticsListener />
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/websites" element={<Local />} />
              <Route path="/it-support" element={<ContinuitySupport />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/submitted" element={<Submitted />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-notice" element={<CookieNotice />} />
              <Route path="/accessibility" element={<AccessibilityStatement />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/continuity" element={<Navigate to="/it-support" replace />} />
              <Route path="/local" element={<Navigate to="/websites" replace />} />
              <Route path="/work" element={<Navigate to="/portfolio" replace />} />
              <Route path="/how-it-works" element={<Navigate to="/services" replace />} />
              <Route path="/faq" element={<Navigate to="/services" replace />} />
              <Route path="/studio" element={<Navigate to="/services" replace />} />
              <Route path="/continuity-support" element={<Navigate to="/it-support" replace />} />
              <Route path="/studio-partnerships" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
