import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/font";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Vulcan - AI HelpDesk & Support Automation",
  description: "Manage your finances smarter with Kaisel",
  openGraph: {
    title: "Kaisel",
    description: "AI-powered financial tools",
    url: "https://kasieal.vercel.app/",
    siteName: "Kaisel",
    images: [
      {
        url: "/kaiselimage.png",
        width: 1200,
        height: 630,
        alt: "Kaisel preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaisel",
    description: "AI-powered financial tools",
    images: ["/kaiselimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="fixed left-0 top-5 w-full z-[999]">
            <Navbar />
            <MobileNavbar />
          </section>
          <main className="">{children}</main>
          <section>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
