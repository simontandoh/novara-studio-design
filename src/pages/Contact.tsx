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
    // Form submission logic would go here
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
              <div className="accent-line mb-8" />
              <h1 className="headline-editorial mb-8">
                Start a conversation.
              </h1>
              <p className="body-large mb-12">
                Tell us about your project. We'll respond within two business days 
                to schedule a call if there's a good fit.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@novara.studio"
                    className="font-serif text-xl hover:text-accent transition-colors"
                  >
                    hello@novara.studio
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Response time
                  </p>
                  <p className="font-serif text-xl">Within 48 hours</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:pt-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-wider text-muted-foreground mb-3"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-wider text-muted-foreground mb-3"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm uppercase tracking-wider text-muted-foreground mb-3"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-wider text-muted-foreground mb-3"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border pb-3 focus:border-foreground focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 font-serif text-xl group pt-4"
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

      {/* Expectations */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="headline-secondary mb-8">What happens next</h2>
            <div className="space-y-6 text-left">
              <div className="flex gap-6">
                <span className="text-accent font-serif text-xl shrink-0">01</span>
                <p className="body-refined">
                  We'll review your inquiry and respond within two business days.
                </p>
              </div>
              <div className="flex gap-6">
                <span className="text-accent font-serif text-xl shrink-0">02</span>
                <p className="body-refined">
                  If there's potential alignment, we'll schedule a 30-minute call 
                  to discuss your project in more detail.
                </p>
              </div>
              <div className="flex gap-6">
                <span className="text-accent font-serif text-xl shrink-0">03</span>
                <p className="body-refined">
                  Following our call, we'll provide a proposal outlining scope, 
                  timeline, and investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
