export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Cabinet dentaire de la Maison Médicale Les Images.",
};

export default function DentistesPage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Dentistes</h1>

        <div className="kine-info-block">
          <div className="medecin-entry">
            <p className="kine-doctor-name">
              <strong>Docteur Bertrand LEPAIGE</strong>
            </p>
            <p>Diplômé de la faculté dentaire de Nancy.</p>
          </div>

          <div className="medecin-entry">
            <p className="kine-doctor-name">
              <strong>Docteur Pierre THERON</strong>
            </p>
            <p>Diplômé de la faculté dentaire de Reims.</p>
          </div>

          <div className="medecin-entry">
            <p>
              <strong>Collaborateur :</strong>
            </p>
            <p className="kine-doctor-name">
              <strong>Docteur Maxime MAILLET</strong>
            </p>
            <p>Diplômé de la faculté dentaire de Nancy.</p>
          </div>

          <p className="medecin-final-note">
            L’ensemble des dentistes de la maison médicale sont membres d’une AGA et
            acceptent les règlements par chèques.
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Prise de rendez-vous</p>
          <p>
            <strong>Secrétariat ouvert :</strong>
          </p>
          <p>- Tous les jours <strong>du lundi au vendredi de 07:30 à 19:30.</strong></p>
          <p>- <strong>Le samedi de 07:30 à 12:30.</strong></p>
          <p>
            Prise de rendez-vous sur place ou par téléphone au{" "}
            <a className="kine-inline-phone" href="tel:+33329346070">
              <strong>03 29 34 60 70</strong>
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
