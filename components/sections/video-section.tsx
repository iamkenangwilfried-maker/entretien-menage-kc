"use client";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-14 sm:py-20 bg-navy">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Notre équipe en action
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
            Découvrez notre façon de travailler
          </h2>
          <p className="text-white/60 text-base mt-3 max-w-lg mx-auto">
            Professionnalisme, rigueur et soin du détail — à chaque intervention, partout en Montérégie et à Montréal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer shadow-2xl"
        >
          {/* Thumbnail */}
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&q=80"
            alt="Équipe Entretiens Ménager KC au travail"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-300"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

          {/* Play button */}
          <a
            href="https://www.youtube.com/@entretien_kc"
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-5"
          >
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-accent/50">
              <Play size={30} className="text-white fill-white ml-1" />
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2.5">
              <Youtube size={16} className="text-white" />
              <span className="text-white font-semibold text-sm">Voir nos vidéos sur YouTube</span>
            </div>
          </a>
        </motion.div>

        {/* Stats under video */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {[
            { value: "200+", label: "Clients satisfaits" },
            { value: "4.9/5", label: "Note Google" },
            { value: "7j/7", label: "Disponibilité" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-black text-2xl sm:text-3xl text-white">{s.value}</div>
              <div className="text-white/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
