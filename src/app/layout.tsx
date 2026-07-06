import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MUHAMMED RISWAN P — AI / ML ENGINEER",
  description: "Personal portfolio of Muhammed Riswan P - AI/ML Engineer. Drawn in ink, shipped in production. Pipelines, models, dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-bg-dark text-[#FFFFFF] antialiased overflow-x-hidden md:cursor-none`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
