import KinesCarousel from "../KinesCarousel";

const KINES = [
  {
    name: "Cécile LECOMTE",
    adeli: "887010957",
    rpps: "10005414759",
    avatar: "/images/Avatar-Practiciens/KineFemme1.jpg",
  },
  {
    name: "Victor LECOMTE",
    adeli: "887011187",
    rpps: "10005518948",
    avatar: "/images/Avatar-Practiciens/KineHomme.jpg",
  },
  {
    name: "Noémie MACQUET",
    adeli: "887012136",
    rpps: "100056286222",
    avatar: "/images/Avatar-Practiciens/KineFemme1.jpg",
  },
  {
    name: "Mathilde WADDELL",
    adeli: "887005411",
    rpps: "10111010806",
    avatar: "/images/Avatar-Practiciens/KineFemme1.jpg",
  },
];

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Cabinet de masso-kinésithérapie de la Maison Médicale Les Images.",
};

export default function RendezVousInformationsPage() {
  return (
    <main className="kine-page medecins-page kinesitherapeutes-page">
      <section className="kine-panel medecins-panel">
        <h1 className="kine-title medecins-title">Kinésithérapeutes</h1>

        <div className="kine-info-block medecins-presentation-block">
          <KinesCarousel kines={KINES} />

          <p className="medecin-final-note">
            Nous mettons au cœur de notre pratique un accompagnement humain, individualisé et
            fondé sur une expertise actualisée.
            <br />
            L’ensemble des kinésithérapeutes de la maison médicale sont membres d’une AGA et
            acceptent les règlements par chèques.
          </p>
        </div>

        <section className="medecins-rdv-band">
          <div className="medecins-rdv-inner">
            <div className="medecins-rdv-grid kines-rdv-grid">
              <div className="medecins-rdv-col">
                <p className="kine-section-title">
                  <strong>Prise de rendez-vous</strong>
                </p>
                <p>
                  Secrétariat ouvert : tous les jours du lundi au vendredi de{" "}
                  <strong>07:30 à 19:30</strong>, et le samedi de{" "}
                  <strong>07:30 à 12:30</strong>.
                </p>
                <p>
                  Prise de rendez-vous sur place ou par téléphone au{" "}
                  <a className="kine-inline-phone" href="tel:+33329343857">
                    <strong>03 29 34 38 57</strong>
                  </a>
                  .
                </p>
              </div>

              <div className="medecins-rdv-col">
                <p className="kine-section-title">
                  <strong>Tarifs et prise en charge</strong>
                </p>
                <p>Le cabinet pratique les tarifs conventionnés et accepte :</p>
                <p>- Le tiers payant</p>
                <p>- La CMU / CSS</p>
                <p>- Les prises en charge ALD (Affection de Longue Durée)</p>
                <p>- Les accidents du travail (AT)</p>
                <p>- Mutuelles (selon contrat)</p>
              </div>

              <div className="medecins-rdv-col">
                <p className="kine-section-title">
                  <strong>Documents nécessaires</strong>
                </p>
                <p>Pour votre rendez-vous, merci de vous munir :</p>
                <p>- De votre ordonnance</p>
                <p>- De votre carte Vitale</p>
                <p>- D'une pièce d'identité si nécessaire</p>
                <p>- De votre attestation mutuelle (si tiers payant)</p>
                <p>- De votre attestation CMU CSS</p>
                <p>- De vos comptes rendus médicaux</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
