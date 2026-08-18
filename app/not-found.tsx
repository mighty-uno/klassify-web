import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-canvas px-6 pt-[72px] text-center">
      <p className="label-mono uppercase text-primary">404</p>
      <h1 className="mt-4 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px]">
        This page has gone to recess.
      </h1>
      <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
        The page you are looking for does not exist. Let&apos;s get you back to
        the classroom.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft size={16} />
        Back to home
      </Link>
    </section>
  );
}
