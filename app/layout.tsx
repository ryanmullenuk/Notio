import type { Metadata, Viewport } from "next";
import { MotionSystem } from "./components/MotionSystem";
import { ParticleBackground } from "./components/ParticleBackground";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://notio.uk"),
  title: {
    default: "Notio Consulting | Life Safety & Compliance",
    template: "%s",
  },
  description:
    "Independent life-safety and compliance consultancy for UK housing providers, RTM companies, residents and families.",
  applicationName: "Notio Consulting",
  authors: [{ name: "Notio Consulting" }],
  creator: "Notio Consulting",
  publisher: "Notio Consulting",
  category: "Life safety consultancy",
  icons: {
    icon: "/notio-logo.jpg",
    shortcut: "/notio-logo.jpg",
    apple: "/notio-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Notio Consulting",
    title: "Notio Consulting | Clear decisions. Safer homes.",
    description:
      "Independent advice across warden call, telecare, fire safety, door entry and digital transition.",
    url: "https://notio.uk",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 933,
        alt: "Notio Consulting — Clear decisions. Safer homes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notio Consulting | Clear decisions. Safer homes.",
    description:
      "Independent advice across warden call, telecare, fire safety, door entry and digital transition.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171716",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <ParticleBackground />
        <MotionSystem />
        {children}
      </body>
    </html>
  );
}
