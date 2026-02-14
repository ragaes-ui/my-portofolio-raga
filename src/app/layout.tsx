import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen"; // Impor komponen loading

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raga Esa Pratama | Junior Developer",
  description: "Portofolio Raga Esa Pratama - Mahasiswa Sistem Informasi UT & IT Support",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black antialiased`}>
        {/* LoadingScreen akan muncul setiap kali website pertama kali diakses */}
        <LoadingScreen />
        
        {/* Konten utama website kamu */}
        {children}
      </body>
    </html>
  );
}
