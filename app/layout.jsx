import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayaz portfolio",
  description: "Ayaz's personal portfolio website showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
        <Nav />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
