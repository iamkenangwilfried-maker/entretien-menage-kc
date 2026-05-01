import { NextRequest, NextResponse } from "next/server";

// ── URL du webhook GHL à configurer dans GHL → Automation → Webhooks ──
// Déclenche WF-05b (KC_NegativeFeedback_Handler) via trigger "Inbound Webhook"
const GHL_WEBHOOK_URL = process.env.GHL_FEEDBACK_WEBHOOK_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const { rating, comment, name, phone, contactName } = await req.json();

    // Validation basique
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
    }

    // Relay vers GHL si webhook configuré
    if (GHL_WEBHOOK_URL) {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          comment: comment ?? "",
          name: name ?? "",
          phone: phone ?? "",         // permet à GHL de retrouver le contact
          contactName: contactName ?? name ?? "",
          source: "KC_ReviewPage",
          timestamp: new Date().toISOString(),
        }),
      });
    } else {
      // Dev : log uniquement
      console.log("[KC Feedback]", { rating, comment, name, phone });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[KC Feedback] Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
