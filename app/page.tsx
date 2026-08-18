import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Roles } from "@/components/home/Roles";
import { Difference } from "@/components/home/Difference";
import { Product } from "@/components/home/Product";
import { AISection } from "@/components/home/AISection";
import { Workflow } from "@/components/home/Workflow";
import { Oppa } from "@/components/home/Oppa";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { BuiltByVidhiworks } from "@/components/home/BuiltByVidhiworks";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  operatingSystem: "All",
  applicationCategory: "EducationalApplication, BusinessApplication",
  description:
    "Klassify is the AI-powered school ERP that gives educators time back. Streamline attendance, billing, results, and day-to-day operations.",
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: siteConfig.currency
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.companyName,
    email: siteConfig.email
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Roles />
      <Difference />
      <Product />
      <AISection />
      <Workflow />
      <Oppa />
      <Pricing />
      <FAQ />
      <BuiltByVidhiworks />
      <CTA />
    </>
  );
}
