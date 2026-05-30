import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Flame, Home, Droplets, Euro } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TH145" });
  return {
    title: `Relève Énergie | ${t("title")}`,
    description: t("desc")
  };
}

export default function Th145Page() {
  const t = useTranslations("TH145");

  return (
    <>
      <section className="bg-brand-dark text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-green/20 text-brand-green font-medium text-sm mb-6 border border-brand-green/30">
              {t("leadTitle")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-brand-green-light font-medium mb-6">
              {t("leadSub")}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t("leadDesc")}
            </p>
            <Link href="/contact" className="inline-flex items-center bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-bold transition-colors">
              {t("leadBtn")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="mt-4 text-xs text-gray-400">{t("asterisk")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <Home className="w-10 h-10 text-brand-green mb-4" />
              <div className="font-bold text-brand-dark text-sm md:text-base">{t("b1")}</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <Flame className="w-10 h-10 text-brand-green mb-4" />
              <div className="font-bold text-brand-dark text-sm md:text-base">{t("b2")}</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <Home className="w-10 h-10 text-brand-green mb-4" />
              <div className="font-bold text-brand-dark text-sm md:text-base">{t("b3")}</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <Droplets className="w-10 h-10 text-brand-green mb-4" />
              <div className="font-bold text-brand-dark text-sm md:text-base">{t("b4")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">{t("eduTitle")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("eduP")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">{t("instTitle")}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Home className="w-12 h-12 text-brand-green mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t("inst1")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("inst1d")}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Flame className="w-12 h-12 text-brand-green mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t("inst2")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("inst2d")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Droplets className="w-12 h-12 text-brand-green mb-6" />
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t("inst3")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("inst3d")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
