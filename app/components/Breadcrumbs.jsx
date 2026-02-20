"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const KINE_ROOT = "/kinesitherapeutes/rendez-vous-infos-pratiques";
const SOINS_LABEL = "Soins et Réeducations";

const KINE_BASE_ITEMS = [
  { label: "Nos practiciens", href: "/#practiciens" },
  { label: "Kinésithérapeute", href: KINE_ROOT, alwaysLink: true },
];

const BREADCRUMB_MAP = {
  "/kinesitherapeutes": [...KINE_BASE_ITEMS],
  "/kinesitherapeutes/rendez-vous-infos-pratiques": [...KINE_BASE_ITEMS, { label: "Rendez-vous & Informations" }],
  "/kinesitherapeutes/soins-reeducation": [...KINE_BASE_ITEMS, { label: SOINS_LABEL }],
  "/kinesitherapeutes/soins-reeducation/reeducation-generale": [
    ...KINE_BASE_ITEMS,
    { label: SOINS_LABEL, href: "/kinesitherapeutes/soins-reeducation", alwaysLink: true },
    { label: "Rééducation générale" },
  ],
  "/kinesitherapeutes/soins-reeducation/cabinet-labellise-prescrimouv": [
    ...KINE_BASE_ITEMS,
    { label: SOINS_LABEL, href: "/kinesitherapeutes/soins-reeducation", alwaysLink: true },
    { label: "Cabinet labellisé Prescri’Mouv" },
  ],
  "/kinesitherapeutes/soins-reeducation/specialites-du-cabinet": [
    ...KINE_BASE_ITEMS,
    { label: SOINS_LABEL, href: "/kinesitherapeutes/soins-reeducation", alwaysLink: true },
    { label: "Spécialités du cabinet" },
  ],
  "/kinesitherapeutes/soins-reeducation/equipements": [
    ...KINE_BASE_ITEMS,
    { label: SOINS_LABEL, href: "/kinesitherapeutes/soins-reeducation", alwaysLink: true },
    { label: "Équipements" },
  ],
  "/kinesitherapeutes/equipements": [...KINE_BASE_ITEMS, { label: "Équipements" }],
};

function toLabelFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildFallback(pathname) {
  if (!pathname.startsWith("/kinesitherapeutes")) {
    return [];
  }

  if (pathname.startsWith("/kinesitherapeutes/soins-reeducation/")) {
    const segments = pathname.split("/").filter(Boolean);
    return [
      ...KINE_BASE_ITEMS,
      { label: SOINS_LABEL, href: "/kinesitherapeutes/soins-reeducation", alwaysLink: true },
      { label: toLabelFromSlug(segments[segments.length - 1]) },
    ];
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) {
    return [...KINE_BASE_ITEMS];
  }

  const subPath = segments.slice(1).join("/");
  const isLastRendezVous = subPath === "rendez-vous-infos-pratiques";
  const trail = [...KINE_BASE_ITEMS];

  if (!isLastRendezVous) {
    trail.push({
      label: toLabelFromSlug(segments[segments.length - 1]),
    });
  }

  return trail;
}

export default function Breadcrumbs() {
  const rawPathname = usePathname();
  const pathname = rawPathname === "/" ? "/" : rawPathname.replace(/\/+$/, "");
  const isKinePage = pathname === "/kinesitherapeutes" || pathname.startsWith("/kinesitherapeutes/");

  if (!isKinePage) {
    return null;
  }

  const items = BREADCRUMB_MAP[pathname] || buildFallback(pathname);
  if (!items.length) {
    return null;
  }

  return (
    <div className="breadcrumb-wrap">
      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={`${item.label}-${index}`} className="breadcrumb-item">
              {item.href && (!isLast || item.alwaysLink) ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
              {!isLast ? <span className="breadcrumb-sep">/</span> : null}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
