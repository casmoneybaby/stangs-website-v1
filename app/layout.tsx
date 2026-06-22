import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Stang's Hot Dogs & Sausages | Gourmet Dogs in Corte Madera",
  description:
    "Stang's Hot Dogs and Sausages serves gourmet hot dogs, sausages, and bold flavors at The Village at Corte Madera. Quick lunch, outdoor seating, built your way.",
  keywords: [
    "hot dogs Corte Madera",
    "sausages Corte Madera",
    "lunch Corte Madera",
    "food The Village Corte Madera",
    "gourmet hot dogs Marin County",
    "Stang's hot dogs",
    "hot dog stand Corte Madera",
  ],
  openGraph: {
    title: "Stang's Hot Dogs & Sausages | Corte Madera",
    description:
      "Gourmet dogs, serious sausage snap, built fresh in Corte Madera. Visit Stang's at The Village at Corte Madera.",
    type: "website",
    locale: "en_US",
    url: "https://stangs-hot-dogs.vercel.app",
    siteName: "Stang's Hot Dogs and Sausages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stang's Hot Dogs & Sausages | Corte Madera",
    description:
      "Gourmet dogs, serious sausage snap, built fresh in Corte Madera.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://stangs-hot-dogs.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Stang's Hot Dogs and Sausages",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1618 Redwood Hwy",
                addressLocality: "Corte Madera",
                addressRegion: "CA",
                postalCode: "94925",
                addressCountry: "US",
              },
              telephone: "+1-415-250-5613",
              url: "https://stangs-hot-dogs.vercel.app",
              priceRange: "$",
              servesCuisine: ["Hot Dogs", "Sausages", "American"],
              areaServed: "Corte Madera, Marin County, CA",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
