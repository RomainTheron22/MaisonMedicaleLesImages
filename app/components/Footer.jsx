"use client";

function openCookieBanner() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event("open-cookie-banner"));
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <p className="footer-kicker">Maison Médicale</p>
            <h3 className="footer-title">Les Images</h3>
            <p className="footer-text">
              Centre pluridisciplinaire pour votre suivi de santé quotidien.
            </p>
            <p className="footer-text">
              2 Rue Ernest Renan
              <br />
              88000 Épinal
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-subtitle footer-subtitle-underlined">Contacts</h4>
            <ul className="footer-list footer-list-clean">
              <li>
                <strong>Médecins :</strong> <a href="tel:+33329340414">03.29.34.04.14</a>
              </li>
              <li>
                <strong>Kinésithérapeutes :</strong> <a href="tel:+33329343857">03.29.34.38.57</a>
              </li>
              <li>
                <strong>Dentistes :</strong> <a href="tel:+33329346070">03.29.34.60.70</a>
              </li>
              <li>
                <strong>Infirmiers :</strong> <a href="tel:+33329311520">03.29.31.15.20</a>
              </li>
              <li>
                <strong>Asalées :</strong> <a href="tel:+33329342656">03.29.34.26.56</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-subtitle footer-subtitle-underlined">Urgences et aide</h4>
            <ul className="footer-list footer-list-clean">
              <li>
                <strong>Médecin de garde :</strong> <a href="tel:+33820332020">08.20.33.20.20</a>
              </li>
              <li>
                <strong>Pharmacie de garde :</strong> <a href="tel:3237">3237</a>
              </li>
              <li>
                <strong>SAMU :</strong> <a href="tel:15">15</a> / <a href="tel:112">112</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-legal">
            (c) {currentYear} Maison Médicale Les Images. Tous droits réservés.
          </p>
          <div className="footer-legal-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-de-cookies">Politique de cookies</a>
            <button
              type="button"
              onClick={openCookieBanner}
              className="footer-link-button"
            >
              Gérer mes cookies
            </button>
            <a href="/politique-de-confidentialite">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
