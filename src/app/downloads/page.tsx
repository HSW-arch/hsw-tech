"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const DOWNLOAD_CATEGORIES = [
  {
    dictKey: "downloads.cad" as const,
    desc: "DWG and DXF files for all product lines. Ready for integration into your BIM and CAD projects.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h4l4 4h6a2 2 0 012 2v10a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    dictKey: "downloads.catalog" as const,
    desc: "Complete product catalog with specifications, dimensions, and performance data. Updated quarterly.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    dictKey: "downloads.manual" as const,
    desc: "Installation guides, maintenance manuals, and technical data sheets for all product categories.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function DownloadsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t["downloads.title"]}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-brand-gray-light">
            Technical resources for engineers, architects, and procurement teams.
          </p>
        </div>
      </section>

      {/* Download cards 鈥?blueprint style */}
      <section className="relative bg-brand-light py-20">
        {/* Blueprint grid overlay */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="blueprint" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a3a5c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {DOWNLOAD_CATEGORIES.map(({ dictKey, desc, icon }) => (
              <div
                key={dictKey}
                className="flex flex-col items-center rounded-lg border border-brand-accent bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 text-brand-blue">{icon}</div>
                <h3 className="text-xl font-semibold text-brand-blue-dark">
                  {t[dictKey]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                  {desc}
                </p>
                <button
                  disabled
                  className="mt-6 rounded border border-brand-blue px-6 py-2 text-xs font-semibold uppercase tracking-wider text-brand-blue opacity-50 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="mt-10 text-center text-sm text-brand-gray">
            Download resources will be linked once the product pages are published.
          </p>
        </div>
      </section>
    </>
  );
}
