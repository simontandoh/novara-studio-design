const whatsappNumber = "447456849035";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp-fab focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Chat on WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M16 3C9.4 3 4 8.2 4 14.7c0 2.5.8 4.8 2.2 6.7L5 29l7.8-1.9c1.9 1 4.1 1.5 6.2 1.5 6.6 0 12-5.2 12-11.7C31 8.2 22.6 3 16 3zm0 2.3c5.4 0 9.7 4.2 9.7 9.4S21.4 24 16 24c-2 0-3.9-.6-5.5-1.6l-.4-.2-4.6 1.1 1.2-4.4-.3-.4c-1.2-1.7-1.9-3.7-1.9-5.8 0-5.2 4.4-9.4 9.8-9.4zm-3.2 6.5c-.3 0-.7 0-1 .5-.3.5-1 1-1 2.5s1 3 1.2 3.2c.2.2 2.1 3.3 5.2 4.5 2.6 1 3.1.8 3.7.7.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.7-.4l-2.1-1c-.3-.2-.5-.2-.8.2-.3.4-.9 1.1-1.1 1.3-.2.2-.4.2-.8 0-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
