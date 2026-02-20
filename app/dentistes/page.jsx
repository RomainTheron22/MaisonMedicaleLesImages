import DentistsCarousel from "./DentistsCarousel";

const DENTISTS = [
  {
    name: "Docteur Bertrand LEPAIGE",
    faculty: "Nancy",
    avatar: "/images/Avatar-Practiciens/DentisteHomme.jpg",
  },
  {
    name: "Docteur Pierre THERON",
    faculty: "Reims",
    avatar: "/images/Avatar-Practiciens/DentisteHomme.jpg",
  },
  {
    name: "Docteur Julie Momper",
    faculty: "Nancy",
    avatar: "/images/Avatar-Practiciens/DentisteFemme.jpg",
  },
];

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Cabinet dentaire de la Maison Médicale Les Images.",
};

export default function DentistesPage() {
  return (
    <main className="kine-page medecins-page dentistes-page">
      <section className="kine-panel medecins-panel">
        <h1 className="kine-title medecins-title">Dentistes</h1>

        <div className="kine-info-block medecins-presentation-block">
          <DentistsCarousel dentists={DENTISTS} />

          <p className="medecin-final-note">
            L’ensemble des dentistes de la maison médicale sont membres d’une AGA et acceptent les
            règlements par chèques.
          </p>
        </div>

        <section className="medecins-rdv-band">
          <div className="medecins-rdv-inner">
            <p className="kine-section-title medecins-rdv-title">Prise de rendez-vous</p>
            <p className="infirmiers-rdv-single">
              <strong>Secrétariat ouvert :</strong> tous les jours du lundi au vendredi de{" "}
              <strong>07:30 à 19:30</strong>,<br /> et le samedi de <strong>07:30 à 12:30</strong>.
              <br />
              Prise de rendez-vous sur place ou par téléphone au{" "}
              <a className="kine-inline-phone" href="tel:+33329346070">
                <strong>03 29 34 60 70</strong>
              </a>
              .
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
