export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Consultations Infirmière Asalée de la Maison Médicale Les Images.",
};

export default function AsaleePage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Infirmière Asalée</h1>

        <div className="kine-info-block">
          <div className="medecin-entry">
            <p className="kine-doctor-name">
              <strong>Mme POCARD Carole</strong>
            </p>
            <p>Éducation thérapeutique</p>
            <p>Réduction des facteurs de risques cardio-vasculaires</p>
            <p>Tests mémoires</p>
            <p>Spiromètres</p>
            <p>Sevrage tabac</p>
            <a
              className="medecin-rdv-link"
              href="https://www.youtube.com/watch?v=NUy_2zEZKHI"
              target="_blank"
              rel="noreferrer"
            >
              Plus d’information en vidéo
            </a>
          </div>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Prise de rendez-vous</p>
          <p>
            Consultations sur rendez-vous et après avis de votre médecin traitant.
          </p>
          <p style={{ marginTop: "8px" }}>Mardi : De 9h à 17h</p>
          <p>Mercredi : Groupe de marche le matin</p>
          <p>Jeudi : De 9h à 18h</p>
          <p>Vendredi : De 9h à 17h</p>
          <p style={{ marginTop: "16px" }}>
            Les rendez-vous de consultation se prennent sur place ou par téléphone
            au{" "}
            <a className="kine-inline-phone" href="tel:+33329342656">
              <strong>03 29 34 26 56</strong>
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
