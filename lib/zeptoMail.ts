import type { ApplicationRecord } from "@/lib/turso";
import type { EnquiryRecord } from "@/lib/emailTemplates";
import { applicationEmailHtml, enquiryEmailHtml } from "@/lib/emailTemplates";
import { siteConfig } from "@/lib/site";

const API_TOKEN = process.env.ZEPTOMAIL_API_TOKEN;
const FROM_EMAIL =
  process.env.ZEPTOMAIL_FROM_EMAIL || "no-reply@skoobee.vidhiworks.com";
const FROM_NAME = process.env.ZEPTOMAIL_FROM_NAME || "SkooBee";
const TO_EMAIL = process.env.ZEPTOMAIL_TO_EMAIL || siteConfig.supportEmail;

export const ZEPTOMAIL_ENABLED = Boolean(API_TOKEN && FROM_EMAIL);

async function sendEmail(subject: string, htmlbody: string): Promise<void> {
  if (!ZEPTOMAIL_ENABLED) return;

  const response = await fetch("https://api.zeptomail.com/v1.1/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${API_TOKEN}`
    },
    body: JSON.stringify({
      from: { address: FROM_EMAIL, name: FROM_NAME },
      to: [{ email_address: { address: TO_EMAIL } }],
      subject,
      htmlbody,
      track_clicks: true
    }),
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`ZeptoMail send failed (${response.status}): ${detail}`);
  }
}

export function sendApplicationEmail(app: ApplicationRecord): Promise<void> {
  return sendEmail(`New Bee-Bud application from ${app.name}`, applicationEmailHtml(app));
}

export function sendEnquiryEmail(enquiry: EnquiryRecord): Promise<void> {
  return sendEmail(`New SkooBee contact enquiry from ${enquiry.name}`, enquiryEmailHtml(enquiry));
}
