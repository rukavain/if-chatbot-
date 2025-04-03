import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import { defaultMetadata } from "./lib/meta";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "if(chatbot)",
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter flex flex-col justify-center items-center h-max  w-full ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
