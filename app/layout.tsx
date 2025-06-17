import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "San Ramon Tamil School",
  description: "dedicated to teaching the Tamil language and promoting Tamil culture to students of all ages and proficiency levels—from beginners to advanced learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-screen no-overflow">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen no-overflow`}
      >
        {children}
      </body>
    </html>
  );
}
