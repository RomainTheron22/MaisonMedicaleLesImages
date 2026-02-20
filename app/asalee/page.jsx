import { withBasePath } from "../lib/withBasePath";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Consultations Infirmière Asalée de la Maison Médicale Les Images.",
};

export default function AsaleePage() {
  return (
    <main className="kine-page medecins-page asalee-page">
      <section className="kine-panel medecins-panel">
        <h1 className="kine-title medecins-title">Infirmière Asalée</h1>

        <div className="kine-info-block medecins-presentation-block">
          <article className="medecins-carousel-card medecins-carousel-card-center asalee-single-card">
            <div className="medecin-avatar-slot" aria-hidden="true">
              <img
                src={withBasePath("/images/Avatar-Practiciens/InfirmiereFemme.jpg")}
                alt=""
                className="medecin-avatar-image"
              />
            </div>
            <p className="kine-doctor-name">
              <strong>Mme POCARD Carole</strong>
            </p>
            <p>Infirmière Asalée</p>
            <p>Éducation thérapeutique</p>
            <p>Réduction des facteurs de risques cardio-vasculaires</p>
            <p>Tests mémoires</p>
            <p>Spiromètres</p>
            <p>Sevrage tabac</p>

            <div className="asalee-card-actions">
              <a
                className="medecin-rdv-link"
                href="https://www.youtube.com/watch?v=NUy_2zEZKHI"
                target="_blank"
                rel="noreferrer"
              >
                Plus d’informations en vidéo
              </a>
              <a className="medecin-rdv-link" href="tel:+33329342656">
                Prendre rendez-vous par téléphone
              </a>
            </div>
          </article>
        </div>

        <section className="medecins-rdv-band">
          <div className="medecins-rdv-inner">
            <p className="kine-section-title medecins-rdv-title">Prise de rendez-vous</p>
            <p className="infirmiers-rdv-single">
              Consultations sur rendez-vous et après avis de votre médecin traitant.
              <br />
              Mardi : de 9h à 17h
              <br />
              Mercredi : groupe de marche le matin
              <br />
              Jeudi : de 9h à 18h
              <br />
              Vendredi : de 9h à 17h
              <br />
              Les rendez-vous de consultation se prennent sur place ou par téléphone au{" "}
              <a className="kine-inline-phone" href="tel:+33329342656">
                <strong>03 29 34 26 56</strong>
              </a>
              .
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
