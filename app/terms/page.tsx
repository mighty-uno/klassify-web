import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern the use of the Klassify website and the AI-powered school operating system."
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Klassify website and the Klassify school operating system provided by Vidhiworks. By using our website or service, you agree to these Terms."
      lastUpdated={siteConfig.lastUpdated}
    >
      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing the Klassify website or signing up for the service, you confirm that you
        are authorised to accept these Terms on behalf of your school or organisation, and
        that you agree to be bound by them. If you do not agree, please do not use the
        service.
      </p>

      <h2>2. Description of the service</h2>
      <p>
        Klassify is an AI-powered school operating system that helps schools manage
        attendance, fees, results, and reporting. The service may be updated, improved, or
        extended over time, and these Terms apply to all such changes.
      </p>

      <h2>3. Accounts and responsibilities</h2>
      <ul>
        <li>You must provide accurate information when creating an account or contacting us.</li>
        <li>You are responsible for safeguarding your account credentials and for all activity under your account.</li>
        <li>You must notify us promptly of any unauthorised use of your account.</li>
        <li>
          You are responsible for ensuring that you have the right to upload and process the
          information you provide to the service, including student and parent data.
        </li>
      </ul>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service in any way that violates applicable law or regulation.</li>
        <li>Attempt to gain unauthorised access to the service, other accounts, or related systems.</li>
        <li>Interfere with or disrupt the integrity, performance, or availability of the service.</li>
        <li>Upload harmful code, or data that infringes the rights of others.</li>
        <li>Resell or sublicense the service without our prior written consent.</li>
      </ul>

      <h2>5. AI-generated content</h2>
      <p>
        Klassify may generate content such as attendance summaries, fee priorities, and report
        card comments using AI. AI output is generated from your school&apos;s data and is
        provided as an aid to school staff. You are responsible for reviewing, verifying, and
        approving AI-generated content before it is relied upon or shared. We are not liable
        for decisions made on the basis of AI-generated content that has not been reviewed.
      </p>

      <h2>6. Fees and payment</h2>
      <p>
        Pricing is quoted per student, per month in Indian Rupees (INR) and depends on your
        school&apos;s size and selected plan. Fees are communicated at the time of signing up
        or renewal. Unless otherwise agreed, fees are payable in advance. Prices may change
        with reasonable notice for renewals. Unpaid invoices may result in suspension of
        service.
      </p>

      <h2>7. Subscriptions and termination</h2>
      <p>
        Either party may terminate a subscription with the notice period agreed in the
        subscription agreement. Upon termination, we will provide you with a reasonable
        period to export your data, after which we may delete school records in line with our
        retention practices. You may stop using the website at any time.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        Klassify, its name, logo, and all software, design, and content of the service are
        owned by {siteConfig.companyName} or its licensors. Your school data remains yours.
        This agreement does not transfer any ownership rights to you.
      </p>

      <h2>9. Disclaimer of warranties</h2>
      <p>
        The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind, whether express or implied, including implied warranties of
        merchantability, fitness for a particular purpose, or non-infringement. We do not
        warrant that the service will be uninterrupted, error-free, or completely secure.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.companyName} shall not be liable
        for any indirect, incidental, special, consequential, or punitive damages, or for any
        loss of profits, revenue, data, or goodwill, arising out of or related to your use of
        the service. Our total aggregate liability shall not exceed the amounts paid by you
        for the service in the twelve months preceding the claim.
      </p>

      <h2>11. Changes to the service or terms</h2>
      <p>
        We may modify the service or these Terms from time to time. Where changes are
        material, we will provide reasonable notice. Continued use of the service after the
        changes take effect constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of India, and any disputes shall be subject to
        the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, or through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
