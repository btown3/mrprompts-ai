import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MrPrompts — Build with AI. No Dev Background Required.",
  description:
    "Frameworks, tools, and step-by-step guides for smart professionals who want to build with AI, not just read about it.",
  openGraph: {
    title: "MrPrompts — Build with AI. No Dev Background Required.",
    description:
      "Frameworks, tools, and step-by-step guides for smart professionals who want to build with AI.",
    url: "https://mrprompts.ai",
    siteName: "MrPrompts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MrPrompts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
