import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhyNotDev | Custom Software & Web Development Agency",
  description: "WhyNotDev is a leading digital solutions provider and IT agency specializing in website design, web applications, custom software, and MVP creation for startups.",
  keywords: ["WhyNotDev", "software studio", "web development agency", "custom software", "mobile apps", "IT company", "website design"],
  openGraph: {
    title: "WhyNotDev | Custom Software & Web Development",
    description: "We help businesses and organizations turn ideas into reliable digital products that solve real problems.",
    url: "https://whynotdev.in",
    siteName: "WhyNotDev",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  }
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
