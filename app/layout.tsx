import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogaru Cătălin · Computer Science & IT Student",
  description:
    "Personal portfolio with machine learning, computer vision, and full stack development projects. CV, experience, and technical work.",
  icons: {
    icon: "/dogarufavicon.webp",
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
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
