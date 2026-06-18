"use client";

import { useLanguage } from "@/i18n/LanguageContext";

const STORY_PARAGRAPHS = [
  "HSW was founded with a singular mission: to deliver precision-engineered HVAC air distribution products that meet the most demanding international standards. What began as a small workshop has grown into a specialized manufacturing facility serving clients across Asia, Europe, and the Americas.",
  "Our engineering team combines decades of hands-on experience with modern CAD-driven design. Every product 鈥?from the simplest grille to the most complex custom damper 鈥?is modeled, tested, and refined before it reaches the production floor.",
  "Today, HSW supplies over 28 product variants across three core lines: air diffusers, ducts, and volume dampers. We take pride in our ability to say 'yes' to custom specifications that larger manufacturers would decline.",
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t["about.title"]}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-brand-gray-light">
            Precision engineering. Global standards. Custom capability.
          </p>
        </div>
      </section>

      {/* Story 鈥?two-column layout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue md:text-4xl">
            {t["about.story"]}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {STORY_PARAGRAPHS.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-brand-gray"
                >
                  {para}
                </p>
              ))}
            </div>
            {/* Placeholder for facility image */}
            <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-brand-gray-light bg-brand-light p-12">
              <p className="text-sm text-brand-gray">
                Factory Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility 鈥?full-width dark transition */}
      <section className="bg-brand-blue py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t["about.facility"]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-gray-light">
            Our production facility is equipped with CNC punching, laser cutting, and automated assembly lines. We maintain strict ISO-compliant quality control at every stage 鈥?from raw aluminum extrusion to final surface finishing.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue md:text-4xl">
            {t["about.certifications"]}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "ISO 9001", desc: "Quality Management System" },
              { title: "CE Marking", desc: "European Conformity" },
              { title: "SGS Testing", desc: "Third-Party Verification" },
            ].map((cert) => (
              <div
                key={cert.title}
                className="rounded-lg border border-brand-accent bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-xl font-bold text-brand-blue">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-brand-gray">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
