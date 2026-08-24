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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "All",
    applicationCategory: "EducationalApplication, BusinessApplication",
    description:
      "SkooBee is the AI-powered school ERP that gives educators time back. Streamline attendance, billing, results, and day-to-day operations.",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: siteConfig.currency
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to set up SkooBee for our school?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most schools go live in under two weeks. Our onboarding team helps import classes, staff and students, and trains your team so day one feels familiar."
        }
      },
      {
        "@type": "Question",
        name: "Does the voice attendance work for large classrooms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Teachers read out names and SkooBee captures the roll call in about three seconds per student, flagging absentees and notifying parents instantly — even for full-size classrooms."
        }
      },
      {
        "@type": "Question",
        name: "Is our student and parent data secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. SkooBee follows standard security practices for education data, including encrypted storage and access controls, so only authorised staff can view records. See our Privacy Policy for full details."
        }
      },
      {
        "@type": "Question",
        name: "Will our office staff need to change how they work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. SkooBee is designed around the workflows schools already follow, so teams adopt it quickly. The AI quietly automates the repetitive parts while people keep their familiar routines."
        }
      },
      {
        "@type": "Question",
        name: "Can parents use SkooBee on their phones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Parents get mobile app and mobile-friendly web access with daily attendance updates, fee status and progress insights."
        }
      },
      {
        "@type": "Question",
        name: "What does SkooBee cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing is per student, per month and depends on your school's size and selected plan. Book a demo and we'll share a clear quote tailored to your school."
        }
      }
    ]
  }
];


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
