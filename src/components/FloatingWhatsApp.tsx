const whatsappNumber = "447456849035";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp-fab focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-xs font-light">WA</span>
    </a>
  );
};

export default FloatingWhatsApp;
