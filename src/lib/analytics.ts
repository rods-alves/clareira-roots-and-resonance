// Uses the gtag() already set up in __root.tsx for Consent Mode — no second
// dataLayer/gtag instance here. Events queue in window.dataLayer even before
// GA4 itself is installed (no measurement ID yet); that's expected.
export function trackWhatsAppLead(ctaLocation: string) {
  window.gtag?.("event", "generate_lead", {
    method: "whatsapp",
    cta_location: ctaLocation,
    page_location: window.location.href,
  });
}
