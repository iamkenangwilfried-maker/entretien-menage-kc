import { servicesData, getServiceBySlug } from "@/lib/services-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import ServiceAreas from "@/components/sections/service-areas";
import QuickForm from "@/components/sections/quick-form";
import FinalCTA from "@/components/sections/final-cta";
import { ArrowRight, CheckCircle, Star, Phone, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} — Entretiens Ménager KC | Montréal & Montérégie`,
    description: s.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-0 overflow-hidden">
          <div className="relative h-[420px] sm:h-[500px] w-full">
            <img
              src={service.heroImage}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-5xl mx-auto px-5 w-full">
                <a href="/services" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors">
                  <ArrowLeft size={14} /> Tous les services
                </a>
                <div className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${service.bgColor} ${service.iconColor}`}>
                  {service.shortTitle}
                </div>
                <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-tight mb-4 max-w-2xl">
                  {service.title}
                </h1>
                <p className="text-white/80 text-lg mb-8 max-w-xl">{service.tagline}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#soumission"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-accent/30">
                    Soumission gratuite <ArrowRight size={15} />
                  </a>
                  <a href="tel:5145916202"
                    className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/25 transition-colors">
                    <Phone size={15} /> (514) 591-6202
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DESCRIPTION ──────────────────────────────────────────────── */}
        <section className="py-14 bg-white border-b border-card-border">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-secondary text-lg leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-xl border border-card-border">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_,i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-sm text-secondary"><strong className="text-navy">4.9/5</strong> · Plus de 40 avis Google vérifiés</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Satisfaction 100% garantie","Équipe assurée & vérifiée","Produits certifiés écologiques","Disponible 7j/7, 8h–18h","Réponse en moins d'une heure","Aucun engagement requis"].map((f) => (
                  <div key={f} className="flex items-start gap-2 p-3 bg-muted rounded-xl">
                    <CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-navy font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 bg-muted">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Comment ça marche
              </div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight">
                Simple, rapide et sans stress
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.howItWorks.map((step) => (
                <div key={step.step} className="bg-white border border-card-border rounded-2xl p-7">
                  <span className="font-black text-5xl text-navy/8 leading-none block mb-4">{step.step}</span>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RÉALISATIONS — alternating image + quote ─────────────────── */}
        <section className="py-14 sm:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-5 mb-10 text-center">
            <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Nos réalisations
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight">
              {service.shortTitle} — résultats réels
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {service.gallery.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch border-b border-card-border last:border-b-0`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[360px] relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/70 to-transparent">
                    <span className="text-white text-xs font-semibold">{item.caption}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className={`w-full lg:w-1/2 flex items-center p-8 sm:p-12 ${i % 2 === 0 ? "bg-white" : "bg-muted"}`}>
                  <div>
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, s) => <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-navy text-lg leading-relaxed italic mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="font-bold text-accent text-sm">{item.clientName.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">{item.clientName}</p>
                        <p className="text-xs text-secondary">{item.clientCity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FORM — same as homepage ───────────────────────────────────── */}
        <QuickForm />

        {/* ── TESTIMONIALS — same structure as homepage ─────────────────── */}
        <Testimonials />

        {/* ── SERVICE AREAS — same as homepage ─────────────────────────── */}
        <ServiceAreas />

        {/* ── FAQ — same structure as homepage ─────────────────────────── */}
        <FAQ />

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <FinalCTA />

      </main>
      <Footer />
    </>
  );
}
