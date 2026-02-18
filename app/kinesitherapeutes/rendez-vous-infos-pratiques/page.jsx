export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Informations pratiques du cabinet de kinésithérapie.",
};

export default function InformationsPratiquesPage() {
  return (
    <main className="kine-page">
      <section className="kine-info-panel">
        <h1 className="kine-title">Informations pratiques</h1>

        <div className="kine-info-block">
          <p className="kine-section-title">Horaires d'ouverture</p>
          <p>Le cabinet vous accueille du lundi au vendredi de 7h30 à 19h00.</p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Tarifs et prise en charge</p>
          <p>Le cabinet pratique les tarifs conventionnés et accepte :</p>
          <p>- Le tiers payant</p>
          <p>- La CMU / CSS</p>
          <p>- Les prises en charge ALD (Affection de Longue Durée)</p>
          <p>- Les accidents du travail (AT)</p>
          <p>- Mutuelles (selon contrat)</p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Documents nécessaires</p>
          <p>Pour votre rendez-vous, merci de vous munir :</p>
          <p>- De votre ordonnance</p>
          <p>- De votre carte Vitale</p>
          <p>- D'une pièce d'identité si nécessaire</p>
          <p>- De votre attestation mutuelle (si tiers payant)</p>
          <p>- De votre attestation CMU CSS</p>
          <p>- De vos comptes rendus médicaux</p>
        </div>
      </section>
    </main>
  );
}
