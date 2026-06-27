import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Apple,
  Gamepad2,
  Cpu,
} from "lucide-react";
import { EcosystemDiagram } from "@/components/ecosystem-diagram";

const stats = [
  {
    icon: Globe,
    title: "Web Development",
    value: "6+ Projects",
    color: "bg-sky-500",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    value: "3+ Apps",
    color: "bg-cyan-500",
  },
  {
    icon: Apple,
    title: "iOS Development",
    value: "Learning",
    color: "bg-slate-700",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    value: "Roblox",
    color: "bg-violet-500",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    value: "2 Projects",
    color: "bg-orange-500",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-36 md:pb-24"
    >
      {/* backdrop */}
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid animate-grid-pan"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-7">
          <span>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm">
              <Sparkles className="size-3.5 text-sky-500" />
              Full Stack Engineer
            </span>
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Scalable
            </span>
            <br />
            Digital Solutions.
          </h1>

          <span>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg text-slate-500">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-foreground">
                Julius Basas
              </span>
              . I build scalable web applications, Android apps, backend
              systems, Artificial Intelligence solutions, and Internet of Things
              platforms — designed with clean architecture and engineered to
              last.
            </p>
          </span>

          <span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500
text-white
shadow-lg
shadow-sky-300/40
hover:shadow-sky-400/50
hover:-translate-y-0.5 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600"
              >
                Explore My Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="text-sm text-slate-500">
                Interested in my resume?{" "}
                <a
                  href="#contact"
                  className="font-semibold text-sky-600 hover:text-sky-700 hover:underline"
                >
                  Request it through the contact section.
                </a>
              </p>
            </div>
          </span>

          <span>
            <div className="mt-6 flex flex-wrap gap-5">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color} text-white shadow-md`}
                    >
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        {item.title}
                      </p>

                      <p className="font-semibold text-slate-800">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </span>
        </div>

        <div className="relative">
          <EcosystemDiagram />
        </div>
      </div>
    </section>
  );
}
