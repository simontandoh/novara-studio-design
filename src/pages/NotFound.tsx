import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path={location.pathname}
        noIndex
      />
      <section className="section-padding">
        <div className="container-editorial text-center">
          <p className="label-small mb-4">404</p>
          <h1 className="headline-hero mb-6">Page not found.</h1>
          <p className="body-large mb-8">
            The page you were looking for has moved or no longer exists.
          </p>
          <a href="/" className="btn-secondary rounded-full px-6 py-2">
            Return home
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
