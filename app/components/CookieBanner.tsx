"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent, type CookieConsent } from "../utils/cookieConsent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    setIsVisible(consent === null);
    setIsReady(true);

    const handleOpenBanner = () => {
      setIsVisible(true);
    };

    window.addEventListener("open-cookie-banner", handleOpenBanner);

    return () => {
      window.removeEventListener("open-cookie-banner", handleOpenBanner);
    };
  }, []);

  const handleChoice = (value: CookieConsent) => {
    setCookieConsent(value);
    setIsVisible(false);
  };

  if (!isReady || !isVisible) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-live="polite"
      aria-label="Bannière de consentement aux cookies"
      style={{
        position: "fixed",
        left: "16px",
        right: "16px",
        bottom: "16px",
        zIndex: 1000,
        border: "1px solid rgba(47, 32, 36, 0.18)",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 10px 24px rgba(47, 32, 36, 0.16)",
        padding: "14px",
      }}
    >
      <p style={{ margin: "0 0 10px", lineHeight: 1.5 }}>
        Ce site utilise des cookies, notamment pour l’affichage de la carte Google Maps. Vous
        pouvez accepter ou refuser leur utilisation.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          style={{
            border: "1px solid rgba(143, 36, 51, 0.4)",
            background: "#8f2433",
            color: "#ffffff",
            borderRadius: "999px",
            padding: "8px 14px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Accepter
        </button>

        <button
          type="button"
          onClick={() => handleChoice("refused")}
          style={{
            border: "1px solid rgba(47, 32, 36, 0.25)",
            background: "#ffffff",
            color: "#2f2024",
            borderRadius: "999px",
            padding: "8px 14px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Refuser
        </button>

        <Link href="/politique-de-cookies" style={{ marginLeft: "auto", fontWeight: 700 }}>
          Politique de cookies
        </Link>
      </div>
    </aside>
  );
}
