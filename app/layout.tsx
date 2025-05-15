import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/hearder";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stas' Portfolio",
  description: "Stas Bronevskiy's personal computer science portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
    >
      <Providers>        
        <div className="fixed inset-0 -z-10 h-full w-full">
          <BackgroundGradientAnimation 
            gradientBackgroundStart="var(--color-background)"
            gradientBackgroundEnd="var(--color-secondary)"
            firstColor="var(--color-background)"
            // firstColor="var(--color-primary)"
            // secondColor="var(--color-primary)"
            thirdColor="var(--color-primary)"
            fourthColor="var(--color-primary)"
            // fifthColor="var(--color-primary)"
            pointerColor="var(--color-primary)"
          />
        </div>

        <Header />
        <main className='grow'>{children}</main>
        <Footer />
        
        <Toaster />
      </Providers>
    </body>
  </html>
  );
}
