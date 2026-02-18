import Image from "next/image";

const PROFESSIONALS = [
  {
    name: "Médecins",
    href: "/#practiciens",
    icon: "/images/medecin.png",
  },
  {
    name: "Dentistes",
    href: "/#practiciens",
    icon: "/images/dentiste.png",
  },
  {
    name: "Kinésithérapeutes",
    href: "/kinesitherapeutes",
    icon: "/images/kine.png",
  },
  {
    name: "Infirmiers",
    href: "/#practiciens",
    icon: "/images/infirmier.png",
  },
  {
    name: "Asalées",
    href: "/#practiciens",
    icon: "/images/asalee.png",
  },
];

const INFO_BLOCKS = [
  {
    title: "Urgence vitale",
    detail: (
      <>
        Composez le <a href="tel:15">15</a> ou le <a href="tel:112">112</a>
      </>
    ),
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className="container">
        <section id="practiciens" className="panel pro-panel">
          <h2 className="section-title">Practiciens</h2>
          <div className="pro-list">
            {PROFESSIONALS.map((pro) => (
              <a key={pro.name} className="pro-item" href={pro.href}>
                <div className="pro-icon" aria-hidden="true">
                  <Image
                    src={pro.icon}
                    alt=""
                    width={44}
                    height={44}
                    className="pro-icon-image"
                  />
                </div>
                <div>
                  <h3 className="pro-name">{pro.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="panel info-panel">
          <h2 className="section-title">Informations pratiques</h2>

          <article className="info-item info-map">
            <h3>Adresse</h3>

            <p className="map-address">
              2 Rue Ernest Renan
              <br />
              88000 Épinal
            </p>

            <div className="map-embed">
              <iframe
                title="Plan Maison Médicale Les Images"
                src="https://www.google.com/maps?q=2%20Rue%20Ernest%20Renan%2C%2088000%20Epinal&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </article>

          <div className="info-list">
            {INFO_BLOCKS.map((item) => (
              <article key={item.title} className="info-item">
                <h3>{item.title}</h3>
                <p>
                  {typeof item.detail === "string" ? (
                    <span style={{ whiteSpace: "pre-line" }}>{item.detail}</span>
                  ) : (
                    item.detail
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel photo-panel" aria-label="Photo de la maison médicale">
          <Image
            src="/images/maison-medicale.jpg"
            alt="Maison Médicale Les Images"
            width={766}
            height={458}
            className="photo-image"
            priority
          />
        </section>
      </main>

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
              <h4 className="footer-subtitle">Contacts</h4>
              <ul className="footer-list footer-list-clean">
                <li>
                  <strong>Médecins :</strong> <a href="tel:+33329340414">03.29.34.04.14</a>
                </li>
                <li>
                  <strong>Kinésithérapeutes :</strong>{" "}
                  <a href="tel:+33329343857">03.29.34.38.57</a>
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
              <h4 className="footer-subtitle">Urgences et aide</h4>
              <ul className="footer-list footer-list-clean">
                <li>
                  <strong>Médecin de garde :</strong>{" "}
                  <a href="tel:+33820332020">08.20.33.20.20</a>
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
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
