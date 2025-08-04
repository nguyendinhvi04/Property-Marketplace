
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import SessionClientProvider from "./providers/SessionClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bất Động Sản ",
  description: "Đầu tư và mua bán bất động sản toàn quốc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} font-sans antialiased bg-gradient-to-br from-[#ef4444] via-[#18181b] to-[#18181b]`}>
        <Header />
        <SessionClientProvider>{children}</SessionClientProvider>
        <Footer />
      </body>
    </html>
  );
}
