"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { CheckCircle, Star, Shield, Leaf, Heart, Users } from "lucide-react";
import FinalCTA from "@/components/sections/final-cta";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    desc: "Nous travaillons avec transparence et honnêteté. Ce que nous promettons, nous le livrons — toujours.",
  },
  {
    icon: Leaf,
    title: "Responsabilité environnementale",
    desc: "Nos produits sont certifiés écologiques. Votre maison propre, la planète préservée.",
  },
  {
    icon: Heart,
    title: "Harmonie",
    desc: "Nous apportons soin et respect dans chaque espace que nous nettoyons, résidentiel ou commercial.",
  },
  {
    icon: Users,
    title: "Créativité",
    desc: "Chaque espace est unique. Nous adaptons nos solutions à vos besoins spécifiques.",
  },
];

const stats = [
  { value: "3+", label: "Ans d'expérience", sub: "Fondé à Sorel-Tracy" },
  { value: "200+", label: "Clients servis", sub: "Résidentiel & commercial" },
  { value: "40+", label: "Avis Google", sub: "Note moyenne 4.9/5" },
  { value: "100%", label: "Satisfaction", sub: "On revient sinon" },
];

const team = [
  {
    name: "Équipe résidentielle",
    desc: "Spécialisée dans le nettoyage de maisons, condos et appartements. Discrète, efficace et de confiance.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
  },
  {
    name: "Équipe commerciale",
    desc: "Formée pour les bureaux, commerces et espaces industriels. Interventions hors heures pour ne pas perturber vos activités.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80",
  },
  {
    name: "Équipe spécialisée",
    desc: "Post-construction, milieux médicaux, déménagements — pour les projets qui demandent une expertise particulière.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
  },
];

const certifications = [
  "Équipe assurée et vérifiée",
  "Produits certifiés écologiques",
  "Formation aux normes sanitaires",
  "Vérification des antécédents",
  "Équipement professionnel",
  "Intervention disponible 7j/7",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">

        {/* Hero */}
        <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden bg-navy">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #BFDBFE 1px, transparent 1px), linear-gradient(to bottom, #BFDBFE 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                À propos de nous
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
                Un service sur mesure,{" "}
                <span className="text-accent">pour chaque espace</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Entretiens Ménager KC est une entreprise d&apos;entretien professionnel fondée à Sorel-Tracy,
                au service de Montréal et de la Montérégie depuis plus de 3 ans.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                  Notre histoire
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-5">
                  Nés à Sorel-Tracy, au service de toute la région
                </h2>
                <p className="text-secondary text-base leading-relaxed mb-5">
                  Entretiens Ménager KC a été fondé avec une vision simple : offrir un service d&apos;entretien
                  professionnel, fiable et écologique, accessible à tous — particuliers, entreprises, cliniques et industries.
                </p>
                <p className="text-secondary text-base leading-relaxed mb-5">
                  En quelques années, nous sommes devenus un partenaire de confiance pour plus de 200 clients
                  à travers Montréal et la Montérégie. Notre croissance repose sur une chose : la satisfaction
                  à 100% de chacun de nos clients.
                </p>
                <p className="text-secondary text-base leading-relaxed mb-8">
                  Chaque membre de notre équipe est formé, assuré et soumis à une vérification des antécédents.
                  Nous utilisons exclusivement des produits certifiés écologiques pour protéger votre santé
                  et l&apos;environnement.
                </p>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((c) => (
                    <div key={c} className="flex items-center gap-2 bg-white border border-card-border rounded-full px-4 py-2 text-sm">
                      <CheckCircle size={14} className="text-accent flex-shrink-0" />
                      <span className="text-navy font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img
                    src="/images/team/equipe-kc-4k.jpeg"
                    alt="Équipe professionnelle Entretiens Ménager KC"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white border border-card-border rounded-2xl p-4 shadow-xl flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">4.9/5</div>
                    <div className="text-secondary text-xs">40+ avis Google</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-muted">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-white border border-card-border rounded-2xl p-6 text-center"
                >
                  <div className="font-heading font-black text-4xl text-navy mb-1">
                    {s.value.replace("+", "")}<span className="text-accent">{s.value.includes("+") ? "+" : s.value.includes("%") ? "" : ""}</span>
                  </div>
                  <div className="font-semibold text-navy text-sm mt-1">{s.label}</div>
                  <div className="text-secondary text-xs mt-1">{s.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Nos valeurs
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight">
                Ce qui nous guide chaque jour
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-white border border-card-border rounded-2xl p-6 hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <v.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">{v.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="max-w-6xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Notre équipe
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-4">
                Des professionnels formés et de confiance
              </h2>
              <p className="text-secondary text-base max-w-xl mx-auto">
                Chaque membre de notre équipe est sélectionné avec soin, formé à nos standards et vérifié pour votre tranquillité d&apos;esprit.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-white border border-card-border rounded-2xl overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-navy mb-2">{t.name}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FinalCTA />

      </main>
      <Footer />
    </>
  );
}
