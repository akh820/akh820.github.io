"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const t = useTranslations("education");

  return (
    <section id="education">
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-l-2 border-primary pl-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-medium">{t("degree")}</h3>
              <Badge variant="outline">{t("year")}</Badge>
            </div>
            <p className="text-muted-foreground">{t("school")}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
} 