"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills">
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">{t("frontend")}</h3>
            <div className="flex flex-wrap gap-2">
              {t.raw("frontendSkills").map((skill: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">{t("backend")}</h3>
            <div className="flex flex-wrap gap-2">
              {t.raw("backendSkills").map((skill: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">{t("others")}</h3>
            <div className="flex flex-wrap gap-2">
              {t.raw("otherSkills").map((skill: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
} 