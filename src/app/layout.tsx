import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "MarketX | %s",
    default: "MarketX | NextJS SaaS Landing",
  },
  description:
    "MarketX is a modern SaaS Landing Page template built with NextJS. It's designed to provide a seamless and engaging experience for showcasing software products, especially those in the tech and startup niches.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://MarketX.nfteam.eu/"),
  openGraph: {
    title: "MarketX | NextJS SaaS Landing",
    siteName: "MarketX | NextJS SaaS Landing",
    description:
      "MarketX is a modern SaaS Landing Page template built with NextJS. It's designed to provide a seamless and engaging experience for showcasing software products, especially those in the tech and startup niches.",
    url: "https://MarketX.nfteam.eu/",
    type: "website",
    locale: "hu_HU",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "MarketX | NextJS SaaS Landing",
      },
    ],
  },
  twitter: {
    title: "MarketX | NextJS SaaS Landing",
    creator: "@nfteam_eu",
    site: "@nfteam_eu",
    description:
      "MarketX is a modern SaaS Landing Page template built with NextJS. It's designed to provide a seamless and engaging experience for showcasing software products, especially those in the tech and startup niches.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "MarketX | NextJS SaaS Landing",
      },
    ],
  },
  alternates: {
    canonical: "https://MarketX.nfteam.eu/",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
