"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Combien coûte un nettoyage résidentiel ?",
    a: "Le tarif varie selon la superficie, le type de nettoyage et la fréquence. Nous offrons des soumissions gratuites et sans engagement. Remplissez le formulaire ou appelez-nous au (514) 591-6202 pour obtenir un prix exact en moins de 2h.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Nous utilisons exclusivement des produits certifiés écologiques, biodégradables et sans danger pour les enfants, les animaux de compagnie et les personnes sensibles. Pour les environnements médicaux, nous utilisons des désinfectants homologués Santé Canada.",
  },
  {
    q: "Êtes-vous disponibles les week-ends et le soir ?",
    a: "Oui. Nous sommes disponibles du lundi au dimanche, de 8h à 18h. Pour les clients commerciaux, nous pouvons nous adapter à des horaires en dehors des heures d'ouverture pour minimiser les perturbations.",
  },
  {
    q: "Faut-il être présent lors du nettoyage ?",
    a: "Non, ce n'est pas obligatoire. Plusieurs de nos clients nous confient une clé ou un code d'accès. Notre équipe est entièrement vérifiée, assurée et digne de confiance. Vous recevez une confirmation à notre arrivée et à notre départ.",
  },
  {
    q: "Intervenez-vous hors de Montréal et Sorel-Tracy ?",
    a: "Nous couvrons l'ensemble de la grande région de Montréal et la Montérégie : Longueuil, Brossard, Varennes, Sainte-Julie, Saint-Hyacinthe, Saint-Jean-sur-Richelieu, Granby et plus encore. Contactez-nous pour confirmer votre secteur.",
  },
  {
    q: "Que se passe-t-il si je ne suis pas satisfait ?",
    a: "Votre satisfaction est garantie à 100%. Si vous n'êtes pas entièrement satisfait du résultat, nous revenons sans frais supplémentaires pour corriger le problème. C'est notre engagement envers chaque client.",
  },
  {
    q: "Combien de temps dure un nettoyage typique ?",
    a: "La durée dépend de la superficie et de l'état de l'espace. En moyenne : 2–3h pour un appartement 3½, 3–5h pour une maison unifamiliale, et variable pour le commercial. Nous vous donnons une estimation précise lors de la soumission.",
  },
  {
    q: "Proposez-vous des contrats d'entretien régulier ?",
    a: "Oui ! Nous proposons des forfaits hebdomadaires, bihebdomadaires et mensuels avec des tarifs préférentiels. C'est la formule choisie par la majorité de nos clients. Plus de contrainte à repenser à réserver — on s'en occupe automatiquement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 sm:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

            {/* Left */}
            <div className="lg:w-[38%]">
              <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                FAQ
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-3">
                Questions fréquentes
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full mb-5" />
              <p className="text-secondary text-sm leading-relaxed mb-6">
                Vous ne trouvez pas ce que vous cherchez ? On est là pour vous répondre.
              </p>
              <a
                href="#soumission"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-accent-hover transition-colors"
              >
                <MessageCircle size={15} />
                Obtenir ma soumission gratuite
              </a>
            </div>

            {/* Right — accordion */}
            <div className="lg:w-[58%] space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.04 + i * 0.04 }}
                  className="border border-card-border rounded-xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-muted/60 transition-colors"
                  >
                    <span className="font-semibold text-navy text-sm leading-snug">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                      {open === i ? (
                        <Minus size={14} className="text-accent" />
                      ) : (
                        <Plus size={14} className="text-accent" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-secondary text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
