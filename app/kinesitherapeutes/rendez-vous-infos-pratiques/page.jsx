export const metadata = {
  title: "Rendez-vous & Infos pratiques | Kinésithérapeutes",
  description: "Informations pratiques du cabinet de kinésithérapie.",
};

export default function RendezVousInfosPratiquesPage() {
  return (
    <main className="kine-page">
      <section id="kine-infos" className="kine-info-panel">
        <nav className="kine-anchor-nav" aria-label="Accès rapide sections">
          <a className="kine-anchor-link" href="#kine-rdv">
            Prise de rendez-vous
          </a>
          <a className="kine-anchor-link" href="#kine-tarifs">
            Tarifs et prise en charge
          </a>
          <a className="kine-anchor-link" href="#kine-docs">
            Documents nécessaires
          </a>
        </nav>

        <div id="kine-horaires" className="kine-info-block">
          <p id="kine-rdv" className="kine-section-title">Prise de rendez-vous</p>
          <p>Le cabinet vous accueille du lundi au vendredi de 7H30 à 19H00</p>

          <p>Vous pouvez prendre rendez-vous simplement et rapidement :</p>
          <p>
            -Par téléphone :{" "}
            <a className="kine-inline-phone" href="tel:+33329343857">
              03 29 34 38 57
            </a>
          </p>
          <p>
            Notre secrétariat répond à vos appels pour vous proposer un créneau
            adapté.
          </p>
          <p>-Directement sur place</p>
          <p>
            Le secrétariat peut organiser un rendez-vous lors de votre passage au
            cabinet.
          </p>
        </div>

        <div id="kine-tarifs" className="kine-info-block">
          <p className="kine-section-title">Tarifs et prise en charge</p>
          <p>Le cabinet pratique les tarifs conventionnés et accepte :</p>
          <p>• Le tiers payant</p>
          <p>• La CMU / CSS</p>
          <p>• Les prises en charge ALD (Affection de Longue Durée)</p>
          <p>• Les accidents du travail (AT)</p>
          <p>• Mutuelles (selon contrat)</p>
        </div>

        <div id="kine-docs" className="kine-info-block">
          <p className="kine-section-title">Documents nécessaires</p>
          <p>Pour votre rendez-vous, merci de vous munir :</p>
          <p>• De votre ordonnance</p>
          <p>• De votre carte Vitale</p>
          <p>• D’une pièce d’identité si nécessaire</p>
          <p>• De votre attestation mutuelle (si tiers payant)</p>
          <p>. De votre attestation CMU CSS</p>
          <p>.de vos comptes rendus médicaux</p>
        </div>
      </section>
    </main>
  );
}
