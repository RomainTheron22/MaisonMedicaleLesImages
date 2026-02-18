export const MENU_ITEMS = [
  { label: "Accueil", href: "/" },
  {
    label: "Practiciens",
    href: "/#practiciens",
    children: [
      { label: "Médecins", href: "/#practiciens" },
      { label: "Dentistes", href: "/#practiciens" },
      {
        label: "Kinésithérapeutes",
        href: "/kinesitherapeutes",
        children: [
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
        ],
      },
      { label: "Infirmiers", href: "/#practiciens" },
      { label: "Asalées", href: "/#practiciens" },
    ],
  },
  { label: "Accès", href: "/acces" },
  { label: "Documents", href: "/documents" },
  { label: "Liens utiles", href: "/liens-utiles" },
];
