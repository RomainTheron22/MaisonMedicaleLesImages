export const metadata = {
  title: "Politique de confidentialité | Maison Médicale Les Images",
  description: "Politique de confidentialité du site Maison Médicale Les Images.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Politique de confidentialité</h1>

        <div className="kine-info-block">
          <p className="kine-section-title">Responsable du traitement</p>
          <p>
            Responsable du traitement : [A RENSEIGNER]
            <br />
            Adresse : [A RENSEIGNER]
            <br />
            E-mail de contact : [A RENSEIGNER]
            <br />
            Telephone : [A RENSEIGNER]
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Données collectées</p>
          <p>
            Le site peut collecter les categories de donnees suivantes : [A RENSEIGNER]
            (exemples : donnees d'identite, coordonnees, donnees de navigation, etc.).
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Finalités du traitement</p>
          <p>
            Les donnees sont traitees pour les finalites suivantes : [A RENSEIGNER] (exemples :
            gestion des demandes, prise de rendez-vous, amelioration du service, securite du site).
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Base légale</p>
          <p>
            La base legale des traitements est : [A RENSEIGNER] (exemples : consentement, execution
            d'un contrat, obligation legale, interet legitime).
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Destinataires des données</p>
          <p>
            Les donnees sont destinees a : [A RENSEIGNER] (services internes, sous-traitants
            habilites, prestataires techniques, etc.), dans la limite necessaire a leurs missions.
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Durée de conservation</p>
          <p>
            Les donnees sont conservees pendant la duree strictement necessaire aux finalites
            poursuivies et conformement aux obligations legales applicables : [A RENSEIGNER].
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Droits des utilisateurs</p>
          <p>
            Conformement a la reglementation, vous disposez d'un droit d'acces, de rectification,
            d'effacement, d'opposition, de limitation et de portabilite de vos donnees.
          </p>
          <p>
            Pour exercer vos droits, contactez : [A RENSEIGNER].
            <br />
            En cas de difficulte, vous pouvez egalement introduire une reclamation aupres de la
            CNIL.
          </p>
        </div>
      </section>
    </main>
  );
}
