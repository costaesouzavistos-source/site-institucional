declare global {
  interface Window {
    gtag?: (...args: (string | number | boolean | object | undefined)[]) => void;
    fbq?: (
      command: string,
      event: string,
      params?: Record<string, string | number | boolean | undefined>,
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", eventName, params);
  }

  if (window.fbq && eventName === "Lead") {
    window.fbq("track", "Lead", params);
  }
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
}
