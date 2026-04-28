"use client";
import Script from "next/script";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Réponse garantie en moins d'une heure",
  "Équipe assurée, vérifiée et formée",
  "Produits certifiés écologiques",
  "Disponible 7 jours sur 7",
  "Satisfaction 100% garantie ou on revient",
];

export default function QuickForm() {
  return (
    <section id="soumission" className="py-10 sm:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left — texte */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.6 }}
            className="pt-2"
          >
            <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Soumission gratuite
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-4">
              Un espace propre commence par{" "}
              <span className="text-gradient-blue">une simple demande</span>
            </h2>
            <p className="text-secondary text-base leading-relaxed mb-8">
              Remplissez le formulaire et recevez votre soumission personnalisée
              en moins d&apos;une heure. Aucun engagement, aucun frais caché.
            </p>

            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-secondary">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — formulaire GHL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              src="https://link.nooviraai.com/widget/form/HzsyMl4PBCZ2b1myfjf4"
              style={{ width: "100%", border: "none", minHeight: "800px" }}
              
              title="Formulaire de soumission gratuite"
            />
            <Script src="https://link.nooviraai.com/js/form_embed.js" strategy="afterInteractive" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
