import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Breadcrumbs from "./components/Breadcrumbs";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Site de la Maison Médicale Les Images",
  icons: {
    icon: `${BASE_PATH}/images/Logo_Onglet.png`,
    shortcut: `${BASE_PATH}/images/Logo_Onglet.png`,
    apple: `${BASE_PATH}/images/Logo_Onglet.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Topbar />
        <Breadcrumbs />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
