import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rnz-company.com"),
  title: {
    default: "RNZ — AI Automation & Digital Transformation Partner",
    template: "%s | RNZ",
  },
  description:
    "RNZ helps European and African businesses automate operations, optimize processes and adopt AI solutions — with a flexible technology team delivering real business impact.",
  keywords: [
    "AI automation",
    "business process automation",
    "digital transformation",
    "AI solutions",
    "technology partner",
    "nearshore technology team",
    "operational efficiency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "RNZ — AI Automation & Digital Transformation Partner",
    description:
      "Automate operations, optimize processes and unlock the value of AI with RNZ — a flexible technology team for European and African businesses.",
    siteName: "RNZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNZ — AI Automation & Digital Transformation Partner",
    description:
      "Automate operations, optimize processes and unlock the value of AI with RNZ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
