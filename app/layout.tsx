import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shijin-puthur.com'),
  title: "Shijin Puthur",
  description: "Portfolio of Shijin Puthur, a Full Stack Engineer with 2+ years of experience building scalable real-time applications using React, Next.js, Node.js and cloud technologies.",
  openGraph: {
    title: "Shijin Puthur | Full Stack Engineer",
    description: "Building production-grade systems using React, Next.js, Node.js and cloud technologies.",
    url: "https://shijin-puthur.com",
    siteName: "Shijin Puthur Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shijin Puthur Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
