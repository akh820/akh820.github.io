"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact">
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("email")}</p>
              <a
                href={`mailto:${t("emailAddress")}`}
                className="hover:underline"
              >
                {t("emailAddress")}
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("github")}</p>
              <a
                href={`https://${t("githubLink")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t("githubLink")}
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("linkedin")}</p>
              <a
                href={`https://${t("linkedinLink")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t("linkedinLink")}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
} 