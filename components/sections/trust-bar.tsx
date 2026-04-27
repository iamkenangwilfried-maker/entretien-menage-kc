"use client";
import { motion } from "framer-motion";
import { Calendar, ShieldCheck, Leaf, UserCheck } from "lucide-react";

const badges = [
  { icon: Calendar, label: "Disponible 7j/7", sub: "Lundi au dimanche" },
  { icon: ShieldCheck, label: "Satisfaction garantie", sub: "100% remboursé sinon" },
  { icon: Leaf, label: "Produits écologiques", sub: "Certifiés & sécuritaires" },
  { icon: UserCheck, label: "Équipe vérifiée", sub: "Assurée & fiable" },
];

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-10 bg-navy">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <b.icon size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-snug">{b.label}</div>
                <div className="text-white/50 text-xs mt-0.5">{b.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
