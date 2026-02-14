import type { Metadata } from "next";
import {
  Poppins,
  Inter,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import { CartProvider } from "./providers/CartProvider";
import { UIProvider } from "./providers/UIProvider";
import { CartDrawer } from "./components/CartDrawer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chickenkeeper.example"),
  title: {
    default: "Chickenkeeper Restaurant | Premium Chicken & Combos",
    template: "%s | Chickenkeeper",
  },
  description:
    "Order premium chicken meals, grilled plates, combos, sides, and drinks. Fast, fresh, and delicious — Chickenkeeper Restaurant.",
  keywords: [
    "Chicken",
    "Restaurant",
    "Food Delivery",
    "Combos",
    "Grilled Chicken",
    "Fried Chicken",
    "Sides",
    "Drinks",
  ],
  openGraph: {
    type: "website",
    siteName: "Chickenkeeper",
    title: "Chickenkeeper Restaurant",
    description:
      "A modern online ordering experience for premium chicken dishes.",
    url: "https://www.chickenkeeper.example",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Chickenkeeper Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chickenkeeper Restaurant",
    description:
      "Order premium chicken meals online. Fast, fresh, and delicious.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <CartProvider>
          <UIProvider>
            <div className="pt-24 sm:pt-32">
              {children}
            </div>
            <CartDrawer />
          </UIProvider>
        </CartProvider>
      </body>
    </html>
  );
}
