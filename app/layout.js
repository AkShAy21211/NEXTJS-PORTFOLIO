"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tidioScript = process.env.TIDIO;

export default function RootLayout({ children }) {
  useEffect(() => {
    if (tidioScript) {
      const script = document.createElement("script");
      script.src = tidioScript;
      script.async = true;
      document.body.appendChild(script);
      console.log(script);
      
    } else {
      console.error("Tidio script URL is not defined.");
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
