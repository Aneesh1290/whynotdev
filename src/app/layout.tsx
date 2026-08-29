import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhyNotDev - Software Studio",
  description: "Dynamic website and client portal for WhyNotDev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
