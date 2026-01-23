import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SilkRoad Health - World-Class Healthcare in Beijing at 70% Less",
  description: "Access top-tier Beijing hospitals for cardiac surgery, neurosurgery, oncology, IVF and more. Save 60-85% compared to US/UK prices with world-renowned specialists. Professional medical tourism services including patient accompaniment, medical translation, VIP registration, and travel arrangements.",
  keywords: "medical tourism, Beijing hospitals, healthcare China, heart surgery Beijing, cancer treatment China, IVF Beijing, medical travel, patient accompaniment, medical translation",
  openGraph: {
    title: "SilkRoad Health - World-Class Healthcare in Beijing",
    description: "Save 60-85% on medical procedures with top specialists at premier Beijing hospitals. Comprehensive medical tourism services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
