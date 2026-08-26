import type { ApplicationRecord } from "@/lib/turso";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detailsRows(app: ApplicationRecord): string {
  const rows: Array<[string, string]> = [
    ["Name", app.name],
    ["Email", app.email],
    ["Company / organisation", app.company],
    ["Role", app.role],
    ["Qualification", app.qualification],
    ["Region / city", app.region],
    ["Partner type", app.partnerType],
    ["Message", app.message]
  ];

  return rows
    .filter(([, value]) => value !== "")
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:9px 0;width:150px;font-size:13px;font-weight:600;color:#8a8fa3;vertical-align:top;line-height:1.5;">${label}</td>
          <td style="padding:9px 0;font-size:14px;color:#14162b;vertical-align:top;line-height:1.5;word-break:break-word;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");
}

export function applicationEmailHtml(app: ApplicationRecord): string {
  const replyHref = `mailto:${encodeURIComponent(app.email)}`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Bee-Bud application</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f7f7fa;font-family:Inter,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7fa;padding:28px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e3e3ea;">
            <tr>
              <td style="height:6px;background-color:#ffc93c;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="background-color:#0d0e1a;padding:26px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color:#ffffff;font-size:20px;font-weight:800;letter-spacing:-0.5px;">SkooBee</td>
                    <td align="right" style="color:#ffc93c;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Bee-Bud</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 6px 32px;">
                <h1 style="margin:0;font-size:24px;font-weight:800;color:#14162b;letter-spacing:-0.5px;">New Bee-Bud application</h1>
                <p style="margin:10px 0 0 0;font-size:15px;line-height:1.65;color:#5e6377;">
                  A partner has applied to join the hive. Review the details below and reach out to share their honey-drop plan.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 32px 6px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${detailsRows(app)}
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:26px 32px 34px 32px;">
                <a href="${replyHref}" style="display:inline-block;background-color:#4a3aff;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:10px;">Reply to ${escapeHtml(app.name)}</a>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f7f7fa;padding:22px 32px;border-top:1px solid #e3e3ea;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#8a8fa3;">SkooBee is built by Vidhiworks &middot; Mumbai, India</p>
                <p style="margin:4px 0 0 0;font-size:12px;line-height:1.6;color:#8a8fa3;">Questions? Write to contact.skoobee@vidhiworks.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
