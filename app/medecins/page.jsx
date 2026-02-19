import DoctorsCarousel from "./DoctorsCarousel";

const DOCTORS = [
  {
    name: "Docteur Benoît LEROY",
    graduation: "Diplômé de la faculté de médecine de Nancy.",
    convention: "Conventionné secteur 1",
    rdv: "https://www.doctolib.fr/medecin-generaliste/epinal/benoit-leroy",
  },
  {
    name: "Docteur Virginie REBORA",
    graduation: "Diplômée de la faculté de médecine de Nancy.",
    convention: "Conventionnée secteur 1",
    rdv: "https://www.doctolib.fr/medecin-generaliste/epinal/virginie-rebora",
  },
  {
    name: "Docteur Aurelie JACQUEMET",
    graduation: "Diplômée de la faculté de médecine de Nancy.",
    convention: "Conventionnée secteur 1",
    rdv: "https://www.doctolib.fr/medecin-generaliste/epinal/aurelie-jacquemet",
  },
  {
    name: "Docteur Frédéric VILESPY",
    graduation: "Diplômé de la faculté de médecine de Nancy.",
    convention: "Conventionné secteur 1",
    rdv: "https://www.doctolib.fr/medecin-generaliste/epinal/frederic-vilespy",
  },
  {
    name: "Docteur Christine WEISBECKER",
    graduation: "Diplômée de la faculté de médecine de Nancy.",
    convention: "Conventionnée secteur 1",
    rdv: "https://www.doctolib.fr/medecin-generaliste/epinal/christine-weisbecker",
  },
];

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Cabinet de médecine générale de la Maison Médicale Les Images.",
};

export default function MedecinsPage() {
  return (
    <main className="kine-page medecins-page">
      <section className="kine-panel medecins-panel">
        <h1 className="kine-title medecins-title">Médecins</h1>

        <div className="kine-info-block medecins-presentation-block">
          <DoctorsCarousel doctors={DOCTORS} />

          <p className="medecin-final-note">
            L’ensemble des médecins de la maison médicale sont membres d’une AGA et acceptent
            les règlements par chèques.
          </p>
        </div>

        <section className="medecins-rdv-band">
          <div className="medecins-rdv-inner">
            <p className="kine-section-title medecins-rdv-title">Prise de rendez-vous</p>

            <div className="medecins-rdv-grid">
              <div className="medecins-rdv-col">
                <p>
                  <strong>Secrétariat ouvert :</strong>
                </p>
                <p>
                  - Tous les jours <strong>du lundi au vendredi de 07:30 à 19:30.</strong>
                </p>
                <p>
                  - <strong>Le samedi de 07:30 à 12:30.</strong>
                </p>
                <p>
                  Prise de rendez-vous en ligne, sur place ou par téléphone au{" "}
                  <a className="kine-inline-phone" href="tel:+33329340414">
                    <strong>03 29 34 04 14</strong>
                  </a>
                  .
                </p>
              </div>

              <div className="medecins-rdv-col">
                <p>
                  <strong>Consultations sur rendez-vous.</strong>
                </p>
                <p>Dr LEROY : absent le jeudi</p>
                <p>Dr REBORA : absente le mercredi</p>
                <p>Dr SCHNEIDER : absente le mardi</p>
                <p>Dr VILESPY : absent le vendredi</p>
                <p>Dr WEISBECKER : absente le samedi</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
