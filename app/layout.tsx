import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entretiens Ménager KC | Service de nettoyage Montréal & Montérégie",
  description:
    "Service d'entretien ménager professionnel à Montréal et en Montérégie. Nettoyage résidentiel, commercial, post-construction et plus. Disponible 7j/7. Obtenez votre soumission gratuite.",
  keywords:
    "entretien ménager Montréal, nettoyage résidentiel Montérégie, service nettoyage Sorel-Tracy, nettoyage commercial Montréal, entretien ménager KC",
  openGraph: {
    title: "Entretiens Ménager KC | Un service sur mesure",
    description:
      "Service de nettoyage professionnel à Montréal et Montérégie. Résidentiel, commercial, post-construction. Disponible 7j/7.",
    type: "website",
    locale: "fr_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
