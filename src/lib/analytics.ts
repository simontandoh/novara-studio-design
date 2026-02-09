const ANALYTICS_ENDPOINT = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
const ANALYTICS_SITE_ID = import.meta.env.VITE_ANALYTICS_SITE_ID as string | undefined;

type AnalyticsPayload = {
  type: "pageview" | "event";
  name?: string;
  path?: string;
  title?: string;
  properties?: Record<string, string | number | boolean>;
  ts: number;
};

const sendPayload = (payload: AnalyticsPayload) => {
  if (!ANALYTICS_ENDPOINT || !ANALYTICS_SITE_ID) {
    if (import.meta.env.DEV) {
      console.info("[analytics]", payload);
    }
    return;
  }

  const body = JSON.stringify({
    siteId: ANALYTICS_SITE_ID,
    ...payload,
  });

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
    return;
  }

  fetch(ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => undefined);
};

export const trackPageView = (path: string, title?: string) => {
  sendPayload({
    type: "pageview",
    path,
    title,
    ts: Date.now(),
  });
};

export const trackEvent = (name: string, properties?: AnalyticsPayload["properties"]) => {
  sendPayload({
    type: "event",
    name,
    properties,
    ts: Date.now(),
  });
};
