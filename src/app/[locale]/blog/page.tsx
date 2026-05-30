import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Clock } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: `Relève Énergie | ${t("title")}`,
    description: t("desc")
  };
}

export default function BlogPage() {
  const t = useTranslations("Blog");

  return (
    <>
      <section className="bg-brand-dark text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("desc")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex-grow flex flex-col items-center justify-center min-h-[40vh]">
        <div className="text-center">
          <Clock className="w-16 h-16 text-brand-green mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-brand-dark mb-4">{t("coming")}</h2>
          <p className="text-gray-600 text-lg">
            {t("more")}
          </p>
        </div>
      </section>
    </>
  );
}
