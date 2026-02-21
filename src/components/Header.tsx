"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";

const navItems = [
  { label: "Home", labelJa: "ホーム", href: "/" },
  { label: "About", labelJa: "私たちについて", href: "/about" },
  { label: "Activities", labelJa: "活動", href: "/activities" },
  { label: "Education", labelJa: "教育", href: "/education" },
  { label: "Competition", labelJa: "大会", href: "/competition" },
  { label: "News & Events", labelJa: "ニュース", href: "/news-and-events" },
  { label: "Join", labelJa: "参加する", href: "/join" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* ── Header Bar — glass panel ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          open
            ? ""
            : scrolled
              ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/40"
              : "",
        ].join(" ")}
      >
        <div
          className={[
            "container mx-auto flex items-center justify-between px-6 transition-all duration-500",
            scrolled && !open ? "py-3" : "py-5",
          ].join(" ")}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-extrabold tracking-tight"
            onClick={close}
          >
            <Image
              src="/favicon.png"
              alt="IYNA Japan logo"
              width={28}
              height={28}
              priority
            />
            <span
              className={[
                "transition-colors duration-500",
                open ? "text-white" : "text-gray-900",
              ].join(" ")}
            >
              IYNA&nbsp;Japan
            </span>
          </Link>

          {/* Menu toggle */}
          <button
            className="relative z-50 flex items-center gap-3"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={[
                "hidden sm:inline text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-500",
                open ? "text-white/60" : "text-gray-500",
              ].join(" ")}
            >
              {open ? "Close" : "Menu"}
            </span>

            <div className="flex flex-col justify-center items-center w-10 h-10 gap-[6px]">
              <span
                className={[
                  "block h-[2px] w-6 rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]",
                  open
                    ? "translate-y-[8px] rotate-45 bg-white"
                    : "bg-gray-700",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]",
                  open
                    ? "w-0 opacity-0 bg-white"
                    : "w-6 opacity-100 bg-gray-700",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-[2px] w-6 rounded-full transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)]",
                  open
                    ? "-translate-y-[8px] -rotate-45 bg-white"
                    : "bg-gray-700",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── Fullscreen Overlay — neural space ── */}
      <div
        className={[
          "fixed inset-0 z-40",
          open ? "visible" : "invisible",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Dark indigo background — MRI scan darkness */}
        <div
          className={[
            "absolute inset-0 bg-[#080a1a] origin-right transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]",
            open ? "scale-x-100" : "scale-x-0",
          ].join(" ")}
        />

        {/* Ambient glow — distant neural activity */}
        <div
          className={[
            "absolute inset-0 pointer-events-none transition-opacity duration-1000",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(120, 40, 100, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(60, 30, 120, 0.08) 0%, transparent 50%)",
          }}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-20 lg:items-center">
            {/* Left — Navigation (neural pathways) */}
            <nav>
              <ul>
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className={[
                          "group flex items-baseline gap-4 sm:gap-6 py-3 lg:py-4 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]",
                          open
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8",
                        ].join(" ")}
                        style={{
                          transitionDelay: open ? `${200 + i * 70}ms` : "0ms",
                        }}
                      >
                        {/* Node number */}
                        <span
                          className={[
                            "text-[11px] font-mono tabular-nums w-5 shrink-0 transition-colors duration-300",
                            isActive
                              ? "text-pink-400"
                              : "text-pink-400/25 group-hover:text-pink-400/50",
                          ].join(" ")}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Label — synapse glow on hover */}
                        <span
                          className={[
                            "text-2xl sm:text-3xl lg:text-5xl font-bold transition-all duration-300",
                            isActive
                              ? "text-pink-300 [text-shadow:0_0_30px_rgba(236,72,153,0.4)]"
                              : "text-white/90 group-hover:text-pink-200 group-hover:[text-shadow:0_0_25px_rgba(236,72,153,0.25)]",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>

                        {/* Japanese label */}
                        <span
                          className={[
                            "text-xs sm:text-sm transition-colors duration-300",
                            isActive
                              ? "text-pink-400/40"
                              : "text-white/15 group-hover:text-white/30",
                          ].join(" ")}
                        >
                          {item.labelJa}
                        </span>

                        {/* Arrow */}
                        <span className="ml-auto text-pink-400/50 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg lg:text-2xl">
                          →
                        </span>
                      </Link>

                      {/* Axon divider — signal gradient */}
                      <div
                        className={[
                          "h-px origin-left transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]",
                          open ? "scale-x-100" : "scale-x-0",
                        ].join(" ")}
                        style={{
                          transitionDelay: open
                            ? `${250 + i * 70}ms`
                            : "0ms",
                          background:
                            "linear-gradient(to right, rgba(236, 72, 153, 0.15), rgba(255, 255, 255, 0.04) 50%, transparent)",
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Right — Info panel (desktop) */}
            <aside
              className={[
                "hidden lg:flex flex-col gap-10 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]",
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: open ? "600ms" : "0ms" }}
            >
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-3">
                  Contact
                </p>
                <a
                  href="mailto:iynajapan2024@gmail.com"
                  className="text-sm text-white/35 hover:text-pink-300/70 transition-colors duration-300"
                >
                  iynajapan2024@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-3">
                  Social
                </p>
                <div className="flex gap-4">
                  {[
                    { href: "https://twitter.com/iynajapan", icon: Icons.twitter, label: "Twitter" },
                    { href: "https://www.instagram.com/iyna_japan/", icon: Icons.instagram, label: "Instagram" },
                    { href: "https://note.com/iynajapan", icon: Icons.note, label: "Note" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-white/20 hover:text-pink-300/60 transition-colors duration-300"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-3">
                  Location
                </p>
                <p className="text-sm text-white/35">Tokyo, Japan</p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
