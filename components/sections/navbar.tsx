"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Avis clients", href: "/#temoignages" },
  { label: "À propos", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-card-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Entretiens Ménager KC"
            className="h-20 w-auto object-contain block"
            style={{ maxHeight: "80px" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-secondary hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:5145916202"
            className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-navy transition-colors"
          >
            <Phone size={14} />
            (514) 591-6202
          </a>
          <a
            href="/#soumission"
            className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-accent-hover hover:-translate-y-0.5 transition-all hover:shadow-md hover:shadow-accent/30"
          >
            Soumission gratuite
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} className="text-navy" /> : <Menu size={20} className="text-navy" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-card-border px-5 pb-5 pt-2"
          >
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-secondary hover:text-navy py-2 border-b border-muted transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#soumission"
                onClick={() => setOpen(false)}
                className="mt-2 bg-accent text-white px-4 py-3 rounded-xl text-sm font-bold text-center hover:bg-accent-hover transition-colors"
              >
                Soumission gratuite
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
