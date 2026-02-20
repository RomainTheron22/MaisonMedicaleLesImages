export const metadata = {
  title: "Mentions legales | Maison Medicale Les Images",
  description: "Mentions legales du site de la Maison Medicale Les Images.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Mentions legales</h1>

        <div className="kine-info-block">
          <p className="kine-section-title">Éditeur du site</p>
          <p>
            Raison sociale : [A RENSEIGNER]
            <br />
            Forme juridique : [A RENSEIGNER]
            <br />
            Capital social : [A RENSEIGNER]
            <br />
            Siege social : [A RENSEIGNER]
            <br />
            SIREN / SIRET : [A RENSEIGNER]
            <br />
            Numero TVA intracommunautaire : [A RENSEIGNER]
            <br />
            Telephone : [A RENSEIGNER]
            <br />
            E-mail : [A RENSEIGNER]
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Directeur de la publication</p>
          <p>
            Nom et prenom : [A RENSEIGNER]
            <br />
            Contact : [A RENSEIGNER]
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Hébergeur du site</p>
          <p>
            Nom de l'hebergeur : [A RENSEIGNER]
            <br />
            Adresse : [A RENSEIGNER]
            <br />
            Telephone : [A RENSEIGNER]
            <br />
            Site web : [A RENSEIGNER]
          </p>
        </div>
      </section>
    </main>
  );
}
