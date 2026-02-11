import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
// import { Archivo } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

// const dmSans = DM_Sans({
// const archivo = Archivo({
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// change font to https://fonts.google.com/specimen/Archivo
// change font to https://fonts.google.com/specimen/Sora
// change font to https://www.fontshare.com/fonts/clash-display
export const metadata: Metadata = {
  title: "Sumanth Chinnaobireddy",
  description: "Sumanth's personal website and portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="font-base prose-headings:font-heading text-foreground">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
