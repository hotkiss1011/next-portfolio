// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

// Optionally load a Google font (customize for your fonts)
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
