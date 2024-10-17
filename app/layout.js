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

// Accessing environment variable with the correct prefix
const tidioScript = process.env.NEXT_PUBLIC_TIDIO; // Ensure you have defined this in your .env file


export default function RootLayout({ children }) {
  useEffect(() => {
    if (tidioScript) {
      const script = document.createElement("script");
      script.src = tidioScript; // The correct script URL
      script.async = true;
      document.body.appendChild(script);
      console.log("Tidio script loaded:", script);
    } else {
      console.error("Tidio script URL is not defined.");
    }
  }, [tidioScript]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
