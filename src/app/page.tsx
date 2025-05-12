import { redirect } from "next/navigation";
import { defaultLocale } from "@/config/i18n";
import Image from "next/image";

export default function Home() {
  redirect(`/${defaultLocale}`);
}
