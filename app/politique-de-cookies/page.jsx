export const metadata = {
  title: "Politique de cookies | Maison Médicale Les Images",
  description: "Informations sur l'utilisation des cookies du site Maison Médicale Les Images.",
};

export default function PolitiqueDeCookiesPage() {
  return (
    <main className="kine-page">
      <section className="kine-panel">
        <h1 className="kine-title">Politique de cookies</h1>

        <div className="kine-info-block">
          <p className="kine-section-title">Qu'est-ce qu'un cookie ?</p>
          <p>
            Un cookie est un petit fichier texte enregistré sur votre appareil lors de la visite
            d'un site web. Il permet au site de mémoriser certaines informations de navigation.
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Cookies utilisés sur ce site</p>
          <p>
            Ce site utilise des cookies, notamment pour l'affichage de la carte Google Maps.
          </p>
        </div>

        <div className="kine-info-block">
          <p className="kine-section-title">Votre choix</p>
          <p>
            Vous pouvez accepter ou refuser l'utilisation des cookies via la bannière affichée en
            bas de page.
          </p>
          <p>
            Le choix est enregistré localement dans votre navigateur et peut être modifié en
            supprimant les données de navigation de votre navigateur.
          </p>
        </div>
      </section>
    </main>
  );
}
