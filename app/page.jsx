import Link from "next/link";
import { withBasePath } from "./lib/withBasePath";
import RevealOnScroll from "./components/RevealOnScroll";

const PROFESSIONALS = [
  {
    name: "Médecins",
    href: "/medecins",
    icon: "/images/medecin.png",
  },
  {
    name: "Dentistes",
    href: "/dentistes",
    icon: "/images/dentiste.png",
  },
  {
    name: "Kinésithérapeutes",
    href: "/kinesitherapeutes/rendez-vous-infos-pratiques",
    icon: "/images/kine.png",
  },
  {
    name: "Infirmiers",
    href: "/infirmiers",
    icon: "/images/infirmier.png",
  },
  {
    name: "Asalées",
    href: "/asalee",
    icon: "/images/asalee.png",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-label="Bannière d'accueil">
        <img
          src={withBasePath("/images/Acceuil.webp")}
          alt="Maison Médicale Les Images"
          className="home-hero-image"
        />
        <div className="home-hero-overlay" aria-hidden="true"></div>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Maison Médicale les images</h1>
          <p className="home-hero-subtitle">
            Centre pluridisciplinaire pour votre suivi de santé quotidien.
          </p>
        </div>
      </section>

      <main className="container home-container">
        <RevealOnScroll as="section" id="practiciens" className="pro-panel">
          <h2 className="section-title home-practiciens-title">Nos practiciens</h2>
          <div className="pro-list">
            {PROFESSIONALS.map((pro, index) => (
              <Link
                key={pro.name}
                className="pro-item pro-item-reveal"
                href={pro.href}
                style={{ "--reveal-delay": `${index * 180}ms` }}
              >
                <div className="pro-icon" aria-hidden="true">
                  <img src={withBasePath(pro.icon)} alt="" className="pro-icon-image" />
                </div>
                <div>
                  <h3 className="pro-name">{pro.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        <section className="home-info-band">
          <RevealOnScroll as="div" className="home-info-header reveal-delay-1">
            <h2 className="section-title home-info-title">Informations pratiques</h2>
          </RevealOnScroll>

          <div className="home-info-grid">
            <RevealOnScroll as="section" className="info-panel reveal-delay-1">
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
            </RevealOnScroll>

            <RevealOnScroll
              as="section"
              className="photo-panel reveal-delay-2"
              aria-label="Photo de la maison médicale"
            >
              <img
                src={withBasePath("/images/maison-medicale.jpg")}
                alt="Maison Médicale Les Images"
                className="photo-image"
              />
            </RevealOnScroll>
          </div>
        </section>
      </main>
    </>
  );
}
