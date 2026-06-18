"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-tight">HSW</h3>
            <p className="mt-2 text-sm text-brand-gray-light leading-relaxed">
              Precision HVAC air distribution products. Engineered to spec. Delivered worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-light">
              {t["nav.products"]}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/products/diffusers" className="hover:text-white transition-colors">
                  {t["products.diffusers"]}
                </Link>
              </li>
              <li>
                <Link href="/products/ducts" className="hover:text-white transition-colors">
                  {t["products.ducts"]}
                </Link>
              </li>
              <li>
                <Link href="/products/dampers" className="hover:text-white transition-colors">
                  {t["products.dampers"]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gray-light">
              {t["nav.contact"]}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t["contact.submit"]}
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-white transition-colors">
                  {t["downloads.title"]}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-gray-dark pt-6 md:flex-row">
          <p className="text-xs text-brand-gray-light">
            &copy; {new Date().getFullYear()} HSW. {t["footer.rights"]}
          </p>
          <div className="flex gap-4 text-xs text-brand-gray-light">
            <Link href="#" className="hover:text-white transition-colors">
              {t["footer.privacy"]}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t["footer.terms"]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
