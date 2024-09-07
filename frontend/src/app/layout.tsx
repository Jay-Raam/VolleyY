import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

// Define Google Fonts
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "volleyY - Shop your your favorite shoes",
  description:
    "this site is designed to be used with shoes and other products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
