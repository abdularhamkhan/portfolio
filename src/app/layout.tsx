import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Abdul Arham Khan | Software Engineer",
  description:
    "Full-stack and AI-first engineer. Projects in Next.js, React Native, FastAPI, and cloud infrastructure.",
};

const themeInitScript = `(function(){try{var k="portfolio-theme";var t=localStorage.getItem(k);if(t==="dark")document.documentElement.classList.add("dark");else if(t==="light")document.documentElement.classList.remove("dark");else if(window.matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased font-sans">
        <Script id="portfolio-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
