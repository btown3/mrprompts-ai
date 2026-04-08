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
  title: "MrPrompts — AI Knowledge Bases That Actually Compound",
  description:
    "Pre-built LLM knowledge bases, wiki vaults, and guides. Stop starting from scratch every time you open a chat window.",
  openGraph: {
    title: "MrPrompts — AI Knowledge Bases That Actually Compound",
    description:
      "Pre-built LLM knowledge bases, wiki vaults, and guides that get smarter every time you use them.",
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
