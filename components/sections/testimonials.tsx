"use client";
import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Entretiens KC a transformé notre espace de travail. Leur équipe est professionnelle et méticuleuse. Nous sommes impressionnés par leur souci du détail et leur engagement envers la propreté. Je recommande fortement leurs services.",
    name: "Vanessa Tremblay",
    role: "Directrice des Opérations",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    text: "Nous sommes très satisfaits de la qualité d'entretien de notre bureau. Malgré nos horaires compliqués, ils ont accepté de se déplacer aux heures qui nous conviennent. Très réceptifs à nos demandes !",
    name: "Brad Arnaud",
    role: "Responsable immobilier",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    text: "L'équipe d'Entretiens KC est incroyable ! Ils sont toujours prêts à aller au-delà de nos attentes. Leur professionnalisme et leur souci du détail sont inégalés. Nos employés apprécient vraiment la propreté.",
    name: "Sophie Gagnon",
    role: "DRH, Gagnon & Fils",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    text: "Excellent service du début à la fin. Le nettoyage après nos rénovations était impeccable — on aurait dit que la maison sortait tout juste de construction. Merci à toute l'équipe !",
    name: "Martin Dubois",
    role: "Propriétaire résidentiel, Montréal",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
  },
  {
    text: "J'ai fait appel à eux pour un nettoyage avant déménagement. Résultat parfait — j'ai récupéré mon dépôt en entier. Le propriétaire était impressionné. Je les recommande sans hésitation.",
    name: "Émilie Côté",
    role: "Locataire, Longueuil",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
  },
  {
    text: "Service ponctuel, équipe sympathique et résultats vraiment au-delà de mes attentes. Notre clinique est maintenant entretenue chaque semaine par KC. On ne changerait pour rien au monde.",
    name: "Dr. Patrick Lavoie",
    role: "Médecin, Sorel-Tracy",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
  },
  {
    text: "Prix compétitif, qualité de service excellente. J'utilise leur service biweekly depuis 8 mois et je n'ai jamais été déçue. Toujours ponctuels, toujours souriants.",
    name: "Isabelle Roy",
    role: "Résidentiel, Brossard",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
  },
  {
    text: "On a fait appel à eux pour un événement corporatif. La salle était immaculée à notre arrivée. Leur rapidité d'exécution et leur efficacité nous ont vraiment impressionnés.",
    name: "Thomas Bergeron",
    role: "Organisateur d'événements",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
  },
  {
    text: "Après plusieurs mauvaises expériences avec d'autres compagnies, KC a été une vraie révélation. Communication claire, travail soigné et suivi après prestation. Bravo !",
    name: "Nathalie Pelletier",
    role: "Propriétaire, Saint-Hyacinthe",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    rating: 5,
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-14 sm:py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center max-w-xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Avis clients
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-navy leading-tight">
            Ce que disent nos{" "}
            <span className="text-gradient-blue">clients satisfaits</span>
          </h2>
          <p className="mt-4 text-secondary text-base">
            Plus de 40 avis vérifiés sur Google. 100% de clients satisfaits.
          </p>
        </motion.div>

        <div
          className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[720px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={col1} duration={16} />
          <TestimonialsColumn
            testimonials={col2}
            className="hidden md:block"
            duration={20}
          />
          <TestimonialsColumn
            testimonials={col3}
            className="hidden lg:block"
            duration={18}
          />
        </div>
      </div>
    </section>
  );
}
