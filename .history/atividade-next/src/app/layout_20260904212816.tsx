import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout({ children }) 
{
  return (
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable} h-screen`}>
    <body className="font-sans bg-gray-50 antialiased max-h-screen">
    <Navbar />
    {children}
    
    <Footer/>
    </body>
    </html>
  );
}
