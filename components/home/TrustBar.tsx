import { Clock, UserCheck, Layers, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const stats = [
  {
    icon: Clock,
    value: "30 mins",
    label: "saved per teacher, every single day"
  },
  {
    icon: UserCheck,
    value: "3 seconds",
    label: "to mark the full roll call with voice"
  },
  {
    icon: Layers,
    value: "1 system",
    label: "for attendance, fees, results and reports"
  },
  {
    icon: BadgeCheck,
    value: "24/7",
    label: "quiet AI support working behind the scenes"
  }
];

export function TrustBar() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page grid grid-cols-2 gap-8 py-14 md:grid-cols-4 md:py-16">
        {stats.map((stat, i) => (
          <Reveal key={stat.value} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <stat.icon size={18} className="mb-1 text-primary" />
              <p className="text-3xl font-extrabold tracking-tight text-ink">{stat.value}</p>
              <p className="max-w-[180px] text-sm leading-5 text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
