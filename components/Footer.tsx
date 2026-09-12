import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Attendance", href: "/#product" },
      { label: "Fees & billing", href: "/#product" },
      { label: "System Slides", href: "/slides" },
      { label: "Oppa — SkooBee AI", href: "/#oppa" },
      { label: "AI for schools", href: "/#ai" },
      { label: "Pricing", href: "/#pricing" }
    ]
  },
  {
    title: "School",
    links: [
      { label: "Why SkooBee", href: "/#why" },
      { label: "How it works", href: "/#how" },
      { label: "Built for every role", href: "/#roles" },
      { label: "FAQ", href: "/#faq" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About SkooBee", href: "/#why" },
      { label: "Contact us", href: "/contact" },
      { label: "Book a demo", href: "/contact" },
      { label: "Bee-Bud program", href: "/bee-bud" },
      { label: "Launch Application", href: "https://app.skoobee.in" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-6 text-muted">
            {siteConfig.tagline} SkooBee is the AI-powered school ERP trusted by
            schools across India.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            app.skoobee.in
            <ExternalLink size={14} />
          </a>
          <div className="mt-2 flex items-center gap-3">
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-white text-[#25D366] transition-colors hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <p className="label-mono uppercase text-muted-2">Follow on Instagram</p>
            <Image
              src={siteConfig.instagramQr}
              alt="Scan to follow SkooBee on Instagram"
              width={140}
              height={140}
              className="h-[140px] w-[140px] rounded-xl border border-line bg-white p-1.5"
            />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <p className="label-mono uppercase text-muted-2">{col.title}</p>
            {col.links.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-2">
              © {siteConfig.foundingYear} {siteConfig.companyName}. All rights reserved.
            </p>
            <p className="text-sm text-muted-2">
              SkooBee is built by {siteConfig.companyName}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="label-mono uppercase text-muted-2">Proudly built by</p>
            <Image
              src={siteConfig.companyLogo}
              alt={`${siteConfig.companyName} logo`}
              width={150}
              height={33}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
