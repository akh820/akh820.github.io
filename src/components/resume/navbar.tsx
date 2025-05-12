"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

export default function Navbar() {
  const t = useTranslations("navbar");

  const sections = [
    { id: "about", label: t("about") },
    { id: "experience", label: t("experience") },
    { id: "skills", label: t("skills") },
    { id: "education", label: t("education") },
    { id: "contact", label: t("contact") },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <nav className="flex flex-col space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-3 py-2 text-left rounded-md hover:bg-accent transition-colors"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
} 