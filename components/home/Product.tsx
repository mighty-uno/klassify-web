"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mic, IndianRupee, BarChart3, FileText, Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const features = [
  {
    icon: Mic,
    title: "Attendance Management",
    description:
      "Mark attendance in 3 seconds using voice-to-text smart roll call, saving teachers 30 mins daily while instantly notifying parents of absentees."
  },
  {
    icon: IndianRupee,
    title: "Fees",
    description:
      "Auto-reminders and clear digital ledgers make fee collections stress-free for families and accountants."
  },
  {
    icon: BarChart3,
    title: "Result",
    description:
      "Generate visual report cards with AI comments, giving parents clear progress trends."
  },
  {
    icon: FileText,
    title: "Auto Reports",
    description:
      "Turn everyday school data into clear, ready-to-share insights for leadership and parents."
  },
  {
    icon: Plus,
    title: "And many more",
    description:
      "A connected foundation that can grow with the rhythms of your school."
  }
];

const desktopScreen = {
  hidden: { opacity: 0, y: 44, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }
  })
};

const phoneScreen = {
  hidden: { opacity: 0, y: 70, scale: 0.9, rotate: -3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.18, ease: [0.21, 0.47, 0.32, 0.98] }
  })
};

export function Product() {
  return (
    <section id="product" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="02" title="One connected platform" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Every operational detail, finally in sync.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.06}
              className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="card flex h-full flex-col gap-4 p-7 transition-shadow duration-300 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon size={20} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <motion.div
            variants={desktopScreen}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="card overflow-hidden p-3 md:p-5"
          >
            <Image
              src="/staff-registry.png"
              alt="Klassify staff registry screen"
              width={1440}
              height={1024}
              className="h-auto w-full rounded-xl"
            />
          </motion.div>

          <motion.div
            variants={desktopScreen}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="card mt-6 overflow-hidden p-3 md:p-5"
          >
            <Image
              src="/teacher-overview.png"
              alt="Klassify teacher overview screen"
              width={1440}
              height={1024}
              className="h-auto w-full rounded-xl"
            />
          </motion.div>

          <div className="mx-auto mt-6 grid w-full max-w-xl grid-cols-2 items-end gap-6 md:gap-10">
            <motion.div
              variants={phoneScreen}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              className="card overflow-hidden p-3"
            >
              <Image
                src="/attendance-portal.png"
                alt="Klassify attendance portal mobile screen"
                width={375}
                height={840}
                className="h-auto w-full rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={phoneScreen}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              className="card overflow-hidden p-3"
            >
              <Image
                src="/attendance-list.png"
                alt="Klassify attendance list mobile screen"
                width={375}
                height={849}
                className="h-auto w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
