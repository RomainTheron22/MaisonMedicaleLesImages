import Link from "next/link";
import { withBasePath } from "../../lib/withBasePath";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Accès aux sections soins et rééducation du cabinet de kinésithérapie.",
};

export default function SoinsReeducationPage() {
  return (
    <main className="docs-page">
      <section className="docs-panel">
        <h1 className="docs-title kine-soins-hub-title">Soins et Réeducations</h1>

        <div className="docs-grid kine-soins-hub-grid">
          <Link
            className="docs-block kine-soins-card-link"
            href="/kinesitherapeutes/soins-reeducation/reeducation-generale"
          >
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/photoskine/Reeducation.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Rééducation générale</p>
          </Link>

          <Link
            className="docs-block kine-soins-card-link"
            href="/kinesitherapeutes/soins-reeducation/cabinet-labellise-prescrimouv"
          >
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/photoskine/Prescrimove.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Cabinet labellisé Prescri’Mouv</p>
          </Link>

          <Link
            className="docs-block kine-soins-card-link"
            href="/kinesitherapeutes/soins-reeducation/specialites-du-cabinet"
          >
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/photoskine/Specialite.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Spécialités du cabinet</p>
          </Link>

          <Link
            className="docs-block kine-soins-card-link"
            href="/kinesitherapeutes/soins-reeducation/equipements"
          >
            <div className="useful-link-logo useful-link-logo-top docs-logo-slot" aria-hidden>
              <img
                src={withBasePath("/images/photoskine/Equipements.webp")}
                alt=""
                className="docs-logo-image docs-logo-image-bottom"
              />
            </div>
            <p className="docs-section-title">Équipements</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
