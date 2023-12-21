import type { Metadata } from "next";

//Font
import { Quicksand } from "next/font/google";

import "./globals.css";
const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Marvel Memory Game",
  description: "Game for fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
