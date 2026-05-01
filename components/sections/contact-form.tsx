"use client";
import { useState } from "react";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

const SERVICES = [
  "Nettoyage résidentiel",
  "Nettoyage commercial",
  "Nettoyage post-construction / rénovation",
  "Environnement médical / clinique",
  "Nettoyage industriel",
  "Nettoyage avant/après déménagement",
];

const VILLES = [
  "Sorel-Tracy",
  "Brossard",
  "Longueuil",
  "Varennes",
  "Beloeil",
  "Saint-Hyacinthe",
  "Repentigny",
  "Autre",
];

const FREQUENCES = [
  "Hebdomadaire",
  "Bihebdomadaire (aux 2 semaines)",
  "Mensuel",
  "Ponctuel / Occasionnel",
];

const PIECES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

type FormData = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  KC_Type_de_service: string;
  KC_Ville: string;
  KC_Frequence: string;
  KC_Surface_m2: string;
  KC_Nb_pieces: string;
  KC_Notes_service: string;
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-card-border text-navy text-sm placeholder-secondary/40 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all";
const labelClass =
  "block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    KC_Type_de_service: "",
    KC_Ville: "",
    KC_Frequence: "",
    KC_Surface_m2: "",
    KC_Nb_pieces: "",
    KC_Notes_service: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="font-heading font-bold text-xl text-navy mb-2">
          Demande envoyée !
        </h3>
        <p className="text-secondary text-sm max-w-xs">
          Notre équipe vous contacte dans moins d&apos;une heure. Vous recevrez
          une confirmation par courriel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <AlertCircle size={16} className="flex-shrink-0" />
          Une erreur est survenue. Appelez-nous au (514) 591-6202.
        </div>
      )}

      {/* Prénom + Nom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Prénom <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            value={form.first_name}
            onChange={set("first_name")}
            placeholder="Marie"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Nom <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            value={form.last_name}
            onChange={set("last_name")}
            placeholder="Tremblay"
            className={inputClass}
          />
        </div>
      </div>

      {/* Téléphone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Téléphone <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="514 123-4567"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>
            Courriel <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="marie@exemple.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Type de service + Ville */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Type de service <span className="text-accent">*</span>
          </label>
          <select
            required
            value={form.KC_Type_de_service}
            onChange={set("KC_Type_de_service")}
            className={inputClass}
          >
            <option value="">Sélectionner...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>
            Votre ville <span className="text-accent">*</span>
          </label>
          <select
            required
            value={form.KC_Ville}
            onChange={set("KC_Ville")}
            className={inputClass}
          >
            <option value="">Sélectionner...</option>
            {VILLES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Fréquence + Superficie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Fréquence souhaitée <span className="text-accent">*</span>
          </label>
          <select
            required
            value={form.KC_Frequence}
            onChange={set("KC_Frequence")}
            className={inputClass}
          >
            <option value="">Sélectionner...</option>
            {FREQUENCES.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Superficie (m²)</label>
          <input
            type="number"
            min="10"
            max="10000"
            value={form.KC_Surface_m2}
            onChange={set("KC_Surface_m2")}
            placeholder="Ex : 85"
            className={inputClass}
          />
        </div>
      </div>

      {/* Nombre de pièces */}
      <div>
        <label className={labelClass}>Nombre de pièces</label>
        <select
          value={form.KC_Nb_pieces}
          onChange={set("KC_Nb_pieces")}
          className={inputClass}
        >
          <option value="">Sélectionner...</option>
          {PIECES.map((p) => (
            <option key={p} value={p}>
              {p} pièce{p !== "1" ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className={labelClass}>Notes / détails supplémentaires</label>
        <textarea
          rows={4}
          value={form.KC_Notes_service}
          onChange={set("KC_Notes_service")}
          placeholder="Décrivez votre projet, toute information utile pour la soumission..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 bg-accent hover:bg-accent-hover text-white font-bold text-sm rounded-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Obtenir ma soumission gratuite →"
        )}
      </button>

      <p className="text-xs text-secondary/60 text-center leading-relaxed">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par
        Entretiens Ménager KC. Aucun engagement.
      </p>
    </form>
  );
}
