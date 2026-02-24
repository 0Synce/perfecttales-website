import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://perfecttales.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PerfectTales — Personalized AI Bedtime Stories for Kids",
    template: "%s | PerfectTales",
  },
  description:
    "Create magical, personalized bedtime stories for children aged 3-11. AI-generated tales with your child's name, beautiful illustrations, 8 themes, 4 art styles, and 55 languages. Free on the App Store.",
  keywords: [
    "bedtime stories",
    "personalized bedtime stories",
    "children stories app",
    "kids bedtime stories",
    "AI stories for kids",
    "bedtime story app",
    "personalized children books",
    "kids story generator",
    "bedtime routine",
    "children bedtime app",
    "illustrated stories for kids",
    "story time app",
    "kids sleep stories",
    "toddler bedtime stories",
    "custom bedtime stories",
    "PerfectTales",
    "bedtime stories for toddlers",
    "bedtime stories for preschoolers",
    "AI bedtime story generator",
    "personalized story app",
    "children educational stories",
    "calming stories for kids",
    "adventure stories for kids",
  ],
  authors: [{ name: "Simon Majar" }],
  creator: "Simon Majar",
  publisher: "PerfectTales",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PerfectTales",
    title: "PerfectTales — Personalized AI Bedtime Stories for Kids",
    description:
      "Create magical, personalized bedtime stories for children aged 3-11. AI-generated tales with beautiful illustrations in 55 languages. Free on the App Store.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PerfectTales - Personalized AI Bedtime Stories for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PerfectTales — Personalized AI Bedtime Stories for Kids",
    description:
      "Create magical, personalized bedtime stories for children aged 3-11. AI-generated tales with beautiful illustrations in 55 languages.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: siteUrl,
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/perfecttales-bedtime-stories/id6757753343",
      app_store_id: "6757753343",
      app_name: "PerfectTales - Bedtime Stories",
    },
  },
  category: "Entertainment",
  other: {
    "apple-itunes-app": "app-id=6757753343",
    "application-name": "PerfectTales",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
