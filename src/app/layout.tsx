import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

import { eventConfig } from "@/config/event";

export const metadata: Metadata = {
  title: `Holy Baptism of ${eventConfig.baby.childName} | Invitation`,
  description: `With joyful hearts, we invite you to celebrate the Holy Sacrament of Baptism of ${eventConfig.baby.childName}.`,
  keywords: ["Baptism", eventConfig.baby.childName, "Christening", eventConfig.baptism.churchName, eventConfig.baptism.state],
  authors: [{ name: `${eventConfig.parents.father} & ${eventConfig.parents.mother}` }],
  openGraph: {
    title: `Holy Baptism of ${eventConfig.baby.childName} | Invitation`,
    description: `With joyful hearts, we invite you to celebrate the Holy Sacrament of Baptism of ${eventConfig.baby.childName} on ${eventConfig.baptism.date}.`,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-warm-ivory text-deep-charcoal selection:bg-champagne-gold/20 selection:text-deep-charcoal">
        {children}
      </body>
    </html>
  );
}
