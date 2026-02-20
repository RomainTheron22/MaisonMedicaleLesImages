export type CookieConsent = "accepted" | "refused";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (value === "accepted" || value === "refused") {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(value: CookieConsent): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // Ignore storage errors (private mode, blocked storage, etc.)
  }
}
