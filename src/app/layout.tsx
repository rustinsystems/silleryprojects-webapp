import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.silleryprojects.co.za"),
  title: "Sillery Management Projects",
  description: "Enterprise Consulting and Infrastructure - Sillery Management Projects",
  keywords: ["construction management", "infrastructure", "consulting", "project management", "South Africa", "Sillery Management Projects"],
  authors: [{ name: "Sillery Management Projects" }],
  openGraph: {
    title: "Sillery Management Projects",
    description: "Enterprise Consulting and Infrastructure - Sillery Management Projects",
    url: "https://www.silleryprojects.co.za",
    siteName: "Sillery Management Projects",
    images: [
      {
        url: "/SPM LOGO.webp",
        width: 1200,
        height: 630,
        alt: "Sillery Management Projects Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sillery Management Projects",
    description: "Enterprise Consulting and Infrastructure - Sillery Management Projects",
    images: ["/SPM LOGO.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="watermark">demo by rustinsystems</div>
      </body>
    </html>
  );
}
