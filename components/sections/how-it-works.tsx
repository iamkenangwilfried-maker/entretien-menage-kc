"use client";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ClipboardList, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    glowColor: "cyan" as const,
    title: "Vous faites votre demande",
    desc: "Remplissez le formulaire en ligne ou appelez-nous directement. Précisez le type de nettoyage, la superficie et vos disponibilités.",
    bullets: [
      "Formulaire rapide — moins de 2 minutes",
      "Ou appelez le (514) 591-6202",
      "Disponible 7j/7, 8h–18h",
      "Réponse garantie en moins d'une heure",
    ],
    tag: "Étape 1",
    tagColor: "bg-accent/10 text-accent",
  },
  {
    step: "02",
    icon: CalendarCheck,
    glowColor: "green" as const,
    title: "On planifie ensemble",
    desc: "Notre équipe vous contacte pour valider les détails, établir une soumission gratuite et fixer une date qui vous convient.",
    bullets: [
      "Soumission 100% gratuite et sans engagement",
      "Horaires flexibles — soirs et weekends possibles",
      "Équipe assignée à votre dossier",
      "Confirmation par SMS ou email",
    ],
    tag: "Étape 2",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    step: "03",
    icon: Sparkles,
    glowColor: "blue" as const,
    title: "On s'occupe du reste",
    desc: "Le jour J, notre équipe se présente à l'heure, avec le matériel et les produits écologiques. Vous n'avez rien à faire — on gère tout.",
    bullets: [
      "Produits certifiés écologiques et sans danger",
      "Équipe assurée et vérifiée",
      "Satisfaction garantie ou on revient",
      "Rapport de nettoyage à la fin",
    ],
    tag: "Étape 3",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-14 sm:py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Comment ça marche
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy leading-tight max-w-2xl mx-auto">
            Simple. Rapide.{" "}
            <span className="text-gradient-blue">Impeccable.</span>
          </h2>
          <p className="mt-4 text-secondary text-base sm:text-lg max-w-xl mx-auto">
            De votre demande à un espace parfaitement propre — 3 étapes suffisent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
            >
              <GlowCard glowColor={s.glowColor} className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading font-black text-6xl text-navy/8 leading-none">
                    {s.step}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${s.tagColor}`}>
                    {s.tag}
                  </span>
                </div>
                <s.icon size={32} className="text-accent mb-4" />
                <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-navy/80">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
