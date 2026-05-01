"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ── À remplacer une fois le lien Google Review KC obtenu ──
const GOOGLE_REVIEW_URL = "LIEN_GOOGLE_REVIEW_KC";

type PageState = "rating" | "positive" | "negative" | "thankyou";

const STAR_HINTS = [
  "Très insatisfait 😞",
  "Insatisfait 😕",
  "Moyen 😐",
  "Satisfait 😊",
  "Excellent ! 🤩",
];

export default function AvisClient() {
  const [pageState, setPageState] = useState<PageState>("rating");
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [countdownDone, setCountdownDone] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Identifiants contact passés via URL par le Trigger Link GHL
  // ex: /demande-avis?phone=5145916202&name=Marie
  const [contactPhone, setContactPhone] = useState("");
  const [contactName, setContactName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const phone = params.get("phone") ?? "";
    const urlName = params.get("name") ?? "";
    setContactPhone(phone);
    setContactName(urlName);
    if (urlName) setName(urlName);
  }, []);

  // Countdown quand état positif
  useEffect(() => {
    if (pageState !== "positive") return;
    setCountdown(3);
    setCountdownDone(false);
    let count = 3;
    timerRef.current = setInterval(() => {
      count--;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(timerRef.current!);
        setCountdownDone(true);
        window.open(GOOGLE_REVIEW_URL, "_blank");
      }
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [pageState]);

  const selectRating = (val: number) => {
    setSelected(val);
    setTimeout(() => {
      setPageState(val >= 4 ? "positive" : "negative");
    }, 450);
  };

  const submitNegative = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating: selected,
          comment,
          name,
          phone: contactPhone,   // identifiant contact GHL (passé via URL)
          contactName: contactName || name,
        }),
      });
    } catch {
      // Silently fail — the team gets notified via GHL webhook if configured
    }
    setPageState("thankyou");
    setSubmitting(false);
  };

  const displayVal = hovered || selected;

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">

      {/* Background photo équipe */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/team/equipe-kc-4k.jpeg"
          alt=""
          fill
          className="object-cover object-top"
          style={{ filter: "brightness(0.40) saturate(0.75)" }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(31,105,150,0.30) 0%, rgba(26,26,46,0.50) 60%, rgba(26,26,46,0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center">

        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <Image
            src="/logo.png"
            alt="Entretiens Ménager KC"
            width={180}
            height={60}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)", height: "52px", width: "auto" }}
          />
          <span
            className="text-[11px] font-semibold tracking-[2.5px] uppercase"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Montérégie · Montréal
          </span>
        </div>

        {/* Card */}
        <div
          className="w-full rounded-3xl text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15)",
            padding: "44px 36px 36px",
          }}
        >
          {/* Barre bleue animée */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, #1f6996, #3a9fd6, #1f6996)",
              backgroundSize: "200% auto",
              animation: "shimmer 3s linear infinite",
            }}
          />

          {/* ── STATE : Étoiles ── */}
          {pageState === "rating" && (
            <div style={{ animation: "fadeUp 0.35s ease" }}>
              <h1 className="text-[22px] font-extrabold leading-snug mb-2" style={{ color: "#0C1A33" }}>
                Comment s&apos;est passé votre service&nbsp;?
              </h1>
              <p className="text-sm mb-8" style={{ color: "#888", lineHeight: "1.65" }}>
                Votre avis nous aide à nous améliorer<br />et à mieux vous servir.
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-2 mb-3">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => selectRating(val)}
                    onMouseEnter={() => setHovered(val)}
                    onMouseLeave={() => setHovered(0)}
                    className="text-[46px] leading-none transition-transform duration-100 cursor-pointer border-none bg-transparent p-0"
                    style={{
                      color: val <= displayVal ? "#f9a825" : "#e0e0e0",
                      transform: val === hovered ? "scale(1.2)" : "scale(1)",
                    }}
                    aria-label={`${val} étoile${val > 1 ? "s" : ""}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <p
                className="text-xs font-semibold min-h-[20px]"
                style={{ color: "#bbb", transition: "color 0.2s" }}
              >
                {displayVal ? STAR_HINTS[displayVal - 1] : "Touchez une étoile pour noter"}
              </p>
            </div>
          )}

          {/* ── STATE : Positif (4-5⭐) ── */}
          {pageState === "positive" && (
            <div style={{ animation: "fadeUp 0.35s ease" }}>
              <div className="text-5xl mb-3">⭐</div>
              <h2 className="text-xl font-extrabold mb-2" style={{ color: "#0C1A33" }}>
                Super&nbsp;! Merci pour votre confiance
              </h2>
              <p className="text-sm mb-5" style={{ color: "#666", lineHeight: "1.7" }}>
                Votre avis publié sur Google aide KC à se faire connaître<br />
                dans votre région. Ça prend moins de 30 secondes&nbsp;!
              </p>

              {/* Compteur */}
              <div
                className="inline-block text-xs font-semibold rounded-full px-4 py-1.5 mb-5"
                style={{ background: "#f5f5f5", color: "#888" }}
              >
                {countdownDone
                  ? "Page Google ouverte dans un nouvel onglet ↗"
                  : <>Redirection vers Google dans <span style={{ color: "#1f6996", fontWeight: 800 }}>{countdown}</span>s…</>
                }
              </div>

              {/* Bouton manuel */}
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-full text-white text-[15px] font-bold py-3.5 px-6 transition-all"
                style={{
                  background: "linear-gradient(135deg, #1f6996, #185d82)",
                  boxShadow: "0 6px 20px rgba(31,105,150,0.35)",
                }}
              >
                ⭐&nbsp; Laisser mon avis sur Google
              </a>
            </div>
          )}

          {/* ── STATE : Négatif (1-3⭐) ── */}
          {pageState === "negative" && (
            <div style={{ animation: "fadeUp 0.35s ease" }}>
              <div className="text-5xl mb-3">🙏</div>
              <h2 className="text-xl font-extrabold mb-2" style={{ color: "#0C1A33" }}>
                Merci pour votre honnêteté
              </h2>
              <p className="text-sm mb-5" style={{ color: "#666", lineHeight: "1.7" }}>
                On est vraiment désolé. Dites-nous ce qui s&apos;est passé —<br />
                notre responsable vous contactera rapidement.
              </p>

              <form onSubmit={submitNegative} className="text-left">
                <div className="mb-4">
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#777" }}>
                    Votre commentaire
                  </label>
                  <textarea
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Décrivez ce qui s'est passé…"
                    className="w-full rounded-xl text-sm p-3 resize-none outline-none transition-colors"
                    style={{ border: "1.5px solid #e0e0e0", background: "#fafafa", fontFamily: "inherit" }}
                    onFocus={(e) => (e.target.style.borderColor = "#1f6996")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#777" }}>
                    Votre prénom (optionnel)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Prénom"
                    className="w-full rounded-xl text-sm p-3 outline-none transition-colors"
                    style={{ border: "1.5px solid #e0e0e0", background: "#fafafa", fontFamily: "inherit" }}
                    onFocus={(e) => (e.target.style.borderColor = "#1f6996")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full text-white text-[15px] font-bold py-3.5 px-6 transition-all"
                  style={{ background: "#0C1A33", opacity: submitting ? 0.7 : 1, fontFamily: "inherit" }}
                >
                  {submitting ? "Envoi en cours…" : "Envoyer mon feedback →"}
                </button>
              </form>
            </div>
          )}

          {/* ── STATE : Merci (post-feedback négatif) ── */}
          {pageState === "thankyou" && (
            <div style={{ animation: "fadeUp 0.35s ease" }}>
              <div className="text-5xl mb-3">✅</div>
              <h2 className="text-xl font-extrabold mb-2" style={{ color: "#0C1A33" }}>
                Message bien reçu&nbsp;!
              </h2>
              <p className="text-sm" style={{ color: "#666", lineHeight: "1.7" }}>
                Merci de nous avoir partagé votre expérience.<br />
                Notre équipe va l&apos;analyser et vous contacter très prochainement.<br /><br />
                Pour toute urgence&nbsp;: <strong style={{ color: "#0C1A33" }}>(514) 591-6202</strong>
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <p className="text-[11px] mt-4 text-center" style={{ color: "rgba(255,255,255,0.40)" }}>
          Entretiens Ménager KC · (514) 591-6202 · kcglobalservice.inc@gmail.com
        </p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes shimmer {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
