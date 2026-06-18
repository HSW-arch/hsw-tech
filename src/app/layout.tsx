import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HSW 鈥?Precision HVAC Solutions",
    template: "%s | HSW",
  },
  description:
    "Custom-sized air diffusers, ducts, and dampers engineered for global standards. CAD-driven design. Worldwide delivery.",
  keywords: [
    "air diffuser",
    "HVAC duct",
    "volume damper",
    "aluminum diffuser",
    "custom HVAC",
    "HSW",
    "HVAC manufacturer",
    "air distribution products",
  ],
  authors: [{ name: "HSW" }],
  creator: "HSW",
  robots: "index, follow",
  openGraph: {
    title: "HSW 鈥?Precision HVAC Solutions",
    description:
      "Custom-sized air diffusers, ducts, and dampers engineered for global standards.",
    type: "website",
    locale: "en_US",
    siteName: "HSW",
  },
  twitter: {
    card: "summary_large_image",
    title: "HSW 鈥?Precision HVAC Solutions",
    description: "Custom-sized air diffusers, ducts, and dampers.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
