"use client";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <div className="max-w-5xl mx-auto px-5">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Contact
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-navy leading-tight mb-4">
              Parlons de votre projet
            </h1>
            <p className="text-secondary text-lg max-w-xl mx-auto">
              Remplissez le formulaire ou appelez-nous directement.
              Réponse garantie en moins de 2 heures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 space-y-5"
            >
              {[
                { icon: Phone, label: "Téléphone", value: "(514) 591-6202", href: "tel:5145916202" },
                { icon: Mail, label: "Email", value: "kcglobalservice.inc@gmail.com", href: "mailto:kcglobalservice.inc@gmail.com" },
                { icon: MapPin, label: "Adresse", value: "2800 Boul. de Tracy\nSorel-Tracy, QC J3R 5K5", href: null },
                { icon: Clock, label: "Horaires", value: "Lundi–Dimanche\n8h00 – 18h00", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 bg-white border border-card-border rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-navy font-semibold text-sm hover:text-accent transition-colors whitespace-pre-line">
                        {value}
                      </a>
                    ) : (
                      <p className="text-navy font-semibold text-sm whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right — GHL form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3"
            >
              <iframe
                src="https://link.nooviraai.com/widget/form/HzsyMl4PBCZ2b1myfjf4"
                style={{ width: "100%", border: "none", minHeight: "900px" }}
                title="Formulaire de contact"
              />
              <Script src="https://link.nooviraai.com/js/form_embed.js" strategy="afterInteractive" />
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
