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

        <div className="docs-block">
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
          <p className="docs-section-title">Formulaire de médecin traitant</p>
          <a
            className="docs-link medecin-rdv-link"
            href="/documents/formulaire-medecin-traitant.pdf"
            download
          >
            Télécharger
          </a>
        </div>

        <div className="docs-block">
          <p className="docs-section-title">Formulaire de soins à l’étranger</p>
          <a
            className="docs-link medecin-rdv-link"
            href="/documents/formulaire-soins-etranger.pdf"
            download
          >
            Télécharger
          </a>
        </div>

        <div className="docs-block">
          <p className="docs-section-title">Attestation de recherche d’emploi</p>
          <a
            className="docs-link medecin-rdv-link"
            href="/documents/attestation-recherche-emploi.pdf"
            download
          >
            Télécharger
          </a>
        </div>

        <div className="docs-block">
          <p className="docs-section-title">Frais de transport</p>
          <a
            className="docs-link medecin-rdv-link"
            href="/documents/formulaire-frais-transport.pdf"
            download
          >
            Télécharger
          </a>
        </div>

        <div className="docs-block">
          <p className="docs-section-title">Demande de capital décès</p>
          <a
            className="docs-link medecin-rdv-link"
            href="/documents/demande-capital-deces.pdf"
            download
          >
            Télécharger
          </a>
        </div>
      </section>
    </main>
  );
}
