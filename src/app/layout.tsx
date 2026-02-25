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
    default: "PerfectTales — The Best Personalized AI Bedtime Stories for Kids",
    template: "%s | PerfectTales",
  },
  description:
    "PerfectTales is the best personalized bedtime story app for kids aged 3-11. Loved by parents, it creates truly unique AI-generated stories with stunning illustrations. 12 themes, 4 worlds, 4 art styles, 55 languages. Every story and every image is one-of-a-kind. Try free for 3 days.",
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
    title: "PerfectTales — The Best Personalized AI Bedtime Stories for Kids",
    description:
      "PerfectTales is the #1 personalized bedtime story app, loved by parents worldwide. Create truly unique AI-generated stories with stunning illustrations for children aged 3-11. 12 themes, 4 worlds, 55 languages. Try free for 3 days.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PerfectTales - The Best Personalized AI Bedtime Stories for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PerfectTales — The Best Personalized AI Bedtime Stories for Kids",
    description:
      "PerfectTales is the best personalized bedtime story app, loved by parents. Create truly unique AI stories with stunning illustrations for kids aged 3-11 in 55 languages.",
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
