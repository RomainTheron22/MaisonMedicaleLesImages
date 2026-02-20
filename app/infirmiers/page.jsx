import NursesCarousel from "./NursesCarousel";

const NURSES = [
  { name: "Mr Olivier AUTRET", avatar: "/images/Avatar-Practiciens/KineHomme.jpg" },
  { name: "Mr Denis CROISETTE", avatar: "/images/Avatar-Practiciens/KineHomme.jpg" },
  { name: "Mme Christine FRESSE", avatar: "/images/Avatar-Practiciens/InfirmiereFemme.jpg" },
  { name: "Mme Marie LAMBOLEZ", avatar: "/images/Avatar-Practiciens/InfirmiereFemme.jpg" },
  { name: "Mme Delphine MARILLER", avatar: "/images/Avatar-Practiciens/InfirmiereFemme.jpg" },
];

export const metadata = {
  title: "Maison Medicale Les Images",
  description: "Cabinet infirmier de la Maison Medicale Les Images.",
};

export default function InfirmiersPage() {
  return (
    <main className="kine-page medecins-page infirmiers-page">
      <section className="kine-panel medecins-panel">
        <h1 className="kine-title medecins-title">Infirmiers</h1>

        <div className="kine-info-block medecins-presentation-block">
          <NursesCarousel nurses={NURSES} />
        </div>

        <section className="medecins-rdv-band">
          <div className="medecins-rdv-inner">
            <p className="kine-section-title medecins-rdv-title">Prise de rendez-vous</p>
            <p className="infirmiers-rdv-single">
              <strong>Permanence a la maison medicale :</strong> matin et soir, sur rendez-vous
              uniquement. <br /> Soins a domicile le reste de la journee.{" "}
              <strong>
                {" "}
                <br />
                Soins realises 7j/7 et les jours feries.
              </strong>{" "}
              <br /> Prise de rendez-vous sur place ou par telephone au{" "}
              <a className="kine-inline-phone" href="tel:+33329311520">
                <strong>03 29 31 15 20</strong>
              </a>
              .
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
