import { Building2, GraduationCap, Users, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const roles = [
  {
    icon: Building2,
    role: "Leadership",
    title: "Deep operational insights",
    description:
      "Instant dashboards surface operational bottlenecks, fee drops, and class performance trends."
  },
  {
    icon: Users,
    role: "Administration",
    title: "Repetitive chores automated",
    description:
      "Attendance, billing and records stop eating the office's day — workflows run themselves."
  },
  {
    icon: GraduationCap,
    role: "Teachers",
    title: "Focus on teaching",
    description:
      "Voice-to-text roll call and auto-generated report card comments free up real teaching time."
  },
  {
    icon: MonitorSmartphone,
    role: "Parents",
    title: "Real-time visibility",
    description:
      "Daily attendance, fee and progress updates keep families informed without follow-up calls."
  }
];

export function Roles() {
  return (
    <section id="roles" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="04" title="Built for every role" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            One system. Every school workflow.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            A shared operational view for leadership, administration, teachers
            and everyday attendance.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.08}>
              <div className="card flex h-full flex-col gap-4 p-7 transition-shadow duration-300 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="label-mono uppercase text-muted-2">{item.role}</p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
