import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "NextBites — Find your next bite",
  description: "Browse, search, and cook delicious recipes. Built with Next.js + TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer className="foot">
          Built with Next.js + TypeScript · NextBites
        </footer>
      </body>
    </html>
  );
}
