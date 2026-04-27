export interface ServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  iconColor: string;
  bgColor: string;
  howItWorks: { step: string; title: string; desc: string }[];
  gallery: { url: string; alt: string; caption: string; quote: string; clientName: string; clientCity: string }[];
  faqs: { q: string; a: string }[];
  testimonials: { text: string; name: string; role: string; image: string }[];
}

export const servicesData: ServicePage[] = [
  {
    slug: "nettoyage-residentiel",
    title: "Nettoyage résidentiel",
    shortTitle: "Résidentiel",
    tagline: "Votre maison mérite le meilleur soin",
    description:
      "Maisons, condos, appartements — notre équipe assure un nettoyage complet, méthodique et respectueux de votre espace de vie. Régulier ou ponctuel, on s'adapte à vos besoins.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1527515637462-cff94edd56f9?w=800&auto=format&fit=crop&q=80",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    howItWorks: [
      {
        step: "01",
        title: "Évaluation de votre espace",
        desc: "On note la superficie, le nombre de pièces, vos exigences particulières et la fréquence souhaitée pour établir une soumission précise.",
      },
      {
        step: "02",
        title: "Planification & confirmation",
        desc: "Nous fixons ensemble une date et un horaire. Vous recevez une confirmation par SMS. Nul besoin d'être présent.",
      },
      {
        step: "03",
        title: "Nettoyage complet & rapport",
        desc: "L'équipe se présente à l'heure, avec tout le matériel. Fin de prestation : rapport envoyé et garantie de satisfaction activée.",
      },
    ],
    gallery: [
      {
        url: "/images/realisations/residentiel-avant.jpg",
        alt: "Cuisine résidentielle avant nettoyage — Montréal",
        caption: "Avant — Cuisine Montréal",
        quote: "Ma cuisine était dans un état déplorable après les fêtes. L'équipe KC est intervenue le lendemain matin. Plan de travail, électroménagers, carrelage : tout avait l'air neuf en moins de 3 heures.",
        clientName: "Isabelle Roy",
        clientCity: "Montréal",
      },
      {
        url: "/images/realisations/residentiel-apres.jpg",
        alt: "Cuisine résidentielle après nettoyage professionnel — Montréal",
        caption: "Après — Cuisine Montréal",
        quote: "L'équipe de KC a transformé ma cuisine en moins de 2 heures. Des recoins que je n'avais pas nettoyés depuis des années sont maintenant impeccables. Je ne changerais pour rien au monde.",
        clientName: "Isabelle Roy",
        clientCity: "Montréal",
      },
    ],
    faqs: [
      { q: "Quelle est la fréquence recommandée pour un appartement ?", a: "Pour un appartement de taille moyenne avec 1-2 personnes, nous recommandons un nettoyage bihebdomadaire. Pour les familles avec enfants ou animaux, le passage hebdomadaire est idéal." },
      { q: "Dois-je fournir les produits et le matériel ?", a: "Non. Nous apportons tout le nécessaire : produits certifiés écologiques, aspirateurs haute performance, chiffons microfibre, et tous les accessoires spécialisés." },
      { q: "Que se passe-t-il si je ne suis pas à la maison ?", a: "Aucun problème. Beaucoup de clients nous confient une clé ou un code. Nous confirmons notre arrivée et notre départ par SMS. Toute notre équipe est vérifiée et assurée." },
    ],
    testimonials: [
      { text: "L'équipe arrive toujours à l'heure et le résultat est impeccable. Ma maison n'a jamais été aussi propre depuis des années.", name: "Isabelle Roy", role: "Cliente résidentielle, Brossard", image: "https://randomuser.me/api/portraits/women/33.jpg" },
      { text: "Service biweekly depuis 6 mois et je n'ai jamais été déçue. Ils font même attention aux petits détails que j'oubliais moi-même.", name: "Nathalie Pelletier", role: "Cliente résidentielle, Saint-Hyacinthe", image: "https://randomuser.me/api/portraits/women/51.jpg" },
    ],
  },
  {
    slug: "nettoyage-commercial",
    title: "Nettoyage commercial",
    shortTitle: "Commercial",
    tagline: "Un espace de travail propre, une équipe plus productive",
    description:
      "Bureaux, commerces, restaurants, espaces de coworking. Nous intervenons hors des heures d'ouverture pour ne pas perturber votre activité.",
    heroImage:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&auto=format&fit=crop&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    howItWorks: [
      { step: "01", title: "Audit de vos locaux", desc: "Visite ou consultation pour évaluer la superficie, les zones à traiter, la fréquence et les contraintes horaires de votre activité." },
      { step: "02", title: "Planification sans perturbation", desc: "Nous planifions les passages en dehors de vos heures de travail : tôt le matin, le soir ou le week-end selon vos préférences." },
      { step: "03", title: "Entretien régulier & suivi", desc: "Passage à fréquence fixe, rapport de nettoyage, interlocuteur dédié. Votre espace est toujours impeccable avant l'arrivée de vos équipes." },
    ],
    gallery: [
      {
        url: "/images/realisations/commercial-avant.jpg",
        alt: "Bureaux commerciaux avant nettoyage — Longueuil",
        caption: "Avant — Bureaux Longueuil",
        quote: "Nos locaux accumulaient la poussière depuis la dernière prestataire qui avait lâché sans préavis. KC est intervenu en urgence le soir même pour une remise en état complète.",
        clientName: "Brad Arnaud",
        clientCity: "Longueuil",
      },
      {
        url: "/images/realisations/commercial-apres.jpg",
        alt: "Bureaux commerciaux après entretien professionnel KC",
        caption: "Après — Bureaux Longueuil",
        quote: "Nos bureaux sont nettoyés chaque semaine. L'équipe est discrète, efficace et toujours ponctuelle. Le résultat parle de lui-même — nos clients le remarquent à chaque visite.",
        clientName: "Brad Arnaud",
        clientCity: "Longueuil",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80",
        alt: "Espace de travail propre et organisé",
        caption: "Open space — Longueuil",
        quote: "On fait appel à KC pour nos locaux depuis 1 an. Qualité constante et communication impeccable. Les employés remarquent la différence.",
        clientName: "Thomas Bergeron",
        clientCity: "Longueuil",
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
        alt: "Salle de conférence nettoyée",
        caption: "Salle de réunion — Brossard",
        quote: "Intervention le soir après 18h, sans perturber notre activité. Le matin, tout est impeccable. Un vrai professionnalisme.",
        clientName: "Véronique Landry",
        clientCity: "Brossard",
      },
      {
        url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&auto=format&fit=crop&q=80",
        alt: "Hall d'entrée commercial propre",
        caption: "Hall d'accueil — Sorel-Tracy",
        quote: "Notre hall d'entrée donne une première impression à nos clients. Depuis KC, cette impression est toujours excellente.",
        clientName: "Marc Pelletier",
        clientCity: "Sorel-Tracy",
      },
    ],
    faqs: [
      { q: "Intervenez-vous le soir et le week-end ?", a: "Oui, c'est même notre mode de fonctionnement préféré pour les commerces. On s'adapte entièrement à vos horaires pour ne jamais perturber votre activité." },
      { q: "Proposez-vous des contrats annuels ?", a: "Oui. Nous proposons des contrats flexibles : mensuel, trimestriel ou annuel avec des tarifs préférentiels pour les clients réguliers." },
      { q: "Êtes-vous équipés pour les grandes surfaces ?", a: "Oui. Notre équipement inclut des autolaveuses et des aspirateurs industriels adaptés aux grandes surfaces commerciales." },
    ],
    testimonials: [
      { text: "Nos bureaux sont nettoyés chaque semaine. L'équipe est discrète, efficace et toujours ponctuelle. Parfait pour notre environnement de travail.", name: "Brad Arnaud", role: "Responsable immobilier, Montréal", image: "https://randomuser.me/api/portraits/men/32.jpg" },
      { text: "On fait appel à KC pour nos locaux commerciaux depuis 1 an. Qualité constante et communication impeccable.", name: "Thomas Bergeron", role: "Gérant, Saint-Jean-sur-Richelieu", image: "https://randomuser.me/api/portraits/men/12.jpg" },
    ],
  },
  {
    slug: "post-construction",
    title: "Nettoyage post-construction",
    shortTitle: "Post-construction",
    tagline: "Après les travaux, on repart de zéro",
    description:
      "Poussière de plâtre, résidus de colle, éclats de bois, taches de peinture — notre équipe élimine tout avec un équipement industriel adapté.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&auto=format&fit=crop&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
    howItWorks: [
      { step: "01", title: "Évaluation post-travaux", desc: "On évalue l'ampleur du chantier : type de travaux, superficie, matériaux utilisés, état des surfaces, délai souhaité." },
      { step: "02", title: "Nettoyage en profondeur", desc: "Aspiration HEPA, dépose des résidus de construction, nettoyage des vitres, désinfection des surfaces. Du haut vers le bas, pièce par pièce." },
      { step: "03", title: "Remise en état finale", desc: "Votre espace est prêt à être habité ou occupé. Rapport de nettoyage fourni, satisfaction garantie." },
    ],
    gallery: [
      {
        url: "/images/realisations/construction-avant.jpg",
        alt: "Espace après travaux avant nettoyage post-construction",
        caption: "Avant — Chantier Varennes",
        quote: "Après notre rénovation complète, l'état de la maison était catastrophique. Poussière de plâtre partout, résidus de colle, traces de peinture sur les vitres. KC est arrivé le lendemain matin.",
        clientName: "Martin Dubois",
        clientCity: "Varennes",
      },
      {
        url: "/images/realisations/construction-apres.jpg",
        alt: "Espace propre après nettoyage post-construction KC",
        caption: "Après — Chantier Varennes",
        quote: "KC a remis la maison à neuf en une journée. Aucune trace des travaux, tout brillait. On a pu emménager le soir même. Un travail remarquable !",
        clientName: "Martin Dubois",
        clientCity: "Varennes",
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80",
        alt: "Nettoyage résidus construction immeuble neuf",
        caption: "Immeuble neuf — Sorel-Tracy",
        quote: "Construction livrée vendredi, KC est intervenu le samedi. Le lundi, on pouvait accueillir les équipes. Service ultra réactif.",
        clientName: "Émilie Côté",
        clientCity: "Longueuil",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
        alt: "Maison neuve après nettoyage post-construction",
        caption: "Maison neuve — Sorel-Tracy",
        quote: "On a pu emménager le lendemain du nettoyage. Tout était parfait, même les vitres et les armoires. Je recommande à 100%.",
        clientName: "François Lapointe",
        clientCity: "Varennes",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&auto=format&fit=crop&q=80",
        alt: "Cuisine rénovée propre et prête",
        caption: "Rénovation cuisine — Longueuil",
        quote: "Résultat impeccable après des travaux de cuisine. Poussière, résidus, taches de peinture — tout disparu. Très professionnel.",
        clientName: "Caroline Bédard",
        clientCity: "Brossard",
      },
    ],
    faqs: [
      { q: "Combien de temps après la fin des travaux peut-on vous contacter ?", a: "Idéalement 24-48h après la fin des gros travaux. On peut aussi intervenir pendant le chantier pour des nettoyages intermédiaires." },
      { q: "Avez-vous l'équipement pour les grandes constructions ?", a: "Oui. Aspirateurs HEPA industriels, autolaveuses, équipement de nettoyage haute pression si nécessaire." },
      { q: "Nettoyez-vous aussi les conduits de ventilation ?", a: "Nous nettoyons les bouches de ventilation accessibles. Pour le nettoyage complet des conduits, nous pouvons vous référer un partenaire spécialisé." },
    ],
    testimonials: [
      { text: "Après notre rénovation complète, l'état de la maison était catastrophique. KC l'a remise à neuf en une journée. Incroyable !", name: "Martin Dubois", role: "Propriétaire, Montréal", image: "https://randomuser.me/api/portraits/men/55.jpg" },
      { text: "Nettoyage post-construction rapide et très professionnel. On a pu emménager le lendemain.", name: "Émilie Côté", role: "Propriétaire, Longueuil", image: "https://randomuser.me/api/portraits/women/21.jpg" },
    ],
  },
  {
    slug: "environnement-medical",
    title: "Environnements médicaux",
    shortTitle: "Médical",
    tagline: "Propreté clinique, protocoles stricts",
    description:
      "Cliniques, cabinets, laboratoires, pharmacies. Des désinfectants homologués Santé Canada et des protocoles adaptés aux exigences sanitaires les plus strictes.",
    heroImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&auto=format&fit=crop&q=80",
    cardImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    howItWorks: [
      { step: "01", title: "Évaluation des zones à risque", desc: "Cartographie des zones à traiter : salles d'examen, salle d'attente, toilettes, zones communes. Identification des protocoles requis." },
      { step: "02", title: "Application des protocoles", desc: "Désinfectants homologués, matériel à usage unique pour les zones sensibles, respect de l'ordre de nettoyage pour éviter les contaminations croisées." },
      { step: "03", title: "Rapport & traçabilité", desc: "Fiche de désinfection complète fournie après chaque intervention. Traçabilité des produits utilisés disponible sur demande." },
    ],
    gallery: [
      {
        url: "/images/realisations/medical-avant.jpg",
        alt: "Clinique médicale avant désinfection KC",
        caption: "Avant — Clinique Sorel-Tracy",
        quote: "Notre clinique avait un prestataire peu rigoureux. Les zones critiques n'étaient pas traitées correctement. Nous avons contacté KC après avoir vu leur travail chez un confrère.",
        clientName: "Dr. Patrick Lavoie",
        clientCity: "Sorel-Tracy",
      },
      {
        url: "/images/realisations/medical-apres.jpg",
        alt: "Clinique médicale après désinfection complète KC",
        caption: "Après — Clinique Sorel-Tracy",
        quote: "Notre clinique est entretenue par KC depuis 8 mois. Protocoles rigoureux, rapport de désinfection fourni à chaque passage. Exactement ce que la réglementation exige.",
        clientName: "Dr. Patrick Lavoie",
        clientCity: "Sorel-Tracy",
      },
      {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&auto=format&fit=crop&q=80",
        alt: "Salle d'attente médicale propre",
        caption: "Salle d'attente — Longueuil",
        quote: "La salle d'attente est toujours impeccable. Nos patients remarquent la propreté dès l'entrée. Excellent investissement.",
        clientName: "Dr. Julie Audet",
        clientCity: "Brossard",
      },
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80",
        alt: "Cabinet médical nettoyé et désinfecté",
        caption: "Cabinet — Longueuil",
        quote: "Rapport de désinfection détaillé à chaque passage. Exactement ce dont nous avons besoin pour notre certification.",
        clientName: "Dr. Marc Rousseau",
        clientCity: "Longueuil",
      },
    ],
    faqs: [
      { q: "Vos produits sont-ils homologués pour les milieux médicaux ?", a: "Oui. Nous utilisons uniquement des désinfectants homologués par Santé Canada, efficaces contre les bactéries, virus et champignons." },
      { q: "Pouvez-vous intervenir pendant les heures d'ouverture de la clinique ?", a: "Nous recommandons les interventions hors des heures d'ouverture pour des raisons d'hygiène et de confidentialité. Nous nous adaptons à vos contraintes opérationnelles." },
      { q: "Fournissez-vous un rapport de désinfection ?", a: "Oui. Une fiche de désinfection détaillée est remise après chaque intervention : zones traitées, produits utilisés, concentrations, durée d'action." },
    ],
    testimonials: [
      { text: "Notre clinique est entretenue par KC depuis 8 mois. Protocoles rigoureux, rapport de désinfection fourni à chaque passage. Très professionnel.", name: "Dr. Patrick Lavoie", role: "Médecin, Sorel-Tracy", image: "https://randomuser.me/api/portraits/men/78.jpg" },
      { text: "Ils comprennent les exigences d'un environnement médical. Service fiable et discret, exactement ce dont nous avons besoin.", name: "Vanessa Tremblay", role: "Directrice des Opérations, Clinique Montréal", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    ],
  },
  {
    slug: "nettoyage-industriel",
    title: "Nettoyage industriel",
    shortTitle: "Industriel",
    tagline: "Entrepôts, usines et ateliers — on gère tout",
    description:
      "Environnements exigeants, grandes surfaces, équipements lourds. Notre équipe est formée et équipée pour les défis du nettoyage industriel.",
    heroImage: "/images/realisations/industriel-apres.jpg",
    cardImage: "/images/realisations/industriel-apres.jpg",
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
    howItWorks: [
      { step: "01", title: "Analyse de l'environnement", desc: "Type d'activité industrielle, zones prioritaires, contraintes de production, accès, équipements sensibles à protéger." },
      { step: "02", title: "Plan d'intervention", desc: "Planification en coordination avec votre responsable opérationnel pour ne pas interrompre la production. Équipement adapté déployé." },
      { step: "03", title: "Nettoyage & vérification", desc: "Intervention selon le plan défini. Vérification systématique avant remise des clés. Rapport d'intervention fourni." },
    ],
    gallery: [
      {
        url: "/images/realisations/industriel-avant.jpg",
        alt: "Entrepôt industriel avant nettoyage KC",
        caption: "Avant — Entrepôt Montérégie",
        quote: "L'entrepôt n'avait pas été nettoyé en profondeur depuis 2 ans. Huile de machine, poussière industrielle, sols collants. KC a pris en charge l'intervention complète pendant notre arrêt de production.",
        clientName: "René Gauthier",
        clientCity: "Saint-Hyacinthe",
      },
      {
        url: "/images/realisations/industriel-apres.jpg",
        alt: "Entrepôt industriel après nettoyage professionnel KC",
        caption: "Après — Entrepôt Montérégie",
        quote: "Résultat impressionnant. Les sols sont dégraissés et brillants, les allées sont dégagées et sécurisées. La production a repris dans un environnement de travail complètement transformé.",
        clientName: "René Gauthier",
        clientCity: "Saint-Hyacinthe",
      },

    ],
    faqs: [
      { q: "Votre équipe est-elle formée pour les environnements industriels ?", a: "Oui. Notre équipe reçoit une formation spécifique aux risques industriels : produits chimiques, hauteur, équipements sous tension, zones restreintes." },
      { q: "Disposez-vous d'équipement haute pression ?", a: "Oui, sur demande. Nettoyage haute pression pour les sols, les quais, les structures métalliques et les façades." },
      { q: "Pouvez-vous intervenir pendant un arrêt de production ?", a: "C'est souvent le meilleur moment pour une intervention complète. Nous pouvons coordonner nos équipes pour maximiser l'utilisation de vos fenêtres d'arrêt." },
    ],
    testimonials: [
      { text: "Service industriel très professionnel. Ils comprennent les contraintes d'une usine et s'adaptent parfaitement à nos cycles de production.", name: "Sophie Gagnon", role: "DRH, Entreprise industrielle, Montérégie", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    ],
  },
  {
    slug: "avant-demenagement",
    title: "Nettoyage avant déménagement",
    shortTitle: "Déménagement",
    tagline: "Récupérez votre dépôt. Accueillez votre nouveau foyer.",
    description:
      "Vous quittez un logement ou vous prenez possession d'un espace ? Notre équipe le remet à neuf pour garantir la restitution de votre dépôt ou un emménagement impeccable.",
    heroImage: "/images/realisations/demenagement-apres.jpg",
    cardImage: "/images/realisations/demenagement-apres.jpg",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    howItWorks: [
      { step: "01", title: "Prise en charge rapide", desc: "Disponible à court préavis. Dites-nous la date de remise des clés — on planifie l'intervention pour que tout soit prêt à temps." },
      { step: "02", title: "Nettoyage complet de A à Z", desc: "Intérieur des armoires, électroménagers, salles de bain, cuisine, vitres, balcon. Pas un coin oublié." },
      { step: "03", title: "Résultat garanti", desc: "Votre logement est rendu dans un état impeccable. Notre garantie : si le propriétaire n'est pas satisfait, on revient corriger sans frais." },
    ],
    gallery: [
      {
        url: "/images/realisations/demenagement-avant.jpg",
        alt: "Appartement avant nettoyage déménagement KC",
        caption: "Avant — Appartement Longueuil",
        quote: "L'appartement était dans un état difficile après 3 ans d'occupation. Murs marqués, cuisine grasse, salle de bain calcaire. On avait peur de perdre le dépôt.",
        clientName: "Émilie Côté",
        clientCity: "Longueuil",
      },
      {
        url: "/images/realisations/demenagement-apres.jpg",
        alt: "Appartement après nettoyage complet avant remise des clés",
        caption: "Après — Appartement Longueuil",
        quote: "KC a tout transformé en une journée. J'ai récupéré mon dépôt en entier — le propriétaire n'en revenait pas. Service rapide, résultat parfait.",
        clientName: "Émilie Côté",
        clientCity: "Longueuil",
      },
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&auto=format&fit=crop&q=80",
        alt: "Cuisine appartement propre après déménagement",
        caption: "Cuisine — Montréal",
        quote: "Cuisine remise à neuf en 2 heures. Intérieur du four, réfrigérateur, armoires — tout impeccable. Dépôt récupéré à 100%.",
        clientName: "Patricia Ouellet",
        clientCity: "Montréal",
      },
      {
        url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&auto=format&fit=crop&q=80",
        alt: "Appartement vide propre prêt remise clés",
        caption: "Résultat final — Sorel-Tracy",
        quote: "Appartement rendu dans un état parfait. Même le propriétaire n'en revenait pas. Je recommande KC pour tout déménagement.",
        clientName: "Simon Nadeau",
        clientCity: "Sorel-Tracy",
      },
    ],
    faqs: [
      { q: "Pouvez-vous intervenir à court préavis (48h) ?", a: "Oui, dans la grande majorité des cas. Contactez-nous au (514) 591-6202 et nous ferons notre possible pour nous organiser." },
      { q: "Nettoyez-vous l'intérieur des électroménagers ?", a: "Oui. Intérieur du réfrigérateur, four, hotte, lave-vaisselle — tout est inclus dans notre forfait déménagement." },
      { q: "Que faire si le propriétaire n'est pas satisfait ?", a: "Nous retournons corriger les points identifiés, sans frais supplémentaires. C'est notre engagement déménagement." },
    ],
    testimonials: [
      { text: "J'ai fait appel à eux pour un nettoyage avant déménagement. Résultat parfait — j'ai récupéré mon dépôt en entier !", name: "Émilie Côté", role: "Locataire, Longueuil", image: "https://randomuser.me/api/portraits/women/21.jpg" },
      { text: "Service rapide, disponible en 48h, résultat impeccable. Mon propriétaire était bluffé.", name: "Isabelle Roy", role: "Locataire, Brossard", image: "https://randomuser.me/api/portraits/women/33.jpg" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicesData.find((s) => s.slug === slug);
}
