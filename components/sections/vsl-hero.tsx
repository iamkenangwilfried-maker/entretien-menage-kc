"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Phone, Star, CheckCircle } from "lucide-react";

const YT_ID = "DW9ZrOSCsbI";

const checks = [
  "Équipe assurée & vérifiée",
  "Produits certifiés écologiques",
  "Disponible 7j/7, 8h–18h",
  "Satisfaction 100% garantie",
];

export default function VSLHero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 pb-10 bg-background">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #BFDBFE 1px, transparent 1px),
            linear-gradient(to bottom, #BFDBFE 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        {/* Badge + Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-card-border rounded-full px-4 py-1.5 text-xs sm:text-sm text-secondary font-medium shadow-sm mb-5">
            <span className="w-2 h-2 flex-shrink-0 bg-accent rounded-full animate-pulse" />
            Service disponible 7j/7 · Montréal &amp; Montérégie
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.1] tracking-tight mb-4">
            Un espace propre,{" "}
            <span className="text-gradient-blue">sans lever</span>
            {" "}le petit doigt.
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            Entretiens Ménager KC prend soin de votre espace avec{" "}
            <strong className="text-navy">professionnalisme, flexibilité et rigueur</strong>.
            Résidentiel, commercial, post-construction — on s&apos;occupe de tout.
          </p>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-1.5 font-semibold text-navy">4.9/5</span>
            </div>
            <span className="text-secondary/30">·</span>
            <span>Plus de <strong className="text-navy">40 avis Google</strong></span>
            <span className="text-secondary/30">·</span>
            <span>Disponible <strong className="text-navy">lun–dim</strong></span>
          </div>
        </motion.div>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video mb-10 bg-navy"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Entretiens Ménager KC — comment on travaille"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              <img
                src="/images/vsl-thumbnail.jpeg"
                alt="Aperçu vidéo Entretiens Ménager KC"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 group"
              >
                <div className="absolute inset-0 bg-navy/40" />
                <div className="relative z-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-accent/50">
                  <Play size={30} className="text-white fill-white ml-1" />
                </div>
                <div className="relative z-10 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 text-white text-sm font-semibold">
                  Regardez comment on travaille
                </div>
              </button>
            </>
          )}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#soumission"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all w-full sm:w-auto"
          >
            Soumission gratuite
          </a>
          <a
            href="tel:5145916202"
            className="inline-flex items-center justify-center gap-2 bg-white border border-card-border text-navy px-8 py-4 rounded-full font-semibold text-sm hover:bg-muted hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <Phone size={15} />
            (514) 591-6202
          </a>
        </motion.div>

        {/* Check items */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {checks.map((c) => (
            <div key={c} className="flex items-center gap-2 text-sm text-secondary">
              <CheckCircle size={14} className="text-accent flex-shrink-0" />
              {c}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
