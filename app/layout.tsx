import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weather Forecast App',
  description: 'Get real-time weather information for any city',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-[Poppins]">{children}</body>
    </html>
  );
}