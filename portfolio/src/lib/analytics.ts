/**
 * Minimal analytics helper. No-ops unless VITE_GA_MEASUREMENT_ID or
 * VITE_PLAUSIBLE_DOMAIN is set, so the site never phones home during local dev.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

let initialized = false;

export function initAnalytics() {
  if (initialized) return;
  initialized = true;

  if (GA_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    (window as unknown as { dataLayer: unknown[] }).dataLayer = (window as unknown as { dataLayer: unknown[] }).dataLayer || [];
    const gtag = (...args: unknown[]) => {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
    };
    (window as unknown as { gtag: typeof gtag }).gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  if (PLAUSIBLE_DOMAIN) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = PLAUSIBLE_DOMAIN;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (GA_ID && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
  }
  if (PLAUSIBLE_DOMAIN && (window as unknown as { plausible?: (...args: unknown[]) => void }).plausible) {
    (window as unknown as { plausible: (...args: unknown[]) => void }).plausible(eventName, { props: params });
  }
}
