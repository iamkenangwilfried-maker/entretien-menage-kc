import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Home, Building2, HardHat, Stethoscope, Factory, Truck, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Services — Entretiens Ménager KC | Nettoyage Montréal & Montérégie",
  description: "Découvrez tous nos services de nettoyage : résidentiel, commercial, post-construction, médical, industriel et déménagement. Service disponible 7j/7.",
};

const services = [
  {
    icon: Home,
    title: "Nettoyage résidentiel",
    desc: "Votre maison mérite le meilleur soin. Notre équipe assure un nettoyage complet, méthodique et respectueux de vos espaces de vie.",
    features: [
      "Maisons unifamiliales, condos, appartements",
      "Nettoyage régulier (hebdo, bihebdo, mensuel)",
      "Nettoyage ponctuel / événementiel",
      "Cuisine, salles de bain, chambres, salon",
      "Produits écologiques certifiés",
      "Équipe vérifiée et assurée",
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: "Résidentiel",
  },
  {
    icon: Building2,
    title: "Nettoyage commercial",
    desc: "Un espace de travail propre booste la productivité et donne une image professionnelle à vos clients. On s'adapte à vos horaires.",
    features: [
      "Bureaux, espaces de coworking",
      "Commerces et boutiques",
      "Restaurants et cuisines",
      "Halls et zones communes",
      "Intervention soirs et week-ends",
      "Contrat d'entretien sur mesure",
    ],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    tag: "Commercial",
  },
  {
    icon: HardHat,
    title: "Post-construction & rénovation",
    desc: "Après les travaux, la vraie corvée commence. Notre équipe élimine poussière de plâtre, résidus de colle et débris pour que vous puissiez emménager sereinement.",
    features: [
      "Poussière de construction ultra-fine",
      "Nettoyage des vitres et miroirs post-travaux",
      "Élimination des résidus de colle et mastic",
      "Aspirateurs HEPA industriels",
      "Nettoyage des planchers (bois, céramique, vinyle)",
      "Rapport de nettoyage fourni",
    ],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    tag: "Post-construction",
  },
  {
    icon: Stethoscope,
    title: "Environnements médicaux",
    desc: "Cliniques, cabinets médicaux, laboratoires. Des protocoles stricts pour garantir des espaces stériles et conformes aux normes sanitaires.",
    features: [
      "Désinfectants homologués Santé Canada",
      "Protocoles de désinfection stricts",
      "Zones à haut risque et salles d'attente",
      "Équipe formée aux normes médicales",
      "Fréquence adaptée à votre activité",
      "Rapport de désinfection disponible",
    ],
    color: "bg-green-50",
    iconColor: "text-green-600",
    tag: "Médical",
  },
  {
    icon: Factory,
    title: "Nettoyage industriel",
    desc: "Entrepôts, usines, ateliers de production. Notre équipe est équipée et formée pour les environnements industriels exigeants.",
    features: [
      "Entrepôts et zones de stockage",
      "Ateliers et zones de production",
      "Quais de chargement",
      "Nettoyage haute pression si nécessaire",
      "Matériel industriel professionnel",
      "Planification selon vos opérations",
    ],
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
    tag: "Industriel",
  },
  {
    icon: Truck,
    title: "Avant déménagement",
    desc: "Vous quittez un logement ou en prenez possession ? Un nettoyage professionnel garantit la restitution de votre dépôt ou un accueil impeccable.",
    features: [
      "Logement vide ou à vider",
      "Nettoyage complet de chaque pièce",
      "Intérieur des armoires et réfrigérateur",
      "Nettoyage des vitres",
      "Récupération du dépôt de garantie",
      "Disponible à court préavis",
    ],
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    tag: "Déménagement",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Nos services
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-navy leading-tight mb-4">
              Un service adapté à chaque espace
            </h1>
            <p className="text-secondary text-lg max-w-xl mx-auto">
              Résidentiel ou commercial, régulier ou ponctuel — nous avons la solution qui correspond à votre situation.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 bg-white border border-card-border rounded-2xl overflow-hidden p-8`}
              >
                <div className="lg:w-[45%]">
                  <div className={`inline-flex items-center gap-2 ${s.color} ${s.iconColor} text-xs font-bold px-3 py-1.5 rounded-full mb-4`}>
                    <s.icon size={14} />
                    {s.tag}
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-navy mb-3">{s.title}</h2>
                  <p className="text-secondary text-sm leading-relaxed mb-6">{s.desc}</p>
                  <a
                    href="/#soumission"
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all hover:shadow-md hover:shadow-accent/30"
                  >
                    Demander un prix <ArrowRight size={14} />
                  </a>
                </div>
                <div className="lg:w-[55%]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-secondary">
                        <CheckCircle size={16} className="text-success mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
