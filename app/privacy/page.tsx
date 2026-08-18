import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Klassify collects, uses, and protects the information of schools, staff, students, and parents."
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Klassify, operated by Vidhiworks, collects, uses, stores, and protects information when schools, teachers, students, and parents use our AI-powered school operating system and website."
      lastUpdated={siteConfig.lastUpdated}
    >
      <h2>1. Who we are</h2>
      <p>
        Klassify is an AI-powered school operating system provided by{" "}
        <strong>{siteConfig.companyName}</strong> ({siteConfig.legalName}), based in{" "}
        {siteConfig.registeredOffice}. When we say &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;Klassify&rdquo; in this policy, we mean {siteConfig.companyName}.
      </p>
      <p>
        If you have any questions about this policy, you can contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect information in three main ways:</p>
      <ul>
        <li>
          <strong>Information you give us.</strong> When you contact us through the website,
          book a demo, or correspond with our team, we collect details such as your name,
          mobile number, email address, school name, and school address.
        </li>
        <li>
          <strong>Information your school provides.</strong> When a school subscribes to
          Klassify, it provides us with school records including class structures, staff
          details, and student information (such as names, attendance, fee records, and
          assessment results) needed to operate the service. We process this information on
          behalf of the school.
        </li>
        <li>
          <strong>Information collected automatically.</strong> When you visit our website,
          we may collect basic technical information such as browser type, device type, and
          pages visited, to keep the site secure and understand how it is used.
        </li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To provide, operate, and maintain the Klassify service your school subscribes to.</li>
        <li>To automate attendance, fees, results, and reporting workflows.</li>
        <li>To generate AI-assisted summaries, alerts, and report content.</li>
        <li>To respond to enquiries, schedule demos, and provide support.</li>
        <li>To send service updates, billing notices, and administrative messages.</li>
        <li>To detect, prevent, and address security or technical issues.</li>
      </ul>

      <h2>4. AI processing</h2>
      <p>
        Klassify uses AI to reduce repetitive work, surface useful patterns, and generate
        content such as attendance summaries, fee follow-up priorities, and report card
        comments. AI outputs are generated from your school&apos;s own data and are intended
        to assist school staff. Schools remain responsible for reviewing and approving any
        AI-generated content before it is shared with parents or students.
      </p>

      <h2>5. How we share information</h2>
      <p>We do not sell your personal data. We share information only in these cases:</p>
      <ul>
        <li>
          <strong>With the school.</strong> Staff and parents receive updates that the school
          has configured for them through Klassify.
        </li>
        <li>
          <strong>With service providers.</strong> We work with trusted providers who help us
          operate the service (for example, hosting, email, and messaging providers such as
          FormSubmit for contact form delivery). These providers are bound by confidentiality
          obligations.
        </li>
        <li>
          <strong>For legal reasons.</strong> We may disclose information where required by
          law, regulation, or legal process, or to protect the rights and safety of our users
          and the public.
        </li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We keep school records for as long as the school&apos;s subscription is active and
        for a reasonable period afterwards as needed to meet legal obligations and resolve
        disputes. Contact and demo enquiries are retained until you ask us to remove them or
        for as long as needed for the purpose collected.
      </p>

      <h2>7. Data security</h2>
      <p>
        We follow industry-standard practices for education data, including encrypted
        transmission and storage, access controls that restrict records to authorised staff,
        and routine reviews of our security measures. No method of transmission or storage is
        completely secure, so while we work to protect your data, we cannot guarantee
        absolute security.
      </p>

      <h2>8. Children&apos;s information</h2>
      <p>
        Klassify is designed for use by schools. Student information is provided by the
        school and its authorised staff, and is processed on the school&apos;s behalf.
        Parents should direct questions about their child&apos;s records to their school. We
        do not knowingly collect personal information directly from children.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Depending on where you are located, you may have rights to access, correct, or delete
        your personal information, to object to or restrict certain processing, and to
        receive a copy of your data in a portable format. You can exercise these rights by
        emailing{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We will respond within
        a reasonable time.
      </p>

      <h2>10. Cookies</h2>
      <p>
        Our website uses cookies and similar technologies as described in our{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make changes, we will
        update the &ldquo;Last updated&rdquo; date at the top of this page and, where
        appropriate, notify subscribing schools. Continued use of the service after changes
        take effect means you accept the updated policy.
      </p>

      <h2>12. Contact us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy or your data, contact us
        at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
