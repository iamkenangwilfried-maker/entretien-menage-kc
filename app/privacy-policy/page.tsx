import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export const metadata = { title: "Politique de confidentialité — Entretiens Ménager KC" };

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-5 prose prose-sm">
          <h1 className="font-heading font-bold text-3xl text-navy mb-6">Politique de confidentialité</h1>
          <p className="text-secondary">Dernière mise à jour : 27 avril 2026</p>
          <p className="text-secondary mt-4">
            Entretiens Ménager KC respecte votre vie privée. Les informations collectées via notre formulaire (nom, téléphone, email) sont utilisées uniquement pour vous contacter et établir une soumission. Elles ne sont jamais vendues ni partagées avec des tiers.
          </p>
          <p className="text-secondary mt-4">
            Pour toute question, contactez-nous à : <a href="mailto:kcglobalservice.inc@gmail.com" className="text-accent">kcglobalservice.inc@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
