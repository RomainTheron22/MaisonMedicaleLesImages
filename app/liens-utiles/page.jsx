import Image from "next/image";

const USEFUL_LINKS = [
  {
    label: "Haute autorité de santé",
    href: "https://www.has-sante.fr/",
    logo: "/images/Haute_Autorite_de_Sante.svg",
    zoom: "strong",
    logoScaleClass: "useful-link-logo-image-has",
  },
  {
    label: "Assurance maladie",
    href: "https://www.ameli.fr/",
    logo: "/images/AssuranceMaladie.png",
    zoom: "soft",
  },
  {
    label: "Institut national de prévention d’éducation pour la santé",
    href: "https://www.santepubliquefrance.fr/",
    logo: "/images/Sante-publique-France.png",
    zoom: "strong",
    logoScaleClass: "useful-link-logo-image-sante-publique",
  },
  {
    label: "Conseil de l’Ordre des Médecins",
    href: "https://www.conseil-national.medecin.fr/",
    logo: "/images/OrdreDesMedecins.png",
    zoom: "strong",
    logoScaleClass: "useful-link-logo-image-ordre",
  },
  {
    label: "Hôpital Emile Durkheim",
    href: "https://ch-emile-durkheim.fr/",
    logo: "/images/Hopital-Emile-Durkheim.png",
    zoom: "strong",
    logoScaleClass: "useful-link-logo-image-hopital",
  },
  {
    label: "Clinique la Ligne Bleue",
    href: "https://www.louispasteursante.com/etablissements/clinique-la-ligne-bleue/",
    logo: "/images/LaLigneBleu.png",
    zoom: "strong",
    logoScaleClass: "useful-link-logo-image-ligne-bleue",
  },
  {
    label: "Appui Santé Vosges",
    href: "https://www.appui-sante-vosges.fr/",
    logo: "/images/ASV.png",
    zoom: "strong",
    logoScaleClass: "useful-link-logo-image-asv",
  },
  {
    label: "ALMPPU",
    href: "https://www.amlppu.org/",
    logo: "/images/AMLPPU.png",
    zoom: "strong",
  },
  {
    label: "Union Française pour la Santé Bucco-Dentaire",
    href: "https://www.ufsbd.fr/",
    logo: "/images/UFSBD.png",
    zoom: "soft",
  },
];

export const metadata = {
  title: "Liens utiles | Maison Médicale Les Images",
  description: "Liens utiles de la Maison Médicale Les Images.",
};

export default function LiensUtilesPage() {
  return (
    <main className="useful-links-page">
      <section className="useful-links-panel">
        <h1 className="useful-links-title">Liens utiles</h1>
        <div className="useful-links-grid">
          {USEFUL_LINKS.map((item) => (
            <a
              key={item.label}
              className="useful-link-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="useful-link-logo useful-link-logo-top" aria-hidden>
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt=""
                    width={220}
                    height={84}
                    className={`useful-link-logo-image useful-link-logo-image-top ${
                      item.zoom === "soft"
                        ? "useful-link-logo-image-soft"
                        : "useful-link-logo-image-strong"
                    } ${item.logoScaleClass || ""}`}
                  />
                ) : null}
              </div>
              <p className="useful-link-name">{item.label}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
