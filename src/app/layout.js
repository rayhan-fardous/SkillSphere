import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "SkillSphere",
  description: "A modern online learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={outfit.variable}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-center" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
