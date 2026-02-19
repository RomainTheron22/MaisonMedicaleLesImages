import { withBasePath } from "../lib/withBasePath";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Documents administratifs de la Maison Médicale Les Images.",
};

export default function DocumentsPage() {
  return (
    <main className="docs-page">
      <section className="docs-panel">
        <h1 className="docs-title">Documents administratifs</h1>
        <p className="docs-subtitle">
          (Source : Caisse Primaire d’Assurance Maladie : ameli.fr)
        </p>

        <div className="docs-grid">
          <div className="docs-block">
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/Questionnaire.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Questionnaire satisfaction patient</p>
            <a
              className="docs-link medecin-rdv-link"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxiSPiCNIOCRAeL6TAoxlhPcE7eVgcGvWrlkDxUHwJp1464w/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Accéder au questionnaire
            </a>
          </div>

          <div className="docs-block">
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/Medecin_Traitant.webp")}
                alt=""
                className="docs-logo-image"
              />
            </div>
            <p className="docs-section-title">Formulaire de médecin traitant</p>
            <a
              className="docs-link medecin-rdv-link"
              href={withBasePath("/documents/formulaire-medecin-traitant.pdf")}
              download
            >
              Télécharger
            </a>
          </div>

          <div className="docs-block">
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/Soins_Etranger.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Formulaire de soins à l’étranger</p>
            <a
              className="docs-link medecin-rdv-link"
              href={withBasePath("/documents/formulaire-soins-etranger.pdf")}
              download
            >
              Télécharger
            </a>
          </div>

          <div className="docs-block">
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/RechercheEmploi.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Attestation de recherche d’emploi</p>
            <a
              className="docs-link medecin-rdv-link"
              href={withBasePath("/documents/attestation-recherche-emploi.pdf")}
              download
            >
              Télécharger
            </a>
          </div>

          <div className="docs-block">
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/FraisTransport.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Frais de transport</p>
            <a
              className="docs-link medecin-rdv-link"
              href={withBasePath("/documents/formulaire-frais-transport.pdf")}
              download
            >
              Télécharger
            </a>
          </div>

          <div className="docs-block">
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/CapitaleDeces.webp")}
                alt=""
                className="docs-logo-image"
              />
            </div>
            <p className="docs-section-title">Demande de capital décès</p>
            <a
              className="docs-link medecin-rdv-link"
              href={withBasePath("/documents/demande-capital-deces.pdf")}
              download
            >
              Télécharger
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
