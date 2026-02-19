"use client";

import { useEffect, useRef, useState } from "react";

function wrapIndex(index, total) {
  return (index + total) % total;
}

const FEMALE_FIRST_NAMES = new Set(["christine", "marie", "delphine"]);
const MALE_FIRST_NAMES = new Set(["olivier", "denis"]);

function getNurseRoleLabel(fullName) {
  const normalized = (fullName || "").trim().toLowerCase();

  if (
    normalized.startsWith("mme ") ||
    normalized.startsWith("madame ") ||
    normalized.startsWith("mlle ")
  ) {
    return "Infirmi\u00e8re";
  }

  if (normalized.startsWith("mr ") || normalized.startsWith("monsieur ") || normalized.startsWith("m. ")) {
    return "Infirmier";
  }

  const firstName = normalized
    .replace(/^(mr|m\.|mme|mlle|madame|monsieur)\s+/, "")
    .split(/\s+/)[0];

  if (FEMALE_FIRST_NAMES.has(firstName)) {
    return "Infirmi\u00e8re";
  }

  if (MALE_FIRST_NAMES.has(firstName)) {
    return "Infirmier";
  }

  return "Infirmier";
}

export default function NursesCarousel({ nurses }) {
  const SWIPE_DURATION_MS = 440;
  const total = Array.isArray(nurses) ? nurses.length : 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimerRef = useRef(null);

  if (!total) {
    return null;
  }

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  const leftIndex = wrapIndex(activeIndex - 1, total);
  const rightIndex = wrapIndex(activeIndex + 1, total);

  const cards = [
    { slot: "left", nurse: nurses[leftIndex], index: leftIndex },
    { slot: "center", nurse: nurses[activeIndex], index: activeIndex },
    { slot: "right", nurse: nurses[rightIndex], index: rightIndex },
  ];

  const playTransition = (direction) => {
    if (isAnimating) {
      return;
    }

    const nextClass =
      direction === "next"
        ? "medecins-carousel-track-animating-next"
        : "medecins-carousel-track-animating-prev";

    if (animationTimerRef.current) {
      window.clearTimeout(animationTimerRef.current);
    }

    setAnimationClass("");
    setIsAnimating(true);

    window.requestAnimationFrame(() => {
      setAnimationClass(nextClass);
      animationTimerRef.current = window.setTimeout(() => {
        setAnimationClass("");
        setIsAnimating(false);
      }, SWIPE_DURATION_MS);
    });
  };

  const goPrev = () => {
    playTransition("prev");
    setActiveIndex((prev) => wrapIndex(prev - 1, total));
  };

  const goNext = () => {
    playTransition("next");
    setActiveIndex((prev) => wrapIndex(prev + 1, total));
  };

  return (
    <div className="medecins-carousel-wrap">
      <button
        type="button"
        className={`medecins-carousel-arrow medecins-carousel-arrow-left ${
          isAnimating ? "is-disabled" : ""
        }`}
        onClick={goPrev}
        disabled={isAnimating}
        aria-label="Infirmier précédent"
      >
        <span aria-hidden="true">{"\u2039"}</span>
      </button>

      <div
        className={`medecins-carousel-track ${animationClass}`}
        role="region"
        aria-live="polite"
      >
        {cards.map(({ slot, nurse, index }) => (
          <article
            key={`${slot}-${nurse.name}`}
            className={`medecins-carousel-card medecins-carousel-card-${slot}`}
          >
            <div className="medecin-avatar-slot" aria-hidden="true"></div>
            <p className="kine-doctor-name">
              <strong>{nurse.name}</strong>
            </p>
            <p>{getNurseRoleLabel(nurse.name)}</p>
            <p>Soins à domicile et à la maison médicale.</p>
            <p className="medecin-card-step">{`${index + 1}/${total}`}</p>
            <a className="medecin-rdv-link" href="tel:+33329311520">
              Prendre rendez-vous par téléphone
            </a>
          </article>
        ))}
      </div>

      <button
        type="button"
        className={`medecins-carousel-arrow medecins-carousel-arrow-right ${
          isAnimating ? "is-disabled" : ""
        }`}
        onClick={goNext}
        disabled={isAnimating}
        aria-label="Infirmier suivant"
      >
        <span aria-hidden="true">{"\u203A"}</span>
      </button>
    </div>
  );
}
