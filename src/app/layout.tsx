import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
