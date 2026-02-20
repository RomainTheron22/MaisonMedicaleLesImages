import Image from "next/image";
import { withBasePath } from "../../lib/withBasePath";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Soins, rééducation et spécialités du cabinet de kinésithérapie.",
};

export default function SoinsReeducationPage() {
  return (
    <main className="kine-page kine-soins-page">
      <section className="kine-info-panel">
        <nav className="kine-soins-anchor-nav" aria-label="Accès rapide sections">
          <a className="kine-soins-anchor-link" href="#kine-reeducation-generale">
            Rééducation générale
          </a>
          <a className="kine-soins-anchor-link" href="#kine-prescrimouv">
            Cabinet labellisé Prescri’Mouv
          </a>
          <a className="kine-soins-anchor-link" href="#kine-specialites">
            Spécialités du cabinet
          </a>
          <a className="kine-soins-anchor-link" href="#kine-equipements">
            Équipements
          </a>
        </nav>

        <div id="kine-reeducation-generale" className="kine-info-block">
          <p className="kine-section-title">Rééducation générale</p>
          <p>Nous prenons en charge un large éventail de pathologies du quotidien.</p>
          <p>
            La rééducation générale regroupe l’ensemble des actes relevant du décret de compétences
            des masseurs-kinésithérapeutes, incluant l’évaluation, la prévention, le traitement et
            la réadaptation des déficiences et incapacités fonctionnelles.
          </p>

          <figure className="kine-inline-photo">
            <Image
              className="kine-inline-photo-image"
              src={withBasePath("/images/photoskine/1.webp")}
              alt="Séance de rééducation au cabinet"
              width={4032}
              height={3024}
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </figure>

          <p>
            <strong>
              <u>Rééducation musculo-squelettique</u>
            </strong>
          </p>
          <p>• Lombalgies, cervicalgies, dorsalgies</p>
          <p>• Arthrose, pathologies dégénératives</p>
          <p>• Entorses, tendinopathies, bursites, déchirures musculaires</p>
          <p>• Syndromes canalaires (carpe, tunnel tarsien…)</p>
          <p>• Fasciite plantaire</p>
          <p>• Suites de prothèses (genou, hanche, épaule…)</p>
          <p>• Rééducation après immobilisation, plâtre, attelle</p>
          <p>• Rééquilibration posturale</p>
          <p>• Correction des troubles statiques</p>

          <p>
            <strong>
              <u>Traumatologie et post-opératoire</u>
            </strong>
          </p>
          <p>• Rééducation après chirurgie orthopédique</p>
          <p>• Suites de ligamentoplastie (LCA…), chirurgie du rachis</p>
          <p>• Fractures et raideurs articulaires</p>
          <p>• Cicatrisation, mobilisation tissulaire, travail des adhérences</p>
          <p>• Réhabilitation fonctionnelle complète jusqu’à la reprise d’activité</p>

          <p>
            <strong>
              <u>Rachis et posture</u>
            </strong>
          </p>
          <p>• École du dos et prévention des récidives</p>
          <p>• Renforcement des muscles profonds</p>
          <p>• Rééducation des troubles posturaux</p>
          <p>• Travail du gainage et de la mobilité rachidienne</p>

          <div className="kine-inline-layout-left">
            <figure className="kine-inline-photo-left">
              <Image
                className="kine-inline-photo-left-image"
                src={withBasePath("/images/photoskine/2.webp")}
                alt="Exercices de rééducation au cabinet"
                width={3024}
                height={4032}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </figure>

            <div className="kine-inline-text-right">
              <p>
                <strong>
                  <u>Rééducation respiratoire</u>
                </strong>
              </p>
              <p>• Désencombrement bronchique</p>
              <p>• Pathologies obstructives et restrictives (BPCO, asthme…)</p>
              <p>• Rééducation respiratoire post-infection</p>
              <p>• Travail ventilatoire, posture et endurance</p>

              <p>
                <strong>
                  <u>Rééducation neurologique</u>
                </strong>
              </p>
              <p>• Suites d’AVC (hémiplégie, spasticité, troubles de l’équilibre)</p>
              <p>• Sclérose en plaques, Parkinson et maladies neurodégénératives</p>
              <p>• Troubles de la marche et de la coordination</p>
              <p>• Stimulation proprioceptive et renforcement fonctionnel</p>

              <p>
                <strong>
                  <u>Rééducation du système veineux et lymphatique</u>
                </strong>
              </p>
              <p>• Jambes lourdes</p>
              <p>• Troubles circulatoires</p>
              <p>• Drainage, pressothérapie</p>
              <p>• Œdèmes post-chirurgicaux / post-traumatiques</p>

              <p>
                <strong>
                  <u>Rééducation cardio-respiratoire & remise en forme adaptée</u>
                </strong>
              </p>
              <p>• Réentraînement à l’effort</p>
              <p>• Préparation à la reprise du sport</p>
              <p>• Programme adapté selon les capacités et pathologies chroniques</p>

              <p>
                <strong>
                  <u>Prévention et éducation thérapeutique</u>
                </strong>
              </p>
              <p>• Conseils d’ergonomie : travail, quotidien, sport</p>
              <p>• Prévention des blessures</p>
              <p>• Apprentissage des bons gestes et postures</p>
              <p>
                Chaque prise en charge est personnalisée en fonction de votre douleur, de votre
                mobilité et de vos objectifs.
              </p>
            </div>
          </div>
        </div>

        <div id="kine-prescrimouv" className="kine-info-block">
          <p className="kine-section-title">Cabinet labellisé Prescri’Mouv</p>
          <p>
            Notre cabinet est labellisé Prescri’Mouv, un dispositif régional reconnu qui
            accompagne les personnes souffrant de douleurs chroniques ou de pathologies limitant
            l’activité physique. Ce programme permet aux médecins généralistes et spécialistes
            d’orienter leurs patients vers une activité physique adaptée et sécurisée, encadrée par
            des professionnels formés au sport-santé, dont les masseurs-kinésithérapeutes.
          </p>

          <p>Grâce à cette labellisation, nous proposons :</p>
          <p>• une évaluation personnalisée de vos capacités physiques, bilan.</p>
          <p>• un accompagnement progressif et adapté à vos objectifs ;</p>
          <p>• des séances intégrant renforcement, mobilité, respiration et réassurance ;</p>
          <p>
            • un suivi permettant de retrouver confiance dans le mouvement et de réduire les
            douleurs chroniques.
          </p>

          <p>Le dispositif Prescri’Mouv s’adresse notamment :</p>
          <p>
            • aux personnes présentant des douleurs chroniques (lombalgies, cervicalgies, troubles
            musculo-squelettiques…) ;
          </p>
          <p>
            • aux patients atteints d’affection longue durée, diabète obésité, cancers, maladies
            respiratoires, maladies cardio vasculaires…
          </p>
          <p>
            • à toute personne souhaitant reprendre une activité physique de manière sécurisée et
            encadrée.
          </p>

          <p>Pour plus d’informations sur le dispositif sport-santé Prescri’Mouv :</p>
          <p>
            <a href="https://www.prescrimouv.fr" target="_blank" rel="noreferrer">
              https://www.prescrimouv.fr
            </a>
          </p>

          <p>
            Notre équipe vous accompagne pour retrouver un mouvement confortable, durable et adapté
            à votre quotidien.
          </p>
        </div>

        <div id="kine-specialites" className="kine-info-block">
          <p className="kine-section-title">Spécialités du cabinet</p>

          <figure className="kine-inline-photo kine-specialites-photo-right">
            <Image
              className="kine-inline-photo-image"
              src={withBasePath("/images/photoskine/4.webp")}
              alt="Spécialités du cabinet de kinésithérapie"
              width={3024}
              height={4032}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </figure>

          <p>
            <strong>
              <u>Pelvi-périnéologie – Femmes & Hommes</u>
            </strong>
          </p>
          <p>Prise en charge spécialisée des troubles du périnée :</p>
          <p>• Incontinence urinaire</p>
          <p>• Troubles de la statique pelvienne</p>
          <p>• Douleurs pelviennes</p>
          <p>• Rééducation après accouchement ou chirurgie</p>

          <p>
            <strong>
              <u>Cancérologie du sein</u>
            </strong>
          </p>
          <p>Accompagnement spécifique avant, pendant et après les traitements :</p>
          <p>• Récupération post-opératoire</p>
          <p>• Prévention des adhérences</p>
          <p>• Mobilité de l’épaule</p>
          <p>• Gestion des douleurs et cicatrices</p>
          <p>• Drainage lymphatique si nécessaire</p>

          <p>
            <strong>
              <u>Fasciite plantaire</u>
            </strong>
          </p>
          <p>Traitement complet comprenant :</p>
          <p>• Travail manuel</p>
          <p>• Étirements spécifiques</p>
          <p>• Ondes de choc</p>
          <p>• Correction gestuelle et conseils chaussures</p>

          <p>
            <strong>
              <u>Rééducation de la femme enceinte</u>
            </strong>
          </p>
          <p>Séances adaptées durant la grossesse :</p>
          <p>• Douleurs lombaires, sciatiques</p>
          <p>• Préparation à l’accouchement</p>
          <p>• Mobilité du bassin</p>
          <p>• Exercices de respiration et de relaxation</p>

          <figure className="kine-inline-photo-left kine-nourrisson-photo">
            <Image
              className="kine-inline-photo-left-image"
              src={withBasePath("/images/photoskine/3.webp")}
              alt="Rééducation du nourrisson"
              width={3024}
              height={4032}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </figure>

          <p>
            <strong>
              <u>Rééducation du nourrisson</u>
            </strong>
          </p>
          <p>Prise en charge douce et sécurisée :</p>
          <p>• Bronchiolite (désencombrement respiratoire) Participation au réseau de garde.</p>
          <p>• Plagiocéphalies</p>
          <p>• Troubles de la motricité</p>
          <p>• Conseils pour le quotidien et le positionnement</p>

          <p>
            <strong>
              <u>École du dos</u>
            </strong>
          </p>
          <p>École du Dos Mail14</p>
          <p>
            <a href="https://www.ecoledudos.org/" target="_blank" rel="noreferrer">
              https://www.ecoledudos.org/
            </a>
          </p>
          <p>Programme pédagogique et pratique Ecole du dos Mail 14 La Rochelle</p>
          <p>• Apprentissage des bons gestes</p>
          <p>• Renforcement doux</p>
          <p>Gymnastique ballon et travail sur disque d’air.</p>
          <p>• Prévention des douleurs</p>
          <p>• Amélioration posturale</p>

          <p>
            <strong>
              <u>Pilates et Yoga thérapeutique</u>
            </strong>
          </p>
          <p>Cours individuels, collectifs ou intégrés au suivi :</p>
          <p>• Renforcement profond</p>
          <p>• Amélioration de la posture</p>
          <p>• Mobilité articulaire</p>
          <p>• Gestion du stress et du souffle</p>
        </div>

        <div id="kine-equipements" className="kine-info-block">
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
          <p>
            Outil de rééducation innovant basé sur le mouvement fonctionnel et le travail en 3D.
          </p>

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
            Plateforme technologique dédiée au renforcement, à la rééducation fonctionnelle et au
            bilan du mouvement, pour la motricité, l’équilibre, la proprioception et la gestion des
            douleurs.
          </p>
          <p>Ces technologies permettent une prise en charge plus précise, efficace et motivante.</p>
        </div>
      </section>
    </main>
  );
}
