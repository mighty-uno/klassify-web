import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/assets/skoobee-icon.png"
        alt={`${siteConfig.name} logo`}
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-105"
        priority
      />
      <span
        className={`text-[22px] font-extrabold tracking-[-0.6px] leading-none ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        skoobee
      </span>
    </Link>
  );
}

