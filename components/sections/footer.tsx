import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const services = [
  { label: "Nettoyage résidentiel",   href: "/services/nettoyage-residentiel" },
  { label: "Nettoyage commercial",    href: "/services/nettoyage-commercial" },
  { label: "Post-construction",       href: "/services/post-construction" },
  { label: "Environnements médicaux", href: "/services/environnement-medical" },
  { label: "Nettoyage industriel",    href: "/services/nettoyage-industriel" },
  { label: "Avant déménagement",      href: "/services/avant-demenagement" },
];

const links = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Avis clients", href: "/#temoignages" },
  { label: "FAQ", href: "/#faq" },
  { label: "À propos", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Entretiens Ménager KC" className="h-20 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Service d&apos;entretien ménager professionnel à Montréal et en Montérégie.
              Un service sur mesure, pour chaque espace.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a href="https://web.facebook.com/profile.php?id=61558823489780" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/entretien_menager_kc/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/15145916202" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors flex items-center justify-center" title="WhatsApp">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@entretien_kc" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center" title="TikTok">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@entretien_kc" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 transition-colors flex items-center justify-center" title="YouTube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/entretiens-menagers-kc/" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0077B5] transition-colors flex items-center justify-center" title="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/EntretienKC" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-black transition-colors flex items-center justify-center" title="X (Twitter)">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.snapchat.com/add/kc_globalservic" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-400 transition-colors flex items-center justify-center" title="Snapchat">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.019.006 1.16.234 2.573-.043.195-.045.63.094.033.442-1.06.689-2.221.718-2.605.72.005.14.012.28.02.42.063 1.044-.263 2.091-1.065 2.755-.847.706-2.014.927-2.92.27a4.607 4.607 0 01-.265-.198c-.18-.143-.388-.308-.63-.455-.516-.312-1.135-.502-1.805-.502-.67 0-1.29.19-1.806.502-.241.147-.45.312-.63.455a4.607 4.607 0 01-.265.198c-.905.658-2.073.436-2.92-.27-.803-.664-1.128-1.71-1.065-2.755.008-.14.015-.28.02-.42-.384-.002-1.545-.031-2.605-.72-.597-.348-.162-.487.033-.442 1.412.277 2.554.049 2.573.043-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.647 1.069 10.99.793 12.206.793z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/40">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/40">
              Navigation
            </h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-white/40">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:5145916202" className="text-white/70 hover:text-white text-sm transition-colors">
                  (514) 591-6202
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:kcglobalservice.inc@gmail.com" className="text-white/70 hover:text-white text-sm transition-colors break-all">
                  kcglobalservice.inc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  2800 Boul. de Tracy<br />
                  Sorel-Tracy, QC J3R 5K5
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Lun–Dim : 8h–18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Entretiens Ménager KC. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Politique de confidentialité
            </a>
            <a href="/terms-of-service" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
