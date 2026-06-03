import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Murmur — Speak. It types itself.",
  description:
    "Murmur is a macOS dictation app that gets out of your way. Press a key, speak, release — your words land exactly where you're typing.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Murmur — Speak. It types itself.",
    description:
      "Murmur is a macOS dictation app that gets out of your way. Press a key, speak, release — your words land exactly where you're typing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0d0d0d] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
