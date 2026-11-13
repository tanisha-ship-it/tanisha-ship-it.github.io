import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DialHost from "@/components/DialHost";
import "dialkit/styles.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";

const serif = localFont({
  variable: "--font-self-modern",
  src: [
    { path: "./fonts/SelfModern-Regular.woff2", weight: "300", style: "normal" },
    { path: "./fonts/SelfModern-Italic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/SelfModern-Text.woff2", weight: "400", style: "normal" },
  ],
});

const sans = localFont({
  variable: "--font-inter-display",
  src: [
    { path: "./fonts/InterDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/InterDisplay-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/InterDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InterDisplay-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/InterDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/InterDisplay-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/InterDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const grotesk = localFont({
  variable: "--font-space-grotesk",
  src: [
    { path: "./fonts/SpaceGrotesk-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/SpaceGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SpaceGrotesk-Medium.woff2", weight: "500", style: "normal" },
  ],
});

const mono = localFont({
  variable: "--font-dm-mono",
  src: [{ path: "./fonts/DMMono-Medium.woff2", weight: "500", style: "normal" }],
});

const pixel = localFont({
  variable: "--font-myrtille",
  src: [{ path: "./fonts/MyrtillePixel-Regular.woff2", weight: "400", style: "normal" }],
});

const mondwest = localFont({
  variable: "--font-mondwest",
  src: [{ path: "./fonts/PPMondwest-Regular.woff2", weight: "400", style: "normal" }],
});

const DESCRIPTION = "An AI-Native Behavioural Product Designer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: "Tanisha Raghav | Product Designer",
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    type: "website",
    title: "Tanisha Raghav | Product Designer",
    description: DESCRIPTION,
    images: ["/og-default.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = [serif, sans, grotesk, mono, pixel, mondwest].map((f) => f.variable).join(" ");

  return (
    <html lang="en" className={fonts}>
      <body className="antialiased">
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        {/* Live design controls: always on in development, ?dial=1 switches them on in the live site for you only. */}
        <DialHost />
      </body>
    </html>
  );
}
