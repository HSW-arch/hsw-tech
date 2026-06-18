"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== Hero with blueprint grid texture ===== */}
      <section className="relative flex min-h-[85vh] items-center bg-brand-blue-dark overflow-hidden">
        {/* Blueprint grid SVG */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="heroGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="heroGridLarge"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <rect width="200" height="200" fill="url(#heroGrid)" />
              <path
                d="M 200 0 L 0 0 0 200"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGridLarge)" />
          {/* Radial fade at edges */}
          <defs>
            <radialGradient id="heroFade">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#0f2440" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroFade)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl animate-[fadeUp_0.8s_ease-out]">
            {t["hero.title"]}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-gray-light md:text-xl animate-[fadeUp_0.8s_0.15s_ease-out_both]">
            {t["hero.subtitle"]}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-[fadeUp_0.8s_0.3s_ease-out_both]">
            <Link
              href="/products"
              className="rounded bg-white px-8 py-3 text-sm font-semibold text-brand-blue transition-all hover:bg-brand-light hover:shadow-lg hover:-translate-y-0.5"
            >
              {t["hero.cta"]}
            </Link>
            <Link
              href="/contact"
              className="rounded border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50"
            >
              {t["hero.quote"]}
            </Link>
          </div>
        </div>

        {/* Bottom gradient to white */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== About snippet ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue md:text-4xl">
            {t["home.aboutTitle"]}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-gray">
            {t["home.aboutText"]}
          </p>
        </div>
      </section>

      {/* ===== Product categories ===== */}
      <section className="bg-brand-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue md:text-4xl">
            {t["home.productsTitle"]}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {(
              [
                {
                  key: "products.diffusers" as const,
                  desc: "products.diffusersDesc" as const,
                  href: "/products",
                },
                {
                  key: "products.ducts" as const,
                  desc: "products.ductsDesc" as const,
                  href: "/products",
                },
                {
                  key: "products.dampers" as const,
                  desc: "products.dampersDesc" as const,
                  href: "/products",
                },
              ]
            ).map(({ key, desc, href }) => (
              <Link
                key={key}
                href={href}
                className="group rounded-lg border border-transparent bg-white p-8 shadow-sm transition-all hover:border-brand-blue hover:shadow-md hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-brand-blue transition-colors group-hover:text-brand-blue-light">
                  {t[key]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {t[desc]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Advantages ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue md:text-4xl">
            {t["home.advantagesTitle"]}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {(
              [
                {
                  key: "home.advantages.custom" as const,
                  desc: "home.advantages.customDesc" as const,
                },
                {
                  key: "home.advantages.quality" as const,
                  desc: "home.advantages.qualityDesc" as const,
                },
                {
                  key: "home.advantages.global" as const,
                  desc: "home.advantages.globalDesc" as const,
                },
              ]
            ).map(({ key, desc }) => (
              <div key={key} className="border-l-4 border-brand-blue pl-6">
                <h3 className="text-lg font-semibold text-brand-blue-dark">
                  {t[key]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {t[desc]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-blue py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {t["hero.quote"]}
          </h2>
          <p className="mt-4 text-brand-gray-light">{t["hero.subtitle"]}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded bg-white px-8 py-3 text-sm font-semibold text-brand-blue transition-all hover:bg-brand-light hover:shadow-lg hover:-translate-y-0.5"
          >
            {t["contact.submit"]}
          </Link>
        </div>
      </section>
    </>
  );
}
