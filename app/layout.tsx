import Link from 'next/link'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Mon portfolio de developpeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/a-propos">À propos</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}

