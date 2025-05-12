"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience">
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {t.raw("items").map((item: any, index: number) => (
            <div key={index} className="border-l-2 border-primary pl-4 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-medium">{item.position}</h3>
                <Badge variant="outline">{item.period}</Badge>
              </div>
              <p className="text-muted-foreground mb-2">{item.company}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
} 