import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // We'll update this file with your CSS variables

// Keep the Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nils GALLOUX - Portfolio",
  description: "Portfolio d'Ingénieur Logiciel spécialisé en Big Data & Analyse de données",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}