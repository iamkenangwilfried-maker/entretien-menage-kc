"use client";
import { motion } from "framer-motion";
import { Home, Building2, HardHat, Stethoscope, Factory, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    slug: "nettoyage-residentiel",
    icon: Home,
    title: "Nettoyage résidentiel",
    desc: "Maisons, condos, appartements. Régulier ou ponctuel, notre équipe s'adapte à vos besoins et à votre rythme de vie.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    slug: "nettoyage-commercial",
    icon: Building2,
    title: "Nettoyage commercial",
    desc: "Bureaux, commerces, restaurants. On intervient hors des heures ouvrables pour ne jamais perturber votre activité.",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&auto=format&fit=crop&q=80",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    slug: "post-construction",
    icon: HardHat,
    title: "Post-construction",
    desc: "Poussière de plâtre, résidus de colle, éclats de bois — on élimine tout avec un équipement industriel adapté.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    slug: "environnement-medical",
    icon: Stethoscope,
    title: "Environnements médicaux",
    desc: "Cliniques, cabinets, laboratoires. Désinfectants homologués Santé Canada, protocoles rigoureux et traçabilité complète.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    slug: "nettoyage-industriel",
    icon: Factory,
    title: "Nettoyage industriel",
    desc: "Entrepôts, usines, ateliers. Équipe formée, matériel industriel, interventions planifiées selon vos cycles de production.",
    image: "/images/realisations/industriel-apres.jpg",
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    slug: "avant-demenagement",
    icon: Truck,
    title: "Avant déménagement",
    desc: "Récupérez votre dépôt ou prenez possession d'un logement impeccable. Disponible à court préavis, résultat garanti.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&auto=format&fit=crop&q=80",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Nos services
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy leading-tight max-w-2xl mx-auto">
            Un service sur mesure,{" "}
            <span className="text-gradient-blue">pour chaque espace</span>
          </h2>
          <p className="mt-4 text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Peu importe le type d&apos;espace, notre équipe s&apos;adapte avec professionnalisme et rigueur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group bg-white border border-card-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 ${s.bgColor} ${s.iconColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                  <s.icon size={12} />
                  {s.title.split(" ")[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-navy text-lg mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-5">{s.desc}</p>
                <a
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all"
                >
                  En savoir plus <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
