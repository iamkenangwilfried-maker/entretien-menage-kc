"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background image */}
          <img
            src="/images/realisations/industriel-apres.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy/80" />

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              Obtenez votre soumission gratuite<br className="hidden sm:block" /> dès aujourd&apos;hui
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-6">
              Faites confiance à notre équipe professionnelle pour un espace impeccable, partout à Montréal et en Montérégie.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-5 mb-8 text-white/80 text-sm">
              {["Soumission gratuite", "Service rapide", "Satisfaction garantie"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#soumission"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 transition-all"
              >
                Obtenez une soumission gratuite
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:5145916202"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                <Phone size={16} />
                (514) 591-6202
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
