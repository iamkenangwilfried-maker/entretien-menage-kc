import { NextRequest, NextResponse } from "next/server";

// Webhook GHL → WF-01a (KC_Form_Inbound)
// Ajouter dans Vercel : GHL_CONTACT_WEBHOOK_URL = URL du webhook trigger de WF-01a
const GHL_WEBHOOK_URL = process.env.GHL_CONTACT_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      phone,
      email,
      KC_Type_de_service,
      KC_Ville,
      KC_Frequence,
      KC_Surface_m2,
      KC_Nb_pieces,
      KC_Notes_service,
    } = body;

    if (!first_name || !phone || !email) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const payload = {
      first_name: first_name.trim(),
      last_name: (last_name ?? "").trim(),
      phone: phone.trim(),
      email: email.trim(),
      KC_Type_de_service: KC_Type_de_service ?? "",
      KC_Ville: KC_Ville ?? "",
      KC_Frequence: KC_Frequence ?? "",
      KC_Surface_m2: KC_Surface_m2 ?? "",
      KC_Nb_pieces: KC_Nb_pieces ?? "",
      KC_Notes_service: KC_Notes_service ?? "",
      source: "KC_SiteWeb",
      timestamp: new Date().toISOString(),
    };

    if (GHL_WEBHOOK_URL) {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[KC Contact] GHL webhook error:", res.status);
        return NextResponse.json({ error: "GHL error" }, { status: 502 });
      }
    } else {
      console.log("[KC Contact] Dev mode — payload:", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[KC Contact] Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
