import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeetGuard - Focus. Solve. Unlock your day.",
  description:
    "Your coding buddy that rewards you with breaks only when you've earned them.",
  icons: {
    icon: "/leetguard-logo.svg",
    shortcut: "/leetguard-logo.svg",
    apple: "/leetguard-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-premium-gradient min-h-screen">{children}</body>
    </html>
  );
}
