import "./globals.css";
import Topbar from "./components/Topbar";
import Breadcrumbs from "./components/Breadcrumbs";

export const metadata = {
  title: "Maison Médicale Les Images",
  description: "Site de la Maison Médicale Les Images",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Topbar />
        <Breadcrumbs />
        {children}
      </body>
    </html>
  );
}
