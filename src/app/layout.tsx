import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Onest } from "next/font/google";

import {
  generateMetadata,
  generateViewport,
} from "@/utils/seo/generate-page-metadata";
import { getSiteStructuredData } from "@/utils/seo/structured-data";

import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { LazyCookie } from "@/components/common/Cookie";
import { DeferredEffects } from "@/components/common/DeferredEffects";
import { AdaptiveGrid } from "@/components/common/grid";
import { PageTransition } from "@/components/common/PageTransition";
import { ReducedMotion } from "@/components/common/reduced-motion";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { ScrollLayout } from "@/layouts/scroll-layout";

import "@/app/globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

// Display face — mechanical grotesque for authority (headings).
const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

// Technical / utility face — the "datasheet" voice: norm codes, labels, stats.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${onest.variable} ${archivo.variable} ${jetbrainsMono.variable} bg-charcoal text-white`}>
        {/* Sans JavaScript, les animations d'apparition ne partent pas : on affiche le contenu. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteStructuredData()),
          }}
        />
        <ScrollLayout>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal"
          >
            Aller au contenu
          </a>
          <AdaptiveGrid />
          <ReducedMotion />
          <LazyCookie />
          <AnimatedBackground />
          <DeferredEffects />
          <ScrollProgress />
          <div className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </div>
        </ScrollLayout>
      </body>
    </html>
  );
}
