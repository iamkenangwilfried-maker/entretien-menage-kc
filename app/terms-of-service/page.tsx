import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export const metadata = { title: "Conditions d'utilisation — Entretiens Ménager KC" };

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-5 prose prose-sm">
          <h1 className="font-heading font-bold text-3xl text-navy mb-6">Conditions d&apos;utilisation</h1>
          <p className="text-secondary">Dernière mise à jour : 27 avril 2026</p>
          <p className="text-secondary mt-4">
            En utilisant ce site, vous acceptez nos conditions d&apos;utilisation. Le contenu de ce site est fourni à titre informatif. Entretiens Ménager KC se réserve le droit de modifier ses tarifs, services et disponibilités sans préavis.
          </p>
          <p className="text-secondary mt-4">
            Pour toute question : <a href="mailto:kcglobalservice.inc@gmail.com" className="text-accent">kcglobalservice.inc@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
