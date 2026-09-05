import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout() 
{
  return (
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
    <body className="font-sans bg-gray-50 antialiased">
    <Navbar />
    
    <Footer></Footer>
    </body>
    </html>
  );
}
