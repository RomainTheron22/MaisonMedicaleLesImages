import Link from "next/link";
import { withBasePath } from "./lib/withBasePath";

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
    href: "/kinesitherapeutes",
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
  return (
    <main className="container">
      <section id="practiciens" className="panel pro-panel">
        <h2 className="section-title">Practiciens</h2>
        <div className="pro-list">
          {PROFESSIONALS.map((pro) => (
            <Link key={pro.name} className="pro-item" href={pro.href}>
              <div className="pro-icon" aria-hidden="true">
                <img src={withBasePath(pro.icon)} alt="" className="pro-icon-image" />
              </div>
              <div>
                <h3 className="pro-name">{pro.name}</h3>
              </div>
            </Link>
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
        <img
          src={withBasePath("/images/maison-medicale.jpg")}
          alt="Maison Médicale Les Images"
          className="photo-image"
        />
      </section>
    </main>
  );
}
