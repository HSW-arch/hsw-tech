"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import en, { type Dictionary } from "./dictionaries/en";
import zh from "./dictionaries/zh";

type Locale = "en" | "zh";

const dictionaries: Record<Locale, Dictionary> = { en, zh };

interface LanguageContextType {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "zh" : "en"));
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>");
  }
  return ctx;
}
