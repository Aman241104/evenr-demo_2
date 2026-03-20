import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/providers/ClientLayout";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zingblissevents.com"),
  title: {
    default: "Zing Bliss Events | Luxury Event Management Prestige Edition",
    template: "%s | Zing Bliss Events"
  },
  description: "Bespoke event orchestration for high-net-worth individuals. Specialized in luxury weddings, corporate galas, and private heritage celebrations.",
  keywords: ["luxury events", "event planner", "wedding orchestrator", "prestige management", "bespoke celebrations"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zingblissevents.com",
    siteName: "Zing Bliss Events",
    title: "Zing Bliss Events | Prestige Edition",
    description: "Orchestrating high-fidelity celebrations for the world's most discerning individuals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zing Bliss Events Prestige",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zing Bliss Events | Prestige Edition",
    description: "High-end, bespoke event management for luxury celebrations.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased cursor-none-on-desktop`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
