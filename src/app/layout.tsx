import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firebase API Test",
  description: "Firebase API test",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Firebase API Test</title>
      </Head>
      <body className={`${inter.className} bg-gray-200 dark:bg-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
