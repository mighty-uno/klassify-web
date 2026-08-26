import { NextResponse } from "next/server";
import { ZEPTOMAIL_ENABLED, sendEnquiryEmail } from "@/lib/zeptoMail";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const required = ["name", "mobile", "email"];
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
  if (typeof body.mobile === "string" && !/^[0-9]{10}$/.test(body.mobile)) {
    return NextResponse.json({ error: "Please enter a valid 10-digit mobile number." }, { status: 400 });
  }

  const enquiry = {
    name: String(body.name ?? "").trim(),
    mobile: String(body.mobile ?? "").trim(),
    email: String(body.email ?? "").trim(),
    school: String(body.school ?? "").trim(),
    address: String(body.address ?? "").trim()
  };

  if (!ZEPTOMAIL_ENABLED) {
    console.warn(
      "ZeptoMail is not configured. Set ZEPTOMAIL_API_TOKEN and ZEPTOMAIL_FROM_EMAIL."
    );
  }

  try {
    await sendEnquiryEmail(enquiry);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("ZeptoMail send failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry." },
      { status: 502 }
    );
  }
}
