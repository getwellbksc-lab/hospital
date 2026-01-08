import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Built-in Next.js SEO Metadata
export const metadata = {
  title: {
    default: "Get Well Hospital | Best Multispeciality Hospital in Bokaro",
    template: "%s | Get Well Hospital Bokaro",
  },
  description:
    "Get Well Hospital Bokaro provides 24/7 emergency care, OPD, and specialist doctors in heart, kidney, and general medicine.",
  keywords: [
    "hospital in Bokaro",
    "emergency hospital",
    "cardiologist in Bokaro",
    "Get Well Hospital",
    "24x7 doctor Bokaro",
  ],
  metadataBase: new URL("https://getwellbksc.com"),
  openGraph: {
    title: "Get Well Hospital Bokaro | 24/7 Emergency & Surgical Care",
    description:
      "24×7 emergency and modern surgical facilities with trusted doctors at Get Well Hospital Bokaro.",
    url: "https://getwellbksc.com",
    siteName: "Get Well Hospital Bokaro",
    images: [
      {
        url: "https://getwellbksc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Get Well Hospital Bokaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Well Hospital Bokaro",
    description: "Trusted 24×7 Multispeciality Hospital in Bokaro.",
    images: ["https://getwellbksc.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>

        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Get Well Hospital Bokaro",
              url: "https://getwellbksc.com/",
              logo: "https://getwellbksc.com/logo.png",
              image: "https://getwellbksc.com/og-image.jpg",
              telephone: "+91-7488325096",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Telidih Road, Chas",
                addressLocality: "Bokaro",
                addressRegion: "Jharkhand",
                postalCode: "827013",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 00:00-24:00",
              sameAs: [
                "https://www.facebook.com/getwellbksc",
                "https://www.instagram.com/getwellbksc",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
