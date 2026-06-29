import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogaru Cătălin · Computer Science & IT Student",
  description:
    "Portofoliu personal — proiecte de machine learning, computer vision și dezvoltare full-stack. CV, experiență și proiecte tehnice.",
  icons: {
    icon: "/dogarufavicon.png",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={GeistSans.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
