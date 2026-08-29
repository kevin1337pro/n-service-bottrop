import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://n-service-bottrop.de"),
  title: {
    default: "N-Service Bottrop | Service rund ums Haus",
    template: "%s | N-Service Bottrop",
  },
  description:
    "Entrümpelung, Gartenpflege, Reinigung, Hausmeisterservice und Transporte in Bottrop-Kirchhellen und Umgebung.",
  keywords: [
    "Entrümpelung Bottrop",
    "Haushaltsauflösung Bottrop",
    "Gartenpflege Kirchhellen",
    "Hausmeisterservice Bottrop",
    "Reinigung Bottrop",
    "Transport Bottrop",
  ],
  authors: [{ name: "N-Service, Viktor Nesterenko" }],
  creator: "N-Service",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon-32.png",
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "N-Service Bottrop",
    title: "N-Service – Alles rund ums Haus",
    description:
      "Entrümpelung, Garten, Reinigung, Hausmeisterservice und Transporte in Bottrop-Kirchhellen & Umgebung.",
    images: [{ url: "/og.png", width: 1744, height: 910, alt: "N-Service – Alles rund ums Haus in Bottrop-Kirchhellen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "N-Service – Alles rund ums Haus",
    description: "Zuverlässiger Service in Bottrop-Kirchhellen & Umgebung.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#171b1d",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
