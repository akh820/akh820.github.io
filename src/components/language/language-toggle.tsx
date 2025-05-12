"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next-intl/client"
import { locales } from "@/config/i18n"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const localeNames = {
  ko: "한국어",
  ja: "日本語"
}

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (locale: string) => {
    router.replace(pathname, { locale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">언어 변경</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem 
            key={locale} 
            onClick={() => switchLanguage(locale)}
          >
            {localeNames[locale as keyof typeof localeNames]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 