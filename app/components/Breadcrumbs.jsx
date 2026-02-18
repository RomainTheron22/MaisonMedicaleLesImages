"use client";

import { usePathname } from "next/navigation";

const BREADCRUMB_MAP = {
  "/": [{ label: "Accueil", href: "/" }],
  "/acces": [{ label: "Accès" }],
  "/documents": [{ label: "Documents" }],
  "/liens-utiles": [{ label: "Liens utiles" }],
  "/kinesitherapeutes": [
    { label: "Practiciens", href: "/#practiciens" },
    { label: "Kinésithérapeute", href: "/kinesitherapeutes" },
  ],
  "/kinesitherapeutes/soins-reeducation": [
    { label: "Practiciens", href: "/#practiciens" },
    { label: "Kinésithérapeute", href: "/kinesitherapeutes" },
    { label: "Soins & Rééducation" },
  ],
  "/kinesitherapeutes/rendez-vous-infos-pratiques": [
    { label: "Practiciens", href: "/#practiciens" },
    { label: "Kinésithérapeute", href: "/kinesitherapeutes" },
    { label: "Rendez-vous & Infos pratiques" },
  ],
  "/kinesitherapeutes/equipements": [
    { label: "Practiciens", href: "/#practiciens" },
    { label: "Kinésithérapeute", href: "/kinesitherapeutes" },
    { label: "Équipements" },
  ],
};

function toLabelFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildFallback(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return [{ label: "Accueil", href: "/" }];
  }

  let currentPath = "";
  return segments.map((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    return {
      label: toLabelFromSlug(segment),
      href: isLast ? undefined : currentPath,
    };
  });
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const isPracticiensPage =
    pathname === "/kinesitherapeutes" ||
    pathname.startsWith("/kinesitherapeutes/");

  if (!isPracticiensPage) {
    return null;
  }

  const items = BREADCRUMB_MAP[pathname] || buildFallback(pathname);

  return (
    <div className="breadcrumb-wrap">
      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={`${item.label}-${index}`} className="breadcrumb-item">
              {item.href && !isLast ? (
                <a href={item.href}>{item.label}</a>
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
