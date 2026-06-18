"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojzzvqd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {t["contact.title"]}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-brand-gray-light">
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          {submitted ? (
            /* Success state */
            <div className="rounded-lg border border-green-200 bg-green-50 p-10 text-center">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="mt-4 text-xl font-semibold text-green-800">
                {t["contact.success"]}
              </h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-gray-dark"
                >
                  {t["contact.name"]}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded border border-brand-accent bg-white px-4 py-3 text-sm text-brand-blue-dark placeholder:text-brand-gray-light focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-gray-dark"
                >
                  {t["contact.email"]}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded border border-brand-accent bg-white px-4 py-3 text-sm text-brand-blue-dark placeholder:text-brand-gray-light focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-gray-dark"
                >
                  {t["contact.message"]}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="mt-1 block w-full rounded border border-brand-accent bg-white px-4 py-3 text-sm text-brand-blue-dark placeholder:text-brand-gray-light focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue resize-y"
                  placeholder="Describe your product requirements, quantities, or technical questions..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : t["contact.submit"]}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
