"use client";

import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageToggle } from "@/components/language/language-toggle";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
      <div>
        <h1 className="text-3xl font-bold">{t("name")}</h1>
        <p className="text-muted-foreground mt-1">{t("title")}</p>
      </div>
      <div className="flex items-center gap-2 mt-4 sm:mt-0">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
} 