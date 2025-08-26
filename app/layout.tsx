import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Living Interiors",
  description: "Calm, timeless homes — from concept to completion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
