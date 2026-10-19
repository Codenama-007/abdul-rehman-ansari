import type { Metadata } from "next";
import { Josefin_Sans, JetBrains_Mono } from "next/font/google";
import { profile } from "@/app/content";
import { SiteNav } from "@/app/components/site-nav";
import { SiteFooter } from "@/app/components/site-footer";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${jetbrains.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-amber"
        >
          Skip to content
        </a>

        {/* Decorative cosmic layers. Negative z-index keeps them behind flow content. */}
        <div aria-hidden="true" className="site-backdrop fixed inset-0 -z-30" />
        <div
          aria-hidden="true"
          className="starfield animate-twinkle fixed inset-0 -z-20"
        />
        <div aria-hidden="true" className="kente-grid fixed inset-0 -z-10" />

        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
