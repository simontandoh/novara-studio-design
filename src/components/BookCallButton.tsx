import { trackEvent } from "@/lib/analytics";
import { openCalendlyPopup } from "@/lib/calendly";

interface BookCallButtonProps {
  className?: string;
  location?: string;
  label?: string;
}

const BookCallButton = ({
  className = "",
  location = "book_call_button",
  label = "Book a Call",
}: BookCallButtonProps) => {
  const handleClick = () => {
    trackEvent("cta_click", { label, location });
    void openCalendlyPopup();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
};

export default BookCallButton;

