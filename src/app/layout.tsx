import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EduTech Pro - Online Learning Platform",
  description: "Master new skills with our comprehensive online courses. Learn from expert instructors in web development, design, data science, and more.",
  keywords: "online learning, courses, education, web development, design, data science",
  authors: [{ name: "EduTech Pro" }],
  creator: "EduTech Pro",
  publisher: "EduTech Pro",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edtech-pro.demo",
    title: "EduTech Pro - Online Learning Platform",
    description: "Master new skills with our comprehensive online courses",
    siteName: "EduTech Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduTech Pro - Online Learning Platform",
    description: "Master new skills with our comprehensive online courses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
