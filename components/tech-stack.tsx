import {
  MonitorSmartphone,
  ServerCog,
  Smartphone,
  BrainCircuit,
  Radio,
  Database,
  CloudCog,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const modules = [
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    accent: "var(--primary)",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    icon: ServerCog,
    title: "Backend",
    accent: "var(--cyan)",
    items: [
      "Spring Boot",
      "Node.js",
      "Express",
      "Laravel",
      "ASP.NET",
      "Java",
      "PHP",
      "C#",
      "Thymeleaf",
      "Kafka",
      "Redis",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    accent: "var(--teal)",
    items: ["Android", "Kotlin", "Jetpack Compose", "XML", "Flutter", "Dart"],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    accent: "var(--violet)",
    items: [],
  },
  {
    icon: Radio,
    title: "Internet of Things",
    accent: "var(--primary)",
    items: ["Arduino", "ESP32", "Embedded Systems", "Sensors"],
  },
  {
    icon: Database,
    title: "Database",
    accent: "var(--cyan)",
    items: [
      "PostgreSQL",
      "MySQL",
      "Microsoft SQL Server",
      "MongoDB",
      "SQLite",
      "Firebase",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    accent: "var(--teal)",
    items: ["Docker", "Firebase", "GitHub Actions", "Linux", "Kubernetes"],
  },
  {
    icon: Wrench,
    title: "Tools",
    accent: "var(--violet)",
    items: [
      "Git",
      "GitHub",
      "TortoiseGit",
      "Postman",
      "Figma",
      "VS Code",
      "IntelliJ IDEA",
      "Android Studio",
      "pgAdmin",
      "Grafana",
      "Prometheus",
      "Lua",
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
        aria-hidden
      />

      <div
        className="
pointer-events-none
absolute
inset-0
-z-10
bg-gradient-to-b
from-sky-50/70
via-white
to-white
"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Technologies I Use to Build Modern Software"
          description="A carefully selected ecosystem of technologies spanning frontend, backend, mobile, cloud, AI, databases, and IoT engineering."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="
group
relative
overflow-hidden
rounded-3xl
border border-sky-200
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
                {/* Top gradient bar */}
                <span
                  className="
absolute
left-0
top-0
h-1
w-full
scale-x-0
origin-left
bg-gradient-to-r
from-sky-500
to-cyan-500
transition-transform
duration-300
group-hover:scale-x-100
"
                />

                <div className="flex items-center gap-4">
                  <div
                    className="
grid
size-12
place-items-center
rounded-2xl
bg-gradient-to-br
from-sky-100
to-cyan-100
text-sky-600
transition-all
duration-300
group-hover:scale-110
group-hover:from-sky-500
group-hover:to-cyan-500
group-hover:text-white
"
                  >
                    <Icon className="size-5" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {m.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {m.items.map((item) => (
                    <span
                      key={item}
                      className="
rounded-full
border
border-sky-200
bg-sky-50
px-3
py-1.5
text-xs
font-medium
text-sky-700
transition-all
duration-300
group-hover:border-sky-300
group-hover:bg-sky-100
"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
