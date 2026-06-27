"use client";

import { Hexagon, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-sky-200 bg-gradient-to-b from-white to-sky-50/70">
      {/* top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 sm:flex-row sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-300/40">
            <Hexagon className="size-5" strokeWidth={2.25} />
          </span>

          <div className="leading-tight">
            <p className="font-heading text-sm font-bold tracking-wide text-slate-900">
              JULIUS BASAS
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-sky-500">
              Full Stack Engineer
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="order-last text-center text-sm text-slate-500 sm:order-none">
          © {new Date().getFullYear()} Julius Basas.
          <span className="ml-1 text-sky-600 font-medium">
            Designed & Engineered with Passion.
          </span>
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            {
              icon: GithubIcon,
              href: "https://github.com/yourusername",
              label: "GitHub",
            },
            {
              icon: LinkedinIcon,
              href: "https://linkedin.com/in/yourusername",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:your@email.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="
  group
  grid size-11 place-items-center
  rounded-xl
  border border-sky-100
  bg-gradient-to-br from-white to-sky-50
  text-sky-500
  shadow-md shadow-sky-100/50
  transition-all duration-300
  hover:-translate-y-1
  hover:scale-105
  hover:border-sky-400
  hover:from-sky-500
  hover:to-cyan-500
  hover:text-white
  hover:shadow-xl
  hover:shadow-sky-300/40"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
