import type { Metadata } from "next";
import "@/styles/globals.css";
import Headers from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "fake store",
  description: "e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
