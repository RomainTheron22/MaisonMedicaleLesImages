const KINE_SUBMENUS = [
  {
    label: "Rendez-vous & Infos pratiques",
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
  title: "Kinésithérapeutes | Maison Médicale Les Images",
  description: "Cabinet de masso-kinésithérapie de la Maison Médicale Les Images.",
};

export default function KinesitherapeutesPage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Kinésithérapeutes</h1>

        <p className="kine-text">Le cabinet de masso-kinésithérapie est composé de :</p>

        <ul className="kine-list">
          <li>
            Cécile LECOMTE - numéro ADELI 887010957 - RPPS 10005414759
          </li>
          <li>
            Victor LECOMTE - numéro ADELI 887011187 - RPPS 10005518948
          </li>
          <li>
            Noémie MACQUET - numéro ADELI 887012136 - RPPS 100056286222
          </li>
          <li>
            Mathilde WADDELL - numéro ADELI 887005411 - RPPS 10111010806
          </li>
        </ul>

        <p className="kine-text">
          Nous mettons au cœur de notre pratique un accompagnement humain,
          individualisé et fondé sur une expertise actualisée.
        </p>
        <p className="kine-phone">
          <a href="tel:+33329343857">03 29 34 38 57</a>
        </p>
      </section>

      <section className="kine-submenu-wide">
        <div className="kine-submenu-buttons">
          {KINE_SUBMENUS.map((item) => (
            <a key={item.href} href={item.href} className="kine-button">
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
