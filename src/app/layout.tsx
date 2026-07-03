import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Onest } from "next/font/google";

import {
  generateMetadata,
  generateViewport,
} from "@/utils/seo/generate-page-metadata";
import { getSiteStructuredData } from "@/utils/seo/structured-data";

import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { LazyCookie } from "@/components/common/Cookie";
import { CustomCursor } from "@/components/common/CustomCursor";
import { EmberField } from "@/components/common/EmberField";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteStructuredData()),
          }}
        />
        <ScrollLayout>
          <AdaptiveGrid />
          <ReducedMotion />
          <LazyCookie />
          <AnimatedBackground />
          <EmberField />
          <CustomCursor />
          <ScrollProgress />
          <div className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </div>
        </ScrollLayout>
      </body>
    </html>
  );
}
