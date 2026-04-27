"use client";
import { motion } from "framer-motion";
import { Truck, Clock, Phone } from "lucide-react";

const cities = [
  { name: "Montréal", primary: true },
  { name: "Sorel-Tracy", primary: true },
  { name: "Longueuil", primary: true },
  { name: "Brossard", primary: false },
  { name: "Laval", primary: false },
  { name: "Varennes", primary: false },
  { name: "Sainte-Julie", primary: false },
  { name: "Saint-Hyacinthe", primary: false },
  { name: "Saint-Jean-sur-Richelieu", primary: false },
  { name: "Granby", primary: false },
  { name: "Beloeil", primary: false },
  { name: "Chambly", primary: false },
];

export default function ServiceAreas() {
  return (
    <section id="zones" className="relative py-20 overflow-hidden">
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Zones desservies
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight mb-3">
            Nous intervenons partout à<br />
            Montréal &amp; en Montérégie
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Notre équipe mobile se déplace dans toute la grande région. Votre ville n&apos;est pas dans la liste ? Appelez-nous quand même.
          </p>
        </motion.div>

        {/* City pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 border text-sm font-medium transition-all cursor-default
                ${city.primary
                  ? "bg-accent/25 border-accent text-white"
                  : "bg-white/10 border-white/20 text-white/75 hover:bg-white/15"
                }`}
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${city.primary ? "bg-accent" : "bg-white/40"}`} />
              {city.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-accent/80 backdrop-blur-sm rounded-2xl p-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Truck size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Équipe mobile équipée</h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Nos équipes se déplacent avec tout le matériel nécessaire pour intervenir rapidement et efficacement, où que vous soyez.
            </p>
          </div>

          <div className="bg-accent/80 backdrop-blur-sm rounded-2xl p-6">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Clock size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-base mb-2">Horaires flexibles</h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Nous planifions nos interventions selon votre disponibilité, 7j/7 de 8h à 18h, pour minimiser les perturbations.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Votre ville n&apos;est pas dans la liste ?</h3>
              <p className="text-white/70 text-sm mb-4">
                Contactez-nous quand même — on s&apos;arrange pour vous.
              </p>
            </div>
            <a
              href="tel:5145916202"
              className="inline-flex items-center justify-center gap-2 bg-white text-navy font-bold text-sm px-5 py-3 rounded-xl hover:bg-accent hover:text-white transition-all hover:-translate-y-0.5"
            >
              <Phone size={15} />
              (514) 591-6202
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
