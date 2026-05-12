import type { Metadata } from "next";
import { Source_Code_Pro, Inter } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-code-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elisabeth Nejedli",
  description:
    "Personal portfolio of Elisabeth Nejedli — MATSE trainee passionate about software, AI and mathematics.",
  keywords: [
    "Elisabeth Nejedli",
    "Portfolio",
    "MATSE",
    "Software Developer",
    "AI",
    "Machine Learning",
    "Java",
    "Python",
  ],
  authors: [{ name: "Elisabeth Nejedli" }],
  openGraph: {
    title: "Elisabeth Nejedli",
    description:
      "MATSE trainee passionate about software, AI and mathematics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} ${inter.variable}`}>
      <body className="scrollbar-thin">{children}</body>
    </html>
  );
}
