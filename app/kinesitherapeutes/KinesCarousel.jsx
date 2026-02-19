"use client";

import { useEffect, useRef, useState } from "react";

function wrapIndex(index, total) {
  return (index + total) % total;
}

export default function KinesCarousel({ kines }) {
  const SWIPE_DURATION_MS = 440;
  const total = Array.isArray(kines) ? kines.length : 0;
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
    { slot: "left", kine: kines[leftIndex], index: leftIndex },
    { slot: "center", kine: kines[activeIndex], index: activeIndex },
    { slot: "right", kine: kines[rightIndex], index: rightIndex },
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
        aria-label="Kinésithérapeute précédent"
      >
        <span aria-hidden="true">{"\u2039"}</span>
      </button>

      <div
        className={`medecins-carousel-track ${animationClass}`}
        role="region"
        aria-live="polite"
      >
        {cards.map(({ slot, kine, index }) => (
          <article
            key={`${slot}-${kine.name}`}
            className={`medecins-carousel-card medecins-carousel-card-${slot}`}
          >
            <div className="medecin-avatar-slot" aria-hidden="true"></div>
            <p className="kine-doctor-name">
              <strong>{kine.name}</strong>
            </p>
            <p>{`Numéro ADELI ${kine.adeli}`}</p>
            <p>{`RPPS ${kine.rpps}`}</p>
            <p className="medecin-card-step">{`${index + 1}/${total}`}</p>
            <a className="medecin-rdv-link" href="tel:+33329343857">
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
        aria-label="Kinésithérapeute suivant"
      >
        <span aria-hidden="true">{"\u203A"}</span>
      </button>
    </div>
  );
}
