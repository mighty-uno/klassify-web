import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/logo.svg"
        alt={`${siteConfig.name} logo`}
        width={28}
        height={28}
        className="h-7 w-7 shrink-0"
        priority
      />
      <span
        className={`text-[22px] font-bold tracking-[-0.8px] leading-none ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        klassify
      </span>
    </Link>
  );
}
