"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    category: "Résidentiel",
    before: { url: "/images/realisations/residentiel-avant.png", label: "Avant" },
    after:  { url: "/images/realisations/residentiel-apres.png",  label: "Après"  },
    title: "Cuisine résidentielle — Montréal",
    desc: "Nettoyage en profondeur : plan de travail, électroménagers, carrelage. Résultat impeccable en 3h.",
  },
  {
    id: 2,
    category: "Commercial",
    before: { url: "/images/realisations/commercial-avant.png", label: "Avant" },
    after:  { url: "/images/realisations/commercial-apres.png",  label: "Après"  },
    title: "Bureaux commerciaux — Longueuil",
    desc: "Entretien hebdomadaire. Espaces de travail, cuisine, toilettes, hall d'entrée.",
  },
  {
    id: 3,
    category: "Post-construction",
    before: { url: "/images/realisations/construction-avant.png", label: "Avant" },
    after:  { url: "/images/realisations/construction-apres.png",  label: "Après"  },
    title: "Post-rénovation — Varennes",
    desc: "Poussière de plâtre, résidus de chantier éliminés. Prêt à habiter dès le lendemain.",
  },
  {
    id: 4,
    category: "Médical",
    before: { url: "/images/realisations/medical-avant.png", label: "Avant" },
    after:  { url: "/images/realisations/medical-apres.png",  label: "Après"  },
    title: "Clinique médicale — Sorel-Tracy",
    desc: "Désinfection complète avec produits homologués Santé Canada. Traçabilité fournie.",
  },
  {
    id: 5,
    category: "Industriel",
    before: { url: "/images/realisations/industriel-avant.png", label: "Avant" },
    after:  { url: "/images/realisations/industriel-apres.png",  label: "Après"  },
    title: "Entrepôt logistique — Montérégie",
    desc: "Intervention pendant l'arrêt de production. Sols, allées, zones de stockage — tout remis à neuf.",
  },
  {
    id: 6,
    category: "Déménagement",
    before: { url: "/images/realisations/demenagement-avant.png", label: "Avant" },
    after:  { url: "/images/realisations/demenagement-apres.png",  label: "Après"  },
    title: "Appartement déménagement — Longueuil",
    desc: "Nettoyage complet avant remise des clés. Dépôt récupéré intégralement.",
  },
];

const categoryColors: Record<string, string> = {
  Résidentiel: "bg-blue-100 text-blue-700",
  Commercial: "bg-purple-100 text-purple-700",
  "Post-construction": "bg-orange-100 text-orange-700",
  Médical: "bg-green-100 text-green-700",
  Industriel: "bg-cyan-100 text-cyan-700",
  Déménagement: "bg-rose-100 text-rose-700",
};

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [view, setView] = useState<"before" | "after">("after");

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section id="realisations" className="py-14 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Nos réalisations
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy leading-tight max-w-2xl mx-auto">
            Des résultats qui{" "}
            <span className="text-gradient-blue">parlent d&apos;eux-mêmes</span>
          </h2>
          <p className="mt-4 text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Avant / Après — voyez la différence par vous-même.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-center">
          {/* Main image */}
          <div className="relative">
            {/* Before/After toggle */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {(["before", "after"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    view === v
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white border border-card-border text-secondary hover:border-accent/40"
                  }`}
                >
                  {v === "before" ? "Avant" : "Après"}
                </button>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-card-border shadow-lg bg-navy">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${current}-${view}`}
                  src={view === "before" ? slide.before.url : slide.after.url}
                  alt={`${slide.title} — ${view === "before" ? "avant" : "après"}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>

              {/* Label overlay */}
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${view === "before" ? "bg-black/60 text-white" : "bg-accent text-white"}`}>
                {view === "before" ? "Avant" : "Après ✓"}
              </div>

              {/* Category badge */}
              <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold ${categoryColors[slide.category]}`}>
                {slide.category}
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft size={18} className="text-navy" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight size={18} className="text-navy" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-accent" : "w-2 bg-card-border"}`}
                />
              ))}
            </div>
          </div>

          {/* Side info */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className={`inline-flex text-xs font-bold px-3 py-1.5 rounded-full mb-3 ${categoryColors[slide.category]}`}>
                  {slide.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-navy mb-2">{slide.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6">{slide.desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(i)}
                  className={`rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                    i === current ? "border-accent" : "border-transparent opacity-60 hover:opacity-80"
                  }`}
                >
                  <img
                    src={s.after.url}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <a
              href="#soumission"
              className="flex items-center justify-center gap-2 bg-accent text-white w-full py-3.5 rounded-xl font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              Obtenir le même résultat →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
