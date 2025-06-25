import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import IubendaScript from "./components/IubendaScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Catanzaro & Partners | Eventi, Marketing & Sviluppo Web",
  description: "Trasformiamo le tue idee in successo. Offriamo servizi integrati di produzione eventi, marketing digitale e sviluppo web per portare il tuo business al livello successivo.",
  keywords: "produzione eventi, marketing digitale, sviluppo web, Catanzaro, agenzia web, branding, SEO",
  authors: [{ name: "Catanzaro & Partners" }],
  creator: "Catanzaro & Partners",
  publisher: "Catanzaro & Partners",
  applicationName: "Catanzaro & Partners",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  },
  openGraph: {
    title: "Catanzaro & Partners | Soluzioni Creative per Eventi e Digitale",
    description: "Scopri come possiamo far crescere il tuo brand con strategie di marketing innovative, sviluppo web all'avanguardia e produzione di eventi memorabili.",
    url: "https://catanzaroepartners.it",
    siteName: "Catanzaro & Partners",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IubendaScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
