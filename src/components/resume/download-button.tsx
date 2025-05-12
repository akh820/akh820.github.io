"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadButton() {
  const t = useTranslations();

  const handlePrint = () => {
    window.print();
  };

  return (
    <Button onClick={handlePrint} className="w-full">
      <Download className="mr-2 h-4 w-4" />
      {t("download")}
    </Button>
  );
} 