import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sillery Projects",
  description: "Enterprise Consulting and Infrastructure - Sillery Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body>
        {children}
        <div className="watermark">demo by rustinsystems</div>
      </body>
    </html>
  );
}
