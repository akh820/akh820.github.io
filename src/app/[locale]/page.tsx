import { useTranslations } from "next-intl";
import Header from "@/components/resume/header";
import Navbar from "@/components/resume/navbar";
import About from "@/components/resume/about";
import Experience from "@/components/resume/experience";
import Skills from "@/components/resume/skills";
import Education from "@/components/resume/education";
import Contact from "@/components/resume/contact";
import DownloadButton from "@/components/resume/download-button";
import { locales } from "@/config/i18n";

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function Home() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <aside className="w-full md:w-1/3">
            <Navbar />
            <div className="mt-4">
              <DownloadButton />
            </div>
          </aside>
          <div className="w-full md:w-2/3 space-y-8">
            <About />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
} 