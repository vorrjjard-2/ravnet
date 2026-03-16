import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi Saulog",
  description: "Engineer & builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <div className="mx-auto max-w-2xl px-6 py-12 min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1 pt-16">{children}</main>
          <footer className="border-t border-border pt-6 pb-4 mt-20">
            <p className="text-xs text-muted font-mono">
              &copy; {new Date().getFullYear()} Ravi Saulog
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
