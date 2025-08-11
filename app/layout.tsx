import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";



const jost = Jost({
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: "CH-1ST",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={jost.className}>
            <ReactLenis root>

                  {children}

            </ReactLenis>
        </body>
    </html>
  );
}
