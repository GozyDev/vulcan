import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/font";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Vulcan - AI HelpDesk & Support Automation",
  description:
    "Vulcan is your AI-powered helpdesk solution that automates customer support, reduces response times, and improves efficiency for modern teams.",
  openGraph: {
    title: "Vulcan - AI HelpDesk & Support Automation",
    description:
      "Transform customer support with Vulcan. AI-driven helpdesk automation designed to streamline workflows and deliver faster, smarter assistance.",
    url: "https://vulcan.vercel.app/", // update with your real live site URL
    siteName: "Vulcan",
    images: [
      {
        url: "/vulcans.png", // the file you uploaded
        width: 1200,
        height: 630,
        alt: "Vulcan AI HelpDesk preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vulcan - AI HelpDesk & Support Automation",
    description:
      "AI-powered helpdesk automation to improve customer support and team productivity.",
    images: ["/vulcans.png"],
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
          defaultTheme="dark"
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
