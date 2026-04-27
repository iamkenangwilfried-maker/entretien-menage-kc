"use client";
import Script from "next/script";

export default function QuickForm() {
  return (
    <section id="soumission" className="py-10 sm:py-14 bg-background">
      <div className="max-w-5xl mx-auto px-5">
        <iframe
          src="https://link.nooviraai.com/widget/form/HzsyMl4PBCZ2b1myfjf4"
          style={{ width: "100%", border: "none", minHeight: "640px" }}
          scrolling="no"
          title="Formulaire de soumission gratuite"
        />
        <Script src="https://link.nooviraai.com/js/form_embed.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}
