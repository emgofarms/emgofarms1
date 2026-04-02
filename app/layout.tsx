import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

// app/layout.tsx
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Only one metadata declaration
export const metadata = {
  title: 'Emgo Farms | Fresh Farm Products in Nigeria',
  description: 'Emgo Farms provides fresh and quality farm products. Visit us at emgo-farms.com',
  keywords: ['farm', 'Nigeria', 'fresh produce', 'Emgo Farms'],
  openGraph: {
    title: 'Emgo Farms',
    description: 'Fresh Farm Products in Nigeria',
    url: 'https://emgo-farms.com',
    siteName: 'Emgo Farms',
    images: [
      {
        url: 'https://emgo-farms.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-gray-800 font-sans flex flex-col">
        {/* Navbar is a client component */}
        <Navbar />

        {/* Main content */}
        <main className="grow mt-18">{children}</main>
        <GoogleAnalytics gaId="G-NT4VS27W94" />

        {/* Footer is a client component */}
        <Footer />
      </body>
    </html>
  );
}
