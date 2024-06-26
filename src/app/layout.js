import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Header from "@/lib/modules/templates/Header/Header";
import Footer from "@/lib/modules/templates/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ASSEGAI",
  description: "Assegai generated by next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={inter.variable}>
        <body className="bg-white text-black">
            <Header />
            <div className="min-h-screen pt-16 overflow-y-auto">
              {children}
            </div>
          <Footer/>
        </body>
      </html>
    </>
  );
}
