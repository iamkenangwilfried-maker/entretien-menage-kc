import type { Metadata } from "next";
import AvisClient from "./AvisClient";

export const metadata: Metadata = {
  title: "Votre avis — Entretiens Ménager KC",
  description: "Partagez votre expérience avec l'équipe Entretiens Ménager KC.",
  robots: { index: false, follow: false },
};

export default function AvisPage() {
  return <AvisClient />;
}
