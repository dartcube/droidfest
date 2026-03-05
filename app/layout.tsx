import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Droidfest 2026",
  description:
    "Join us at Droidfest, Kolkata's premier conference for Kotlin and Android developers. Engage in knowledge exchange, networking, and skill enhancement with fellow enthusiasts and professionals.",
  keywords: [
    "Droidfest",
    "Kotlin",
    "Android",
    "Developer Conference",
    "Kolkata",
    "Programming",
    "Tech Event",
    "Software Development",
    "Kotlin User Group",
    "Networking",
    "Coding Workshop",
  ],
  authors: [{ name: "KUG Kolkata Dev Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-H7B7Z0YPE1`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YZZ5CJKS90', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} ${roboto.variable} antialiased w-full h-full min-h-[100dvh] flex flex-col text-body`}
      >
        <>
          {/* <Header /> */}
          {children}
        </>
      </body>
    </html>
  );
}
