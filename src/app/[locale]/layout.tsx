"use client";

import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 