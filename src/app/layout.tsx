import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import BackToTop from "./components/back-to-top";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ruben Saulog — ML Engineer",
    template: "%s | Ruben Saulog",
  },
  description:
    "ML Engineer building production systems — from time series forecasting to distributed pipelines. Ex ML Engineering @ Shopee.",
  keywords: [
    "ML Engineer",
    "Machine Learning",
    "PyTorch",
    "Time Series Forecasting",
    "Ruben Saulog",
  ],
  authors: [{ name: "Ruben Saulog" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ruben Saulog",
    title: "Ruben Saulog — ML Engineer",
    description:
      "ML Engineer building production systems — from time series forecasting to distributed pipelines.",
  },
  twitter: {
    card: "summary",
    title: "Ruben Saulog — ML Engineer",
    description:
      "ML Engineer building production systems — from time series forecasting to distributed pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <div className="mx-auto w-full max-w-3xl px-8 py-12 min-h-screen flex flex-col">
          <div data-layout-chrome>
            <Nav />
          </div>
          <main className="flex-1 pt-16">
            {children}
          </main>
          <BackToTop />
          <footer data-layout-chrome className="border-t border-border pt-6 pb-4 mt-20 text-xs text-muted font-mono space-y-2">
            <p>&copy; {new Date().getFullYear()} Ruben Saulog</p>
            <p className="flex gap-2">
              <a
                href="https://github.com/vorrjjard-2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                github
              </a>
              <span>&middot;</span>
              <a
                href="https://linkedin.com/in/ruben-saulog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                linkedin
              </a>
              <span>&middot;</span>
              <a
                href="mailto:ruben.saulog@gmail.com"
                className="hover:text-accent transition-colors"
              >
                email
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
