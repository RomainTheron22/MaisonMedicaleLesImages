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
            Responsable du traitement : Maison Médicale Les Images
            <br />
            Adresse : 2 Rue Ernest Renan, 88000 Épinal
            <br />
            E-mail de contact : [A RENSEIGNER]
            <br />
            Telephone : [A RENSEIGNER]
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Données collectées</p>
          <p>
            Le site peut collecter les catégories de données suivantes : <br />
              - données de navigation (adresse IP, type de navigateur, informations techniques nécessaires au fonctionnement du site) <br />
              - données liées à l'utilisation de la carte Google Maps (cookies Google).
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Finalités du traitement</p>
          <p>
            Les données sont traitées pour les finalités suivantes : <br />
              - assurer le bon fonctionnement et la sécurité du site<br />
              - permettre l'affichage de la carte Google Maps<br />
              - améliorer l'expérience utilisateur.

          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Base légale</p>
          <p>
            La base légale des traitements est :<br />
              - l'intérêt légitime du responsable de traitement pour le fonctionnement du site <br />
              - le consentement de l'utilisateur pour le dépôt de cookies liés à Google Maps. 

          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Destinataires des données</p>
          <p>
            Les données sont destinées :<br />
              - au prestataire d'hébergement du site<br />
              - à Google dans le cadre de l'affichage de la carte Google Maps.

          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Durée de conservation</p>
          <p>
            - les données de navigation sont conservées pour une durée maximale de 13 mois <br />
            - les journaux techniques sont conservés pour une durée limitée conforme aux obligations légales

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
