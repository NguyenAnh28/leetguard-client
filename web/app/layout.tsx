import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LeetGuard - Focus. Solve. Unlock your day.',
  description: 'Your coding companion that rewards deep work and eliminates distractions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}