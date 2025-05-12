"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about">
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t("content")}</p>
        </CardContent>
      </Card>
    </section>
  );
} 