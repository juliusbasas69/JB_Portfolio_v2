"use client";

import { useEffect, useState } from "react";
import { Menu, X, Hexagon, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "competencies", label: "Competencies" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isProjectsPage = pathname === "/projects";
  const isHomePage = pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            "glass flex items-center justify-between gap-4",
            "rounded-2xl border border-sky-200/70",
            "bg-white/70 px-4 py-3 backdrop-blur-xl",
            "shadow-[0_6px_24px_rgba(56,189,248,0.08)]",
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1"
            aria-label="Julius Basas — home"
          >
            <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-300/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Hexagon
                className="size-5"
                strokeWidth={2.25}
              />
            </span>

            <span className="flex flex-col text-left leading-none">
              <span className="font-heading text-sm font-bold tracking-wide text-slate-900">
                JULIUS BASAS
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-sky-500">
                Software Engineer
              </span>
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Projects */}
            <button
              type="button"
              onClick={() => router.push("/projects")}
              className={`hidden cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition-all duration-300 sm:inline-flex ${
                isProjectsPage
                  ? "border-sky-400 bg-sky-50 text-sky-600 shadow-sm shadow-sky-200/40"
                  : "border-sky-200 bg-white/70 text-sky-600 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50"
              }`}
            >
              Projects
            </button>

            {/* Let's Talk */}
            <button
              onClick={() => go("contact")}
              className="hidden cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sky-400/50 sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              Let&apos;s Talk
            </button>

            {/* Burger Menu */}
            {isHomePage && (
              <button
                onClick={() => setOpen((v) => !v)}
                className="grid size-10 cursor-pointer place-items-center rounded-xl border border-sky-200 bg-white/70 text-foreground backdrop-blur-xl transition-all hover:border-sky-400 hover:bg-sky-50"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            )}
          </div>
        </nav>

        {/* Menu */}
        {open && (
          <div className="glass mt-2 rounded-2xl border border-sky-200/70 bg-white/80 p-2 shadow-[0_12px_40px_rgba(56,189,248,0.12)] backdrop-blur-xl">
            <ul className="grid gap-1">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer",
                      active === id
                        ? "bg-sky-100 text-sky-700 shadow-sm"
                        : "text-slate-500 hover:bg-sky-50 hover:text-sky-700",
                    )}
                  >
                    <span>{label}</span>

                    {active === id && (
                      <span className="size-1.5 rounded-full bg-sky-500" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
