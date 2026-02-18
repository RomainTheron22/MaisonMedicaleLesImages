const KINE_SUBMENUS = [
  {
    label: "Informations pratiques",
    href: "/kinesitherapeutes/rendez-vous-infos-pratiques",
  },
  {
    label: "Soins & Rééducation",
    href: "/kinesitherapeutes/soins-reeducation",
  },
  {
    label: "Équipements",
    href: "/kinesitherapeutes/equipements",
  },
];

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Cabinet de masso-kinésithérapie de la Maison Médicale Les Images.",
};

export default function KinesitherapeutesPage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Kinésithérapeutes</h1>

        <div className="kine-submenu-buttons kine-submenu-buttons-compact">
          {KINE_SUBMENUS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="kine-button kine-button-compact"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="kine-info-block">
          <div className="kine-team-grid">
            <div className="kine-team-card">
              <p className="kine-doctor-name">
                <strong>Cécile LECOMTE</strong>
              </p>
              <p>Numéro ADELI 887010957</p>
              <p>RPPS 10005414759</p>
            </div>

            <div className="kine-team-card">
              <p className="kine-doctor-name">
                <strong>Victor LECOMTE</strong>
              </p>
              <p>Numéro ADELI 887011187</p>
              <p>RPPS 10005518948</p>
            </div>

            <div className="kine-team-card">
              <p className="kine-doctor-name">
                <strong>Noémie MACQUET</strong>
              </p>
              <p>Numéro ADELI 887012136</p>
              <p>RPPS 100056286222</p>
            </div>

            <div className="kine-team-card">
              <p className="kine-doctor-name">
                <strong>Mathilde WADDELL</strong>
              </p>
              <p>Numéro ADELI 887005411</p>
              <p>RPPS 10111010806</p>
            </div>
          </div>

          <p className="medecin-final-note">
            Nous mettons au cœur de notre pratique un accompagnement humain,
            individualisé et fondé sur une expertise actualisée. <br />
          
            L’ensemble des kinésithérapeutes de la maison médicale sont membres d’une
            AGA et acceptent les règlements par chèques.
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Prise de rendez-vous</p>
          <p>Le cabinet vous accueille du lundi au vendredi de 7h30 à 19h00.</p>
          <p>Vous pouvez prendre rendez-vous simplement et rapidement :</p>
          <p>
            - Par téléphone :{" "}
            <a className="kine-inline-phone" href="tel:+33329343857">
              <strong>03 29 34 38 57</strong>
            </a>
          </p>
          <p>
            Notre secrétariat vous propose un créneau adapté à vos disponibilités.
          </p>
          <p>- Directement sur place.</p>
          <p>
            Le secrétariat peut également organiser un rendez-vous lors de votre passage
            au cabinet.
          </p>
        </div>
      </section>
    </main>
  );
}
