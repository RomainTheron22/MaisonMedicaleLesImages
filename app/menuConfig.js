export const MENU_ITEMS = [
  { label: "Accueil", href: "/" },
  {
    label: "Nos practiciens",
    href: "/#practiciens",
    children: [
      { label: "Médecins", href: "/medecins" },
      { label: "Dentistes", href: "/dentistes" },
      {
        label: "Kinésithérapeutes",
        href: "/kinesitherapeutes",
        children: [
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
        ],
      },
      { label: "Infirmiers", href: "/infirmiers" },
      { label: "Asalées", href: "/asalee" },
    ],
  },
  { label: "Accès", href: "/acces" },
  { label: "Documents", href: "/documents" },
  { label: "Liens utiles", href: "/liens-utiles" },
];
