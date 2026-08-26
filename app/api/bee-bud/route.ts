import { NextResponse } from "next/server";
import { TURSO_ENABLED, insertApplication } from "@/lib/turso";
import { ZEPTOMAIL_ENABLED, sendApplicationEmail } from "@/lib/zeptoMail";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const required = ["name", "email", "region", "partnerType", "qualification"];
  for (const field of required) {
    const value = typeof body[field] === "string" ? (body[field] as string).trim() : "";
    if (!value) {
      return NextResponse.json(
        { error: `Please fill in the ${field}.` },
        { status: 400 }
      );
    }
  }

  if (typeof body.email === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const application = {
    name: String(body.name ?? "").trim(),
    email: String(body.email ?? "").trim(),
    company: String(body.company ?? "").trim(),
    role: String(body.role ?? "").trim(),
    region: String(body.region ?? "").trim(),
    partnerType: String(body.partnerType ?? "").trim(),
    qualification: String(body.qualification ?? "").trim(),
    message: String(body.message ?? "").trim()
  };

  if (!TURSO_ENABLED) {
    console.warn("Turso is not configured. Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN.");
  }
  try {
    await insertApplication(application);
  } catch (error) {
    console.error("Turso insert failed:", error);
  }

  if (!ZEPTOMAIL_ENABLED) {
    console.warn(
      "ZeptoMail is not configured. Set ZEPTOMAIL_API_TOKEN and ZEPTOMAIL_FROM_EMAIL."
    );
  }

  try {
    await sendApplicationEmail(application);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("ZeptoMail send failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your application." },
      { status: 502 }
    );
  }
}
