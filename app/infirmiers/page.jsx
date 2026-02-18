const NURSES = [
  "Mr Olivier AUTRET",
  "Mr Denis CROISETTE",
  "Mme Christine FRESSE",
  "Mme Marie LAMBOLEZ",
  "Mme Delphine MARILLER",
];

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Cabinet infirmier de la Maison Médicale Les Images.",
};

export default function InfirmiersPage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Infirmiers</h1>

        <div className="kine-info-block">
          {NURSES.map((nurse) => (
            <div key={nurse} className="medecin-entry">
              <p className="kine-doctor-name">
                <strong>{nurse}</strong>
              </p>
            </div>
          ))}
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Prise de rendez-vous</p>
          <p>
            <strong>Permanence à la maison médicale :</strong>
          </p>
          <p>- Matin et soir, sur rendez-vous uniquement.</p>
          <p>- Soins à domicile le reste de la journée.</p>
          <p style={{ marginTop: "16px" }}>
            <strong>Soins réalisés 7j/7 et les jours fériés.</strong>
          </p>
          <p>
            Prise de rendez-vous sur place ou par téléphone au{" "}
            <a className="kine-inline-phone" href="tel:+33329311520">
              <strong>03 29 31 15 20</strong>
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
