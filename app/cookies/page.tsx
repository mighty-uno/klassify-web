import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How the Klassify website uses cookies and similar technologies, and how you can manage them."
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This Cookie Policy explains how the Klassify website, operated by Vidhiworks, uses cookies and similar technologies, and the choices you have to control them."
      lastUpdated={siteConfig.lastUpdated}
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are
        widely used to make websites work efficiently, remember your preferences, and provide
        information to site owners.
      </p>

      <h2>2. How we use cookies</h2>
      <p>We use cookies and similar technologies on the Klassify website to:</p>
      <ul>
        <li>Keep the website secure and functioning correctly.</li>
        <li>Remember basic preferences during your visit.</li>
        <li>Understand how visitors use the website so we can improve it.</li>
      </ul>

      <h2>3. Types of cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies.</strong> These are required for the website to
          function, such as cookies that keep your session secure. They cannot be switched
          off.
        </li>
        <li>
          <strong>Preference cookies.</strong> These remember choices you make, such as
          dismissed notices, so you do not have to make them again.
        </li>
        <li>
          <strong>Analytics cookies.</strong> These help us count visits and understand which
          pages are most useful, in aggregate and anonymously.
        </li>
      </ul>

      <h2>4. Third-party services</h2>
      <p>
        Our website may load fonts and other resources from third-party providers. When we
        use the contact form, submissions are delivered through a third-party email service
        (FormSubmit). These providers may set their own cookies or process submitted data
        under their own policies. We encourage you to review their privacy practices.
      </p>

      <h2>5. Managing cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers let
        you view, block, or delete cookies, and set preferences for specific sites. If you
        disable cookies, some parts of the website may not function as intended.
      </p>
      <ul>
        <li>
          For guidance on controlling cookies in your browser, refer to your browser&apos;s
          help or support pages (for example, Chrome, Firefox, Safari, or Edge).
        </li>
      </ul>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be reflected by
        updating the &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>7. Contact us</h2>
      <p>
        If you have questions about this Cookie Policy, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, or read our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
