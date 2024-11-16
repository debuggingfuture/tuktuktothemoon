'use client'
import { UserProvider } from "@/components/UserProvider";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@coinbase/onchainkit/styles.css';

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tuk Tuk to the Moon",
//   description: "Decentralized patreon for creators & communities to fund what they love, together",
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
