import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://ngodinhphuoc.site";
const title = "Ngo Dinh Phuoc | Full Stack Developer";
const description =
  "Full Stack Developer passionate about building exceptional digital experiences with React, Next.js, Node.js and modern technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ngo Dinh Phuoc",
  },
  description,
  keywords: [
    "Ngo Dinh Phuoc",
    "Ngô Phước",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ngo Dinh Phuoc", url: siteUrl }],
  creator: "Ngo Dinh Phuoc",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Ngo Dinh Phuoc",
    images: [
      {
        url: "/CVmain.png",
        width: 1200,
        height: 630,
        alt: "Ngo Dinh Phuoc - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/CVmain.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ngo Dinh Phuoc",
  alternateName: "Ngô Phước",
  url: siteUrl,
  image: `${siteUrl}/CVmain.png`,
  jobTitle: "Full Stack Developer",
  email: "mailto:ngodinhphuoc100@gmail.com",
  sameAs: ["https://github.com/Phuoctryhard"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[#04040f]">{children}</body>
    </html>
  );
}
