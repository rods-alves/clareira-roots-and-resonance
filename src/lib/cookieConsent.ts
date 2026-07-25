import { useSyncExternalStore } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const CONSENT_STORAGE_KEY = "clareira-cookie-consent";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // ~12 months

type StoredConsent = {
  analytics: boolean;
  date: string;
};

function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    const age = Date.now() - new Date(parsed.date).getTime();
    if (Number.isNaN(age) || age > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function storeConsent(analytics: boolean) {
  const value: StoredConsent = { analytics, date: new Date().toISOString() };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
}

/** Pushes a Google Consent Mode v2 update. No-op until gtag('consent','default',...) has run
 * (added directly in the document head) and, later, until GA/Ads itself is installed. */
export function applyConsent(analytics: boolean) {
  window.gtag?.("consent", "update", {
    ad_storage: analytics ? "granted" : "denied",
    ad_user_data: analytics ? "granted" : "denied",
    ad_personalization: analytics ? "granted" : "denied",
    analytics_storage: analytics ? "granted" : "denied",
  });
}

export function chooseConsent(analytics: boolean) {
  applyConsent(analytics);
  storeConsent(analytics);
  setBannerOpen(false);
}

// Tiny module-level pub/sub so the footer's "Preferências de cookies" link can
// reopen the banner from anywhere, without lifting state into a context.
type Listener = () => void;
let listeners: Listener[] = [];
let bannerOpen = false;

function notify() {
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return bannerOpen;
}

function getServerSnapshot() {
  return false;
}

export function setBannerOpen(open: boolean) {
  bannerOpen = open;
  notify();
}

export function useCookieBannerOpen() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Runs once on the client: applies a previously stored choice (consent resets to
 * denied on every fresh document load otherwise), or opens the banner if there's
 * no valid choice yet. */
export function initCookieConsent() {
  const stored = readStoredConsent();
  if (stored) {
    applyConsent(stored.analytics);
  } else {
    setBannerOpen(true);
  }
}
