import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Fitra Maulana",
  description: "Portfolio Website",
};

const jetBrains = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={jetBrains.className}>{children}</body>
    </html>
  );
}
