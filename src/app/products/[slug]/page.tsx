"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { PRODUCTS, CATEGORIES, type Category } from "@/data/products";

export default function ProductsPage() {
  const { t } = useLanguage();

  const categories = Object.entries(CATEGORIES) as [
    Category,
    (typeof CATEGORIES)[Category]
  ][];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t["products.title"]}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-brand-gray-light">
            28 product variants across air diffusers, ducts, and dampers 鈥?all available in custom sizes.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <section className="sticky top-[73px] z-40 border-b border-brand-accent bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3">
          {categories.map(([key, cat]) => (
            <a
              key={key}
              href={`#${key}`}
              className="whitespace-nowrap text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors"
            >
              {t[`products.${key}` as const]}
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      {categories.map(([key, cat]) => {
        const catProducts = PRODUCTS.filter((p) => p.category === key);
        return (
          <section key={key} id={key} className="scroll-mt-28 py-16">
            <div className="mx-auto max-w-7xl px-6">
              {/* Category header */}
              <div className="mb-10 flex items-end justify-between border-b border-brand-accent pb-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-brand-blue">
                    {t[`products.${key}` as const]}
                  </h2>
                  <p className="mt-1 text-sm text-brand-gray">
                    {t[`products.${key}Desc` as const]}
                  </p>
                </div>
                <span className="text-sm text-brand-gray">
                  {catProducts.length} models
                </span>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group flex flex-col rounded-lg border border-brand-accent bg-white p-6 shadow-sm transition-all hover:border-brand-blue hover:shadow-md hover:-translate-y-1"
                  >
                    {/* Image placeholder */}
                    <div className="flex h-40 items-center justify-center rounded bg-brand-light">
                      <span className="text-xs text-brand-gray text-center px-2">
                        {product.nameEn}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-4 flex flex-1 flex-col">
                      <h3 className="text-base font-semibold text-brand-blue-dark transition-colors group-hover:text-brand-blue">
                        {product.nameEn}
                      </h3>
                      <p className="mt-1 text-xs text-brand-gray">
                        {product.material}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-gray line-clamp-2">
                        {product.descriptionEn}
                      </p>

                      {/* Custom tag */}
                      <div className="mt-auto pt-4">
                        <span className="inline-block rounded bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
                          {t["product.customTag"]}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
