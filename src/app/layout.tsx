import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import "aos/dist/aos.css";
// import "../styles/animated-background.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ghani Zulhusni Bahri - Portfolio",
  description:
    "Portfolio of Ghani Zulhusni Bahri - Backend Developer and Software Engineering Student",
  keywords: [
    "Ghani Zulhusni Bahri",
    "Portfolio",
    "Backend Developer",
    "Software Engineering",
    "Fullstack Developer",
  ],
  authors: [{ name: "Ghani Zulhusni Bahri" }],
  creator: "Ghani Zulhusni Bahri",
  publisher: "Ghani Zulhusni Bahri",
  icons: {
    icon: [
      {
        url: "/assets/logo.png",
        sizes: "any",
        type: "image/png",
      },
      {
        url: "/assets/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "/assets/logo.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: {
      url: "/assets/logo.png",
      type: "image/png",
    },
    other: [
      {
        rel: "icon",
        url: "/assets/logo.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ghani Zulhusni Bahri - Portfolio",
    description:
      "Portfolio of Ghani Zulhusni Bahri - Backend Developer and Software Engineering Student",
    url: "https://yourwebsite.com", // Ganti dengan URL website Anda
    siteName: "Ghani Portfolio",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Ghani Zulhusni Bahri Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghani Zulhusni Bahri - Portfolio",
    description:
      "Portfolio of Ghani Zulhusni Bahri - Backend Developer and Software Engineering Student",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0b090a]">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        {/* Multiple favicon references to override default */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.png?v=2"
        />
        <link rel="icon" type="image/x-icon" href="/assets/logo.png?v=2" />
        <link rel="shortcut icon" href="/assets/logo.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.png?v=2" />
        <link rel="apple-touch-icon" href="/assets/logo.png?v=2" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#b69b43" />
        <meta name="msapplication-TileColor" content="#0b090a" />
        <meta name="msapplication-TileImage" content="/assets/logo.png" />
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/978438a1fc.js"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/978438a1fc.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-[#0b090a] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
