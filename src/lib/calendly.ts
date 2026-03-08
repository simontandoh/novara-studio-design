export const CALENDLY_POPUP_URL =
  "https://calendly.com/novarastudios26/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1d23&text_color=e7ebef&primary_color=7699bc";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";

let calendlyLoadPromise: Promise<void> | null = null;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const inBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";

const addCalendlyStyles = () => {
  const existing = document.querySelector(`link[href="${CALENDLY_STYLE_HREF}"]`);
  if (existing) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_STYLE_HREF;
  document.head.appendChild(link);
};

export const ensureCalendlyAssets = (): Promise<void> => {
  if (!inBrowser()) return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (calendlyLoadPromise) return calendlyLoadPromise;

  calendlyLoadPromise = new Promise((resolve, reject) => {
    addCalendlyStyles();

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );

    const handleLoad = () => {
      if (window.Calendly) {
        resolve();
      } else {
        reject(new Error("Calendly script loaded but API is unavailable."));
      }
    };

    const handleError = () => reject(new Error("Failed to load Calendly script."));

    if (existingScript) {
      if (window.Calendly) {
        resolve();
        return;
      }
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = handleLoad;
    script.onerror = handleError;
    document.body.appendChild(script);
  });

  return calendlyLoadPromise;
};

export const openCalendlyPopup = async () => {
  if (!inBrowser()) return;

  try {
    await ensureCalendlyAssets();
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_POPUP_URL });
      return;
    }
    throw new Error("Calendly popup API is unavailable.");
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Calendly popup failed. Falling back to new tab.", error);
    }
    window.open(CALENDLY_POPUP_URL, "_blank", "noopener,noreferrer");
  }
};

