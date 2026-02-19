import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Site de la Maison Médicale Les Images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
