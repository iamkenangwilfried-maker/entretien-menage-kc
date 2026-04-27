"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  "Nettoyage résidentiel",
  "Nettoyage commercial",
  "Post-construction / Rénovation",
  "Environnement médical",
  "Nettoyage industriel",
  "Avant déménagement",
];

const zones = [
  "Montréal", "Sorel-Tracy", "Longueuil", "Brossard",
  "Saint-Hyacinthe", "Sainte-Julie", "Varennes",
  "Saint-Jean-sur-Richelieu", "Granby", "Autre",
];

const checks = [
  "Équipe assurée & vérifiée",
  "Produits certifiés écologiques",
  "Disponible 7j/7, 8h–18h",
  "Satisfaction 100% garantie",
];

function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ prenom: "", service: "", zone: "", telephone: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div id="soumission" className="bg-white rounded-2xl border border-card-border shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-navy to-[#1f6996] px-6 py-5 text-white">
        <h2 className="font-heading font-bold text-lg sm:text-xl mb-0.5">
          Obtenez votre soumission gratuite
        </h2>
        <p className="text-white/70 text-sm">Réponse garantie en moins d&apos;une heure · Sans engagement</p>
      </div>

      <div className="px-6 py-6">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-6 text-center gap-3"
          >
            <CheckCircle size={48} className="text-accent" />
            <h3 className="font-heading font-bold text-xl text-navy">Demande reçue !</h3>
            <p className="text-secondary text-sm max-w-xs">
              Merci <strong>{form.prenom}</strong> ! Notre équipe vous contacte dans moins d&apos;une heure au numéro fourni.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">Prénom</label>
                <input
                  type="text" required placeholder="Marie"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="w-full border border-card-border rounded-xl px-3 py-2.5 text-sm text-navy placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-background transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">Téléphone *</label>
                <input
                  type="tel" required placeholder="514 123-4567"
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  className="w-full border border-card-border rounded-xl px-3 py-2.5 text-sm text-navy placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-background transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">Courriel *</label>
              <input
                type="email" required placeholder="marie@exemple.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-card-border rounded-xl px-3 py-2.5 text-sm text-navy placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-background transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">Type de service</label>
              <select
                required value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-card-border rounded-xl px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-background transition-all"
              >
                <option value="">Sélectionner un service...</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wider">Votre ville</label>
              <select
                required value={form.zone}
                onChange={(e) => setForm({ ...form, zone: e.target.value })}
                className="w-full border border-card-border rounded-xl px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-background transition-all"
              >
                <option value="">Sélectionner une ville...</option>
                {zones.map((z) => <option key={z} value={z}>{z}</option>)}
              </select>
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
            >
              {loading ? (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <>Envoyer ma demande <ArrowRight size={15} /></>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="px-6 pb-5 flex flex-wrap gap-3">
        {["Soumission gratuite", "Sans engagement", "Réponse en 1h"].map((t) => (
          <div key={t} className="flex items-center gap-1.5 text-xs text-secondary">
            <CheckCircle size={13} className="text-accent" />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 pb-14 bg-background">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
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

      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Left — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white border border-card-border rounded-full px-4 py-1.5 text-xs sm:text-sm text-secondary font-medium shadow-sm mb-6"
            >
              <span className="w-2 h-2 flex-shrink-0 bg-accent rounded-full animate-pulse" />
              Service disponible 7j/7 · Montréal &amp; Montérégie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.1] tracking-tight mb-5"
            >
              Un espace propre,{" "}
              <span className="text-gradient-blue">sans lever</span>
              {" "}le petit doigt.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-secondary leading-relaxed mb-7"
            >
              Entretiens Ménager KC prend soin de votre espace avec{" "}
              <strong className="text-navy">professionnalisme, flexibilité et rigueur</strong>.
              Résidentiel, commercial, post-construction — on s&apos;occupe de tout.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href="#soumission"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-accent-hover transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                Soumission gratuite
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:5145916202"
                className="inline-flex items-center justify-center gap-2 bg-white border border-card-border text-navy px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-muted transition-all hover:-translate-y-0.5"
              >
                <Phone size={15} />
                (514) 591-6202
              </a>
            </motion.div>

            {/* Check items */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="grid grid-cols-2 gap-2 mb-8"
            >
              {checks.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-secondary">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-wrap items-center gap-4 text-sm text-secondary"
            >
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
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
