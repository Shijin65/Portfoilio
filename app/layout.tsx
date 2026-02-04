import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shijin Puthur | Software Engineer",
  description: "Portfolio of Shijin Puthur, a Software Engineer expert in MERN, Postgres, and Next.js.",
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
