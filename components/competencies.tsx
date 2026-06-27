"use client";

import { useState } from "react";
import {
  Boxes,
  Server,
  Sparkle,
  TestTube2,
  ShieldCheck,
  DatabaseZap,
  Container,
  Workflow,
  ChevronRight,
  ClipboardList,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const groups = [
  {
    icon: Boxes,
    title: "Software Architecture",
    accent: "var(--primary)",
    items: [
      "Clean Architecture",
      "Layered Architecture",
      "MVVM",
      "MVC",
      "Microservices",
      "SOLID Principles",
      "Design Patterns",
      "Caching Strategies",
    ],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    accent: "var(--cyan)",
    items: [
      "REST API Design",
      "REST Principles",
      "Authentication",
      "Authorization",
      "JWT",
      "OAuth2",
      "API Security",
      "API Gateway",
      "Background Jobs",
      "Scalable Systems",
    ],
  },
  {
    icon: Sparkle,
    title: "Software Quality",
    accent: "var(--teal)",
    items: [
      "Clean Code",
      "Code Reviews",
      "Refactoring",
      "Technical Documentation",
      "API Documentation",
      "Maintainability",
    ],
  },
  {
    icon: TestTube2,
    title: "Testing",
    accent: "var(--violet)",
    items: [
      "Unit Testing",
      "Integration Testing",
      "Functional Testing",
      "Regression Testing",
      "Manual Testing",
      "UI Testing",
      "Automated Testing",
      "Postman",
      "Gherkin",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    accent: "var(--primary)",
    items: ["JWT", "OAuth2", "RBAC", "Input Validation", "Spring Security"],
  },
  {
    icon: DatabaseZap,
    title: "Database Engineering",
    accent: "var(--cyan)",
    items: [
      "Data Modeling",
      "Query Optimization",
      "Transactions",
      "Indexing",
      "Performance Optimization",
    ],
  },
  {
    icon: Container,
    title: "Cloud & DevOps",
    accent: "var(--teal)",
    items: [
      "Docker",
      "CI/CD",
      "Git Flow",
      "GitHub Actions",
      "Deployment",
      "Kubernetes",
    ],
  },
  {
    icon: Workflow,
    title: "System Design",
    accent: "var(--violet)",
    items: [
      "Scalability",
      "Event-Driven Systems",
      "Distributed Systems",
      "Message Queues",
      "Load Balancing",
      "Caching",
      ,
    ],
  },
  {
    icon: ClipboardList,
    title: "Engineering Practices",
    accent: "var(--primary)",
    items: [
      "Agile / Scrum",
      "Sprint Planning",
      "Technical Documentation",
      "UI / UX Documentation",
      "Figma",
      "Debugging",
    ],
  },
];

export function Competencies() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="competencies" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-30"
        aria-hidden
      />

      <div
        className="
absolute inset-0 -z-10
bg-gradient-to-b
from-sky-50/70
via-white
to-white
"
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Capabilities"
          title="Engineering Competencies"
          description="Professional engineering skills organized as modular robotics components. Select a module to inspect its capabilities."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => {
            const Icon = g.icon;
            const isActive = active === i;
            return (
              <Reveal key={g.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="
group
flex
h-full
w-full
flex-col
rounded-3xl
border
border-sky-200
bg-white/80
backdrop-blur-xl
p-6
text-left
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-sky-400
hover:shadow-xl
hover:shadow-sky-200/40
"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
grid size-12
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
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <span
                      className={cn(
                        "size-2 rounded-full transition-all",
                        isActive
                          ? "bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,.6)]"
                          : "bg-sky-200",
                      )}
                      style={{ backgroundColor: g.accent }}
                    />
                  </div>

                  <h3
                    className="
mt-5
text-lg
font-bold
text-slate-900
"
                  >
                    {g.title}
                  </h3>

                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <ul className="overflow-hidden">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 py-0.5 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            className="
size-4
text-sky-500
transition-transform
group-hover:translate-x-0.5
"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isActive ? (
                    <p
                      className="
mt-2
text-sm
leading-relaxed
text-slate-500
"
                    >
                      {g.items.length} capabilities
                    </p>
                  ) : null}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
