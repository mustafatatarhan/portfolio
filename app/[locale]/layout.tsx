// app/[locale]/layout.tsx
import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/request";

export const metadata: Metadata = {
  title: "Mustafa Tatarhan – Portfolio",
  description: "Mobile Product Developer",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* Navbar sabitse pt-16 burada kalsın */}
          <div className="pt-16">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}