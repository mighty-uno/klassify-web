"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Check, ArrowRight } from "lucide-react";

export default function SlidesPage() {
  const [cur, setCur] = useState(0);
  const [webIdx, setWebIdx] = useState(0);
  const [mobIdx, setMobIdx] = useState(0);

  const totalSlides = 9;

  const webItems = [
    { src: "/assets/web-dashboard.png", cap: "School pulse dashboard · live KPIs" },
    { src: "/assets/web-fees.png", cap: "Fees & finance · collection vs target" },
    { src: "/assets/web-attendance.png", cap: "Daily attendance · class roll call & alerts" },
    { src: "/assets/web-schedule.png", cap: "Teacher schedule · weekly timetable" },
    { src: "/assets/web-payroll.png", cap: "Payroll · runs & payslips" },
    { src: "/assets/web-students.png", cap: "Students · enrolment, fees & attendance" }
  ];

  const mobItems = [
    { src: "/assets/mobile-admin.png", cap: "Admin home · charts & summary" },
    { src: "/assets/mobile-teacher.png", cap: "Teacher · my day & schedule" },
    { src: "/assets/mobile-tatt.png", cap: "Roll call · mark attendance" },
    { src: "/assets/mobile-tqr.png", cap: "QR self check-in" },
    { src: "/assets/mobile-tbcast.png", cap: "Broadcast · to students" },
    { src: "/assets/mobile-parent.png", cap: "Parent · my child overview" },
    { src: "/assets/mobile-abcast.png", cap: "Broadcast · to parents" },
    { src: "/assets/mobile-agent.png", cap: "SkooBee AI agent" }
  ];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setCur((c) => Math.min(totalSlides - 1, c + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setCur((c) => Math.max(0, c - 1));
      } else if (e.key === "Home") {
        setCur(0);
      } else if (e.key === "End") {
        setCur(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FFF7EC] font-sans text-[#2B2160] select-none">
      {/* Top Header Bar */}
      <div className="absolute top-4 left-6 z-40 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-[#F3E7D2] bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#2B2160] shadow-sm backdrop-blur transition-colors hover:bg-white"
        >
          <ArrowLeft size={14} />
          Back to Website
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-[#F3E7D2] bg-white/70 px-3 py-1 text-xs font-semibold text-[#5A5378] backdrop-blur">
          <Image src="/assets/skoobee-icon.png" width={18} height={18} alt="SkooBee" className="rounded-sm" />
          <span>SkooBee System Overview</span>
        </div>
      </div>

      {/* Slide 1: Cover */}
      {cur === 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white bg-[radial-gradient(120%_140%_at_85%_-10%,#3B2A8F_0%,#2B2160_45%,#1D1550_100%)] animate-fadeIn">
          <div className="flex flex-col items-center gap-6 max-w-3xl">
            <div className="h-24 w-24 rounded-3xl bg-white/10 p-3 shadow-2xl flex items-center justify-center animate-bounce-slow">
              <Image src="/assets/skoobee-icon.png" width={72} height={72} alt="SkooBee Logo" priority />
            </div>
            <div>
              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white font-serif">
                SkooBee
              </h1>
              <p className="mt-2 text-2xl md:text-3xl font-medium text-[#D9D4F5] font-serif">
                School ERP in your pocket.
              </p>
            </div>
            <p className="max-w-xl text-base md:text-lg text-[#C9C1EA] leading-relaxed">
              One platform. Web depth. Mobile speed. An AI agent that answers from live school data.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-2">
              <span className="rounded-full bg-[#4A3AFF]/30 border border-[#4A3AFF]/40 px-4 py-1.5 text-xs font-bold text-[#B7ADFF]">Admin</span>
              <span className="rounded-full bg-[#3FB58C]/20 border border-[#3FB58C]/30 px-4 py-1.5 text-xs font-bold text-[#7FD9B5]">Teacher</span>
              <span className="rounded-full bg-[#FF5C38]/20 border border-[#FF5C38]/30 px-4 py-1.5 text-xs font-bold text-[#FFB3A0]">Parent</span>
              <span className="rounded-full bg-[#D97706]/20 border border-[#D97706]/30 px-4 py-1.5 text-xs font-bold text-[#FFC77D] flex items-center gap-1.5">
                <Sparkles size={12} />
                SkooBee AI
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Slide 2: The Problem */}
      {cur === 1 && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 py-16 md:items-center animate-fadeIn">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A3AFF]">The Problem</span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight max-w-3xl">
            School software runs on desktop, <span className="text-[#4A3AFF]">but school life runs everywhere.</span>
          </h2>
          <p className="mt-3 text-[#5A5378] text-base max-w-2xl">
            Traditional ERPs stop at the school gate — teachers and parents are left out of the loop, and admin teams drown in manual work.
          </p>

          <div className="mt-8 grid w-full grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            <div className="rounded-2xl border border-[#F3E7D2] bg-white p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-[#F0EEFF] text-[#4A3AFF] flex items-center justify-center mb-4 font-bold text-lg">🏫</div>
              <h3 className="text-lg font-bold text-[#2B2160] mb-2">Admin</h3>
              <p className="text-sm text-[#5A5378] leading-relaxed">
                Fees tracked in spreadsheets, reports compiled by hand, reminders chased one by one. No single, live view of the school.
              </p>
            </div>
            <div className="rounded-2xl border border-[#F3E7D2] bg-white p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-[#E7F7F0] text-[#3FB58C] flex items-center justify-center mb-4 font-bold text-lg">👩‍🏫</div>
              <h3 className="text-lg font-bold text-[#2B2160] mb-2">Teacher</h3>
              <p className="text-sm text-[#5A5378] leading-relaxed">
                Manual roll call eats minutes from every class. Homework and memos are scattered across WhatsApp groups and paper registers.
              </p>
            </div>
            <div className="rounded-2xl border border-[#F3E7D2] bg-white p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-[#FFEDE7] text-[#FF5C38] flex items-center justify-center mb-4 font-bold text-lg">👨‍👩‍👧</div>
              <h3 className="text-lg font-bold text-[#2B2160] mb-2">Parent</h3>
              <p className="text-sm text-[#5A5378] leading-relaxed">
                Out of the loop on attendance, fees and assignments. Missed payment dates, missed updates, and no easy way to ask.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Slide 3: What We're Solving */}
      {cur === 2 && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 py-16 md:items-center animate-fadeIn">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A3AFF]">Our Objective</span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight">
            What problems we&apos;re solving
          </h2>
          <p className="mt-2 text-[#5A5378] text-base max-w-2xl">
            We&apos;re not porting the web to mobile — we&apos;re building the right layer for each role. Web for depth, mobile for speed, AI for answers.
          </p>

          <div className="mt-8 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
            {[
              { num: "01", title: "Consolidate the chaos", desc: "One source of truth for students, fees, attendance, schedules and payroll — replacing spreadsheets and scattered WhatsApp groups." },
              { num: "02", title: "Make admin frictionless", desc: "Collection vs target at a glance, drillable charts, defaulters surfaced automatically, and follow-ups handled for you." },
              { num: "03", title: "Give teachers their time back", desc: "Roll call in under two minutes, QR self check-in, homework broadcast to students in one tap, a memo after every class." },
              { num: "04", title: "Bring parents in the loop", desc: "Live attendance, fee status and school updates on their phone — with one-tap acknowledgement so nothing is missed." },
              { num: "05", title: "Put an AI on every desk", desc: "SkooBee AI answers questions from live data, generates reports and sends reminders — instead of menus and manual exports." },
              { num: "06", title: "Reach where life happens", desc: "A mobile-first layer so admins, teachers and parents stay connected outside the office — not chained to a desktop browser." }
            ].map((f) => (
              <div key={f.num} className="rounded-2xl border border-[#F3E7D2] bg-white p-5 shadow-sm flex flex-col gap-1.5">
                <span className="font-mono text-xs font-extrabold text-[#4A3AFF]">{f.num}</span>
                <h3 className="font-bold text-base text-[#2B2160]">{f.title}</h3>
                <p className="text-xs text-[#5A5378] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Slide 4: Comparison vs Traditional ERPs */}
      {cur === 3 && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 py-16 md:items-center animate-fadeIn">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A3AFF]">Differentiation</span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight">
            How we differ from traditional ERPs
          </h2>

          <div className="mt-8 w-full max-w-5xl overflow-x-auto rounded-2xl border border-[#F3E7D2] bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#F3E7D2] bg-[#FAF8F5]">
                  <th className="py-3 px-5 text-xs font-bold uppercase text-[#8F87AD] w-1/4">Aspect</th>
                  <th className="py-3 px-5 text-xs font-bold uppercase text-[#8F87AD] w-1/3">Traditional ERP</th>
                  <th className="py-3 px-5 text-xs font-bold uppercase text-[#4A3AFF] bg-[#F0EEFF]/50">SkooBee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3E7D2]">
                {[
                  { title: "Interaction", oldVal: "Click through menus to find anything", newVal: "Ask SkooBee AI in plain natural language" },
                  { title: "Reports", oldVal: "Manually compile & export spreadsheets", newVal: "Auto-generated — scheduled & on demand" },
                  { title: "Fee reminders", oldVal: "Admin chases defaulters one by one", newVal: "Auto reminders — smart, tracked, escalated" },
                  { title: "Experience", oldVal: "Desktop-only, dense, admin-focused", newVal: "Mobile-first, role-based for teachers & parents too" },
                  { title: "Communication", oldVal: "Email blasts, no proof of receipt", newVal: "Targeted broadcasts with parent acknowledgement" },
                  { title: "Mindset", oldVal: "Records what happened", newVal: "Predicts, prompts & acts — a proactive partner" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9FC]">
                    <td className="py-3.5 px-5 font-bold text-[#2B2160]">{row.title}</td>
                    <td className="py-3.5 px-5 text-[#8F87AD]">{row.oldVal}</td>
                    <td className="py-3.5 px-5 font-bold text-[#3FB58C] bg-[#F0EEFF]/20">
                      <div className="flex items-center gap-2">
                        <Check size={14} className="shrink-0 text-[#3FB58C]" />
                        <span>{row.newVal}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Slide 5: Time Optimization */}
      {cur === 4 && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 py-16 md:items-center animate-fadeIn">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A3AFF]">Impact</span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight">
            How each role gets its time back
          </h2>

          <div className="mt-8 grid w-full grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <div className="rounded-2xl border border-[#F3E7D2] bg-white p-6 shadow-sm flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A3AFF]">Parent</span>
              <div className="rounded-xl bg-[#FFEDE7] p-3 text-xs text-[#7A2E1E] leading-relaxed">
                <strong>Before:</strong> Calls school office to check attendance or fee status. Misses updates buried in group chats.
              </div>
              <div className="rounded-xl bg-[#E7F7F0] p-3 text-xs text-[#1F6A50] leading-relaxed">
                <strong>With SkooBee:</strong> Live attendance & fees on phone. Acknowledges school updates in one tap.
              </div>
              <div className="mt-auto pt-2 font-bold text-xs text-[#3FB58C]">
                ⚡ ~15 min per question → Instant
              </div>
            </div>

            <div className="rounded-2xl border border-[#F3E7D2] bg-white p-6 shadow-sm flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A3AFF]">Teacher</span>
              <div className="rounded-xl bg-[#FFEDE7] p-3 text-xs text-[#7A2E1E] leading-relaxed">
                <strong>Before:</strong> Paper roll call + manual register, homework shared across WhatsApp, no centralized record.
              </div>
              <div className="rounded-xl bg-[#E7F7F0] p-3 text-xs text-[#1F6A50] leading-relaxed">
                <strong>With SkooBee:</strong> Roll call in under 2 minutes, QR self check-in, one-tap broadcast to students & parents.
              </div>
              <div className="mt-auto pt-2 font-bold text-xs text-[#3FB58C]">
                ⚡ ~15 min/class → ~2 min
              </div>
            </div>
          </div>

          <div className="mt-6 w-full rounded-2xl border border-[#F3E7D2] bg-white p-6 shadow-sm max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A3AFF]">School Leadership & Admin</span>
              <p className="text-sm text-[#5A5378] mt-1">
                Live collection vs target, drillable charts, defaulters auto-flagged, reminders auto-sent, reports auto-generated.
              </p>
            </div>
            <div className="shrink-0 rounded-xl bg-[#E7F7F0] px-4 py-2 text-sm font-bold text-[#1F6A50]">
              Days/month of manual reporting → Minutes
            </div>
          </div>
        </div>
      )}

      {/* Slide 6: AI-Led Features */}
      {cur === 5 && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 py-16 text-white bg-[radial-gradient(120%_140%_at_85%_-10%,#3B2A8F_0%,#2B2160_45%,#1D1550_100%)] animate-fadeIn md:items-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B7ADFF]">AI-Led Features · Auto-Pilot</span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight">
            The auto-pilot for school operations
          </h2>

          <div className="mt-8 grid w-full grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-white">Auto report generation</h3>
                  <span className="rounded-full bg-[#D97706]/30 px-2.5 py-0.5 text-[11px] font-bold text-[#FFC77D] uppercase">Coming up</span>
                </div>
                <p className="text-xs text-[#C9C1EA] leading-relaxed">
                  Daily, weekly & monthly <strong>attendance, fee and payroll reports</strong> — generated automatically and delivered on a schedule.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-white">Auto fee reminders</h3>
                  <span className="rounded-full bg-[#D97706]/30 px-2.5 py-0.5 text-[11px] font-bold text-[#FFC77D] uppercase">Coming up</span>
                </div>
                <p className="text-xs text-[#C9C1EA] leading-relaxed">
                  Smart reminders to defaulters, <strong>tracked & acknowledged by parents</strong>, escalations only when needed — no manual chasing.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <h3 className="font-bold text-base text-[#7FD9B5] mb-1">Already Live</h3>
                <p className="text-xs text-[#C9C1EA] leading-relaxed">
                  SkooBee AI answers from live data, targeted broadcasts with acknowledgement, QR attendance, and drillable fee analytics.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5">
              <Image
                src="/assets/web-fees.png"
                alt="Fees Auto Reminders"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Slide 7: Web Experience Carousel */}
      {cur === 6 && (
        <div className="absolute inset-0 flex flex-col justify-between px-10 md:px-20 py-12 md:items-center animate-fadeIn">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A3AFF]">Web Experience</span>
            <h2 className="mt-1 text-2xl md:text-3xl lg:text-4xl font-black font-serif leading-tight">
              Deep work happens on the web console
            </h2>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-2 min-h-0">
            <button
              onClick={() => setWebIdx((i) => (i - 1 + webItems.length) % webItems.length)}
              className="absolute left-0 z-20 h-10 w-10 rounded-full border border-[#F3E7D2] bg-white shadow-md flex items-center justify-center text-[#2B2160] hover:bg-[#4A3AFF] hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="max-h-[62vh] max-w-4xl flex flex-col items-center">
              <div className="overflow-hidden rounded-2xl border border-[#F3E7D2] bg-white shadow-2xl">
                <Image
                  src={webItems[webIdx].src}
                  alt={webItems[webIdx].cap}
                  width={960}
                  height={540}
                  className="max-h-[54vh] w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#2B2160]">{webItems[webIdx].cap}</p>
            </div>

            <button
              onClick={() => setWebIdx((i) => (i + 1) % webItems.length)}
              className="absolute right-0 z-20 h-10 w-10 rounded-full border border-[#F3E7D2] bg-white shadow-md flex items-center justify-center text-[#2B2160] hover:bg-[#4A3AFF] hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              {webItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setWebIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === webIdx ? "w-6 bg-[#4A3AFF]" : "w-2 bg-[#D9D3EA]"}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-[#8F87AD]">{webIdx + 1} / {webItems.length}</span>
          </div>
        </div>
      )}

      {/* Slide 8: Mobile Experience Carousel */}
      {cur === 7 && (
        <div className="absolute inset-0 flex flex-col justify-between px-10 md:px-20 py-12 text-white bg-[radial-gradient(120%_140%_at_85%_-10%,#3B2A8F_0%,#2B2160_45%,#1D1550_100%)] animate-fadeIn md:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B7ADFF]">Mobile Experience</span>
            <h2 className="mt-1 text-2xl md:text-3xl lg:text-4xl font-black font-serif leading-tight">
              Fast actions happen on mobile apps
            </h2>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-2 min-h-0">
            <button
              onClick={() => setMobIdx((i) => (i - 1 + mobItems.length) % mobItems.length)}
              className="absolute left-4 md:left-24 z-20 h-10 w-10 rounded-full border border-white/20 bg-white/10 shadow-md flex items-center justify-center text-white hover:bg-[#4A3AFF] transition-colors"
              aria-label="Previous mobile view"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="max-h-[62vh] flex flex-col items-center">
              <div className="overflow-hidden rounded-3xl border-4 border-[#1D1550] shadow-2xl bg-black">
                <Image
                  src={mobItems[mobIdx].src}
                  alt={mobItems[mobIdx].cap}
                  width={340}
                  height={680}
                  className="max-h-[52vh] w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#E6E2F8]">{mobItems[mobIdx].cap}</p>
            </div>

            <button
              onClick={() => setMobIdx((i) => (i + 1) % mobItems.length)}
              className="absolute right-4 md:right-24 z-20 h-10 w-10 rounded-full border border-white/20 bg-white/10 shadow-md flex items-center justify-center text-white hover:bg-[#4A3AFF] transition-colors"
              aria-label="Next mobile view"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              {mobItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === mobIdx ? "w-6 bg-[#B7ADFF]" : "w-2 bg-white/20"}`}
                  aria-label={`Go to mobile image ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-[#A9A1D6]">{mobIdx + 1} / {mobItems.length}</span>
          </div>
        </div>
      )}

      {/* Slide 9: The Hero Product & CTA */}
      {cur === 8 && (
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 py-16 text-white bg-[radial-gradient(120%_140%_at_85%_-10%,#3B2A8F_0%,#2B2160_45%,#1D1550_100%)] animate-fadeIn md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B7ADFF]">The Hero Product</span>
            <span className="rounded-full bg-[#D97706]/30 border border-[#FFC77D]/30 px-3 py-0.5 text-[11px] font-bold text-[#FFC77D] uppercase">Future Release</span>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black font-serif leading-tight">
            SkooBee AI — <span className="text-[#FFC77D]">ask, don&apos;t click.</span>
          </h2>

          <div className="mt-8 grid w-full grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl border-4 border-[#1D1550] shadow-2xl bg-black max-h-[380px]">
                <Image src="/assets/mobile-agent.png" alt="SkooBee AI agent" width={240} height={480} className="max-h-[380px] w-auto object-contain" />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-white/15 bg-white p-5 text-[#2B2160] shadow-xl flex flex-col gap-3">
                <div className="self-end rounded-2xl rounded-br-sm bg-[#4A3AFF] text-white px-3.5 py-2 text-xs font-medium max-w-[85%]">
                  How is attendance this week?
                </div>
                <div className="self-start rounded-2xl rounded-bl-sm bg-[#FFF7EC] border border-[#F3E7D2] p-3 text-xs text-[#2B2160] max-w-[90%]">
                  This week is at <strong>94.8%</strong>, up 0.6% vs last week.
                  <div className="mt-2.5 flex gap-2">
                    <div className="flex-1 rounded-lg bg-[#F0EEFF] p-2 text-center">
                      <b className="block text-sm text-[#4A3AFF]">94.8%</b>
                      <span className="text-[10px] text-[#8F87AD]">Daily</span>
                    </div>
                    <div className="flex-1 rounded-lg bg-[#F0EEFF] p-2 text-center">
                      <b className="block text-sm text-[#4A3AFF]">96.4%</b>
                      <span className="text-[10px] text-[#8F87AD]">Upper</span>
                    </div>
                    <div className="flex-1 rounded-lg bg-[#F0EEFF] p-2 text-center">
                      <b className="block text-sm text-[#4A3AFF]">93.1%</b>
                      <span className="text-[10px] text-[#8F87AD]">Lower</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 text-xs md:text-sm text-[#E6E2F8]">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#3FB58C]">✓</span>
                  <span>Answers from <strong>live school data</strong> — attendance, fees, grades, schedules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#3FB58C]">✓</span>
                  <span>Proactive offers — flags defaulters, suggests notifying parents automatically.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-[#3FB58C]">✓</span>
                  <span>One tap from the center of every screen — for leadership, teachers & parents.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 max-w-5xl">
            <p className="text-xs text-[#C9C1EA]">
              Ready to see it live? The web console and mobile apps ship today — SkooBee AI lands next.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#4A3AFF] px-6 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Book a demo
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}

      {/* Floating Bottom Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 rounded-full border border-[#F3E7D2] bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
        <button
          onClick={() => setCur((c) => Math.max(0, c - 1))}
          disabled={cur === 0}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A3AFF] text-white disabled:bg-[#D9D3EA] disabled:cursor-not-allowed transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="min-w-[48px] text-center font-mono text-xs font-bold text-[#8F87AD]">
          {cur + 1} / {totalSlides}
        </span>
        <button
          onClick={() => setCur((c) => Math.min(totalSlides - 1, c + 1))}
          disabled={cur === totalSlides - 1}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A3AFF] text-white disabled:bg-[#D9D3EA] disabled:cursor-not-allowed transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Right Side Dots Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === cur ? "h-6 bg-[#4A3AFF] scale-110" : "w-2.5 bg-[#D9D3EA] hover:bg-[#B7ADFF]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
