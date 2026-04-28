insert into templates (name, industry, recommended_pages, recommended_sections, tone, cta_style)
values
  (
    'Local Trades',
    'Trades',
    array['Home', 'Services', 'About', 'Service Areas', 'Contact'],
    array['Hero', 'Services', 'Why Choose Us', 'Process', 'Testimonials', 'CTA', 'Contact', 'Footer'],
    'Dependable, direct, trustworthy',
    'Call now for a same-day quote'
  ),
  (
    'Beauty/Salon',
    'Beauty',
    array['Home', 'Services', 'Gallery', 'About', 'Booking', 'Contact'],
    array['Hero', 'About', 'Services', 'Gallery', 'Testimonials', 'Booking', 'CTA', 'Footer'],
    'Refined, warm, confidence-building',
    'Book your appointment'
  ),
  (
    'Personal Brand',
    'Creator',
    array['Home', 'About', 'Services', 'Testimonials', 'Contact'],
    array['Hero', 'About', 'Why Choose Us', 'Process', 'Testimonials', 'CTA', 'Contact', 'Footer'],
    'Authoritative, personal, premium',
    'Work with me'
  ),
  (
    'Restaurant',
    'Hospitality',
    array['Home', 'Menu', 'About', 'Reservations', 'Gallery', 'Contact'],
    array['Hero', 'About', 'Gallery', 'FAQ', 'Booking', 'CTA', 'Contact', 'Footer'],
    'Inviting, premium, sensory',
    'Reserve your table'
  ),
  (
    'Consultant/Service',
    'Consulting',
    array['Home', 'Services', 'Process', 'Case Studies', 'About', 'Contact'],
    array['Hero', 'Services', 'Process', 'Why Choose Us', 'Testimonials', 'CTA', 'Contact', 'Footer'],
    'Strategic, confident, results-led',
    'Book a strategy call'
  )
on conflict do nothing;

insert into components (name, category, purpose, recommended_usage, example_copy)
values
  (
    'Hero',
    'Core',
    'Establishes first impression and value proposition above the fold.',
    'Use on every homepage and key landing page.',
    'Premium websites for ambitious local brands.'
  ),
  (
    'Services',
    'Core',
    'Explains service offerings with clear outcomes.',
    'Use when multiple offers need clear hierarchy.',
    'From high-converting service pages to full brand systems.'
  ),
  (
    'About',
    'Trust',
    'Builds credibility through story and positioning.',
    'Use when founder-led or expertise-led trust is important.',
    'Built by operators who understand premium client journeys.'
  ),
  (
    'Why Choose Us',
    'Trust',
    'Differentiates the business against alternatives.',
    'Use when market is saturated and proof is required.',
    'Clear process, sharp design, measurable growth outcomes.'
  ),
  (
    'Process',
    'Structure',
    'Outlines workflow so prospects know what to expect.',
    'Use for service businesses and consultative sales.',
    'Discover, define, build, launch.'
  ),
  (
    'Testimonials',
    'Trust',
    'Provides social proof through client outcomes.',
    'Use once at least three strong quotes are available.',
    'Novara transformed our online presence in three weeks.'
  ),
  (
    'Gallery',
    'Visual',
    'Showcases visual proof of quality and craft.',
    'Use for businesses where visual output drives trust.',
    'A curated look at recent work and brand execution.'
  ),
  (
    'FAQ',
    'Support',
    'Reduces objections and pre-qualifies leads.',
    'Use near the bottom of sales-focused pages.',
    'Most projects launch within 3 to 5 weeks.'
  ),
  (
    'CTA',
    'Conversion',
    'Directs users to the primary conversion action.',
    'Use after key value sections and at page close.',
    'Start your project.'
  ),
  (
    'Contact',
    'Conversion',
    'Captures qualified enquiries.',
    'Use on dedicated contact page and footer entry points.',
    'Tell us your goals and timeline.'
  ),
  (
    'Booking',
    'Conversion',
    'Enables direct appointment or consultation booking.',
    'Use for salons, restaurants, coaches, and consultants.',
    'Choose a time that works for you.'
  ),
  (
    'Pricing',
    'Commercial',
    'Clarifies package options to improve lead quality.',
    'Use when transparent pricing supports conversion.',
    'Choose the package aligned to your growth stage.'
  ),
  (
    'Footer',
    'Layout',
    'Closes the page with navigation, trust links, and contact.',
    'Use globally across all pages.',
    'Built by Novara Studios.'
  )
on conflict do nothing;
