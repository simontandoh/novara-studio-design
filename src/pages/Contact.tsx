import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Content */}
            <div>
              <p className="label-small mb-6">Contact</p>
              <h1 className="headline-hero mb-8">
                Start a conversation.
              </h1>
              <p className="body-large mb-12">
                Tell us about your situation. We'll respond within two business days 
                to let you know if there's a good fit.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="label-small mb-2">Email</p>
                  <a
                    href="mailto:hello@novara.studio"
                    className="text-lg font-light text-foreground hover:text-accent transition-colors"
                  >
                    hello@novara.studio
                  </a>
                </div>

                <div>
                  <p className="label-small mb-2">Response time</p>
                  <p className="text-lg font-light">Within 48 hours</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:pt-4">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block label-small mb-3"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block label-small mb-3"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block label-small mb-3"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block label-small mb-3"
                  >
                    Tell us about your situation
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-base font-light group pt-4"
                >
                  <span className="link-underline">Send message</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section-padding border-t border-border bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto">
            <h2 className="headline-primary mb-10 text-center">What happens next</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="label-small text-accent shrink-0 pt-1">01</span>
                <p className="body-large">
                  We'll review your message and respond within two business days.
                </p>
              </div>
              <div className="flex gap-6">
                <span className="label-small text-accent shrink-0 pt-1">02</span>
                <p className="body-large">
                  If there's potential alignment, we'll schedule a brief call to discuss 
                  your situation in more detail.
                </p>
              </div>
              <div className="flex gap-6">
                <span className="label-small text-accent shrink-0 pt-1">03</span>
                <p className="body-large">
                  Following our conversation, we'll provide a clear proposal outlining 
                  scope, timeline, and investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow text-center">
          <p className="body-refined max-w-xl mx-auto">
            We're selective about who we work with, but we respond to everyone. 
            If we're not the right fit, we'll say so honestly.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;