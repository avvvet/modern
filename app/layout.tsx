import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gemstonbit",
  description: "Ethiopian gemstone market place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
