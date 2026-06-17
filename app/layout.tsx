import type { Metadata } from "next";
import { Playfair_Display, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import Preloader from "@/components/ui/Preloader";
import NextTopLoader from "nextjs-toploader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GLOSSY SALON | Luxury Hair Salon in South Delhi, India",
  description:
    "Experience bespoke hair rituals, precision haircuts, balayage, and custom styling crafted by India's finest master stylists at Glossy Salon in Greater Kailash, South Delhi.",
  keywords: [
    "luxury salon delhi",
    "best hair salon south delhi",
    "greater kailash hair salon",
    "master hair stylists delhi",
    "bridal hair styling delhi",
    "keratin treatment delhi",
    "balayage specialist delhi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                document.documentElement.classList.add("loading-first-time");
                var style = document.createElement('style');
                style.id = 'preloader-temp-style';
                style.innerHTML = 'html, body { background-color: #1C1C1C !important; overflow: hidden !important; height: 100vh !important; max-height: 100vh !important; }';
                document.head.appendChild(style);
              }
            `,
          }}
        />
      </head>
      <body className="bg-primary text-cream font-outfit antialiased min-h-screen flex flex-col justify-between">
        <NextTopLoader
          color="#C8A97E"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #C8A97E,0 0 5px #C8A97E"
        />
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
