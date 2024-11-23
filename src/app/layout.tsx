import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "当下时刻 - This Moment",
  description: "当下时刻 - This Moment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <Providers>{children}</Providers>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
