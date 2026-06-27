import {
  BadgeCheck,
  ShieldCheck,
  Cloud,
  Bot,
  Server,
  Trophy,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const certs = [
  {
    icon: Trophy,
    title: "IT Passport Passer",
    issuer: "Philnits",
    year: "2024",
  },
  {
    icon: Trophy,
    title: "Certificate of Completion",
    issuer: "Alliance Software Inc.",
    year: "2024",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
        aria-hidden
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-sky-50/70
          via-white
          to-white
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Certifications"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-sky-200
                  bg-white/80
                  backdrop-blur-xl
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-400
                  hover:shadow-xl
                  hover:shadow-sky-200/40
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-sky-500
                    to-cyan-500
                    text-white
                    shadow-lg
                    shadow-sky-300/30
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon className="size-7" />
                </div>

                <div className="mt-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    {cert.title}

                    <BadgeCheck className="size-5 text-sky-500" />
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {cert.issuer}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700">
                      {cert.year}
                    </span>

                    <span className="text-xs font-medium text-sky-600">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
