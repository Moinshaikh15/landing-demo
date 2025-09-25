// app/layout.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import ThemeProvider from "@/shared/components/themeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
