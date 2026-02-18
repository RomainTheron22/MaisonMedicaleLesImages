export const metadata = {
  title: "Accès | Maison Médicale Les Images",
  description: "Informations d'accès à la Maison Médicale Les Images.",
};

export default function AccesPage() {
  return (
    <main className="access-page">
      <section className="access-panel">
        <h1 className="access-title">Accès</h1>

        <div className="access-info">
          <p>
            <strong>Adresse :</strong> 2 Rue Ernest Renan, 88000 Épinal
          </p>
          <p>Accès aux personnes à mobilité réduite</p>
          <p>Parking 30 places</p>
          <p>Bus : arrêt “Ferme de l’obus” ligne 2 et ligne 1</p>
          <p>
            <a href="http://www.imaginelebus.com/" target="_blank" rel="noreferrer">
              http://www.imaginelebus.com/
            </a>
          </p>
        </div>

        <div className="map-embed access-map">
          <iframe
            title="Plan Maison Médicale Les Images"
            src="https://www.google.com/maps?q=2%20Rue%20Ernest%20Renan%2C%2088000%20Epinal&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
