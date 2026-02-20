export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Équipements du cabinet de kinésithérapie.",
};

export default function SoinsEquipementsPage() {
  return (
    <main className="kine-page kine-soins-detail-page">
      <section className="kine-info-panel">
        <p className="kine-section-title">Équipements</p>
        <p>
          Le cabinet est équipé de matériels modernes permettant d’optimiser la prise en charge :
        </p>
        <p>
          •{" "}
          <strong>
            <u>Ondes de choc radiales et focales (Storz Medical)</u>
          </strong>
        </p>
        <p>STORZ MEDICAL</p>
        <p>
          <a href="https://www.storzmedical.com/fr/" target="_blank" rel="noreferrer">
            https://www.storzmedical.com/fr/
          </a>
        </p>
        <p>
          Pour tendinites, fasciite plantaire, calcifications, douleurs chroniques, épines
          calcanéennes, canal carpien, hernies discales, arthrose…
        </p>

        <p>
          •{" "}
          <strong>
            <u>iMoov®</u>
          </strong>
        </p>
        <p>Outil de rééducation innovant basé sur le mouvement fonctionnel et le travail en 3D.</p>

        <p>
          •{" "}
          <strong>
            <u>Réalité virtuelle thérapeutique Kiné Quantum®</u>
          </strong>
        </p>
        <p>KineQuantum (réalité virtuelle)</p>
        <p>
          <a href="https://www.kinequantum.com/" target="_blank" rel="noreferrer">
            https://www.kinequantum.com/
          </a>
        </p>
        <p>
          Plateforme technologique dédiée au renforcement, à la rééducation fonctionnelle et au bilan
          du mouvement, pour la motricité, l’équilibre, la proprioception et la gestion des douleurs.
        </p>
        <p>Ces technologies permettent une prise en charge plus précise, efficace et motivante.</p>
      </section>
    </main>
  );
}
