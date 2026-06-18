"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const NAV_KEYS = [
  { key: "nav.home" as const, href: "/" },
  { key: "nav.products" as const, href: "/products" },
  { key: "nav.about" as const, href: "/about" },
  { key: "nav.downloads" as const, href: "/downloads" },
  { key: "nav.contact" as const, href: "/contact" },
];

export default function Header() {
  const { t, toggleLocale, locale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-accent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-brand-blue"
        >
          HSW
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_KEYS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors"
            >
              {t[key]}
            </Link>
          ))}
          {/* Language switch */}
          <button
            onClick={toggleLocale}
            className="ml-4 rounded border border-brand-blue px-3 py-1 text-xs font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
          >
            {t["lang.switch"]}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-gray"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-accent bg-white px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {NAV_KEYS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-brand-gray hover:text-brand-blue transition-colors"
              >
                {t[key]}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLocale();
                setMobileOpen(false);
              }}
              className="mt-2 self-start rounded border border-brand-blue px-3 py-1 text-xs font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
            >
              {t["lang.switch"]}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
