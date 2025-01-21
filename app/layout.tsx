import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Bhardwaj - Portfolio | Next.js Developer",
  description: "Welcome to the portfolio of Aman Bhardwaj, showcasing projects built with Next.js and other technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body
        className={`${inter.className} bg-[#020209] overflow-y-scroll overflow-x-hidden`}
      >
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aman Bhardwaj",
            "url": "https://porfolio-animated.vercel.app/",
   
            "sameAs": [
              "https://x.com/i/flow/login?redirect_after_login=%2FbhardWAman",
              "https://github.com/AmanBhardwaj-Git"
            ]
          })}
        </script>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
