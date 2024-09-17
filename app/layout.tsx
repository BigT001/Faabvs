import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Credentials from "./_components/Credentials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faabvs - Virtual Assistant Services - Executive Virtual Assistant",
  description: "Professional virtual assistant services to help you save time and boost productivity.",
  icons: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {" "}
          {/* Add padding-top here */}
          {children}
        </main>

        <Credentials />
        <Footer />
      </body>
    </html>
  );
}
