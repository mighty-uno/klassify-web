"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { NAV_LINKS, siteConfig } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        <Logo dark={!scrolled} />

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium leading-none transition-colors hover:text-primary ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={`hidden h-10 w-10 items-center justify-center rounded-[10px] transition-colors sm:inline-flex ${
              scrolled
                ? "border border-line bg-white text-[#25D366] hover:bg-[#25D366]/10"
                : "border border-white/20 bg-white/10 text-[#25D366] hover:bg-white/20"
            }`}
          >
            <WhatsAppIcon />
          </a>
          <a
            href={siteConfig.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex ${scrolled ? "btn-ghost" : "btn-secondary"}`}
          >
            Launch Application
          </a>
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Book a demo
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-[10px] lg:hidden ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-canvas lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-4 text-lg font-semibold text-ink hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-4 text-lg font-semibold text-ink hover:bg-white"
            >
              WhatsApp
            </a>
            <a
              href={siteConfig.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-ghost mt-6"
            >
              Launch Application
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
