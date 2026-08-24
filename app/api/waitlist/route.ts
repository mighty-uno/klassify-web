import { NextResponse } from "next/server";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/vidhiworks@zohomail.in";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email) {
    return NextResponse.json({ error: "Please enter your email address." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const payload = {
    email,
    school: typeof body.school === "string" ? body.school.trim() : "",
    _subject: "New SkooBee waitlist signup",
    _template: "table",
    _captcha: "false"
  };

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000)
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Something went wrong while joining the waitlist." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while joining the waitlist." },
      { status: 502 }
    );
  }
}
