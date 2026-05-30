import { B2BForm } from "@/components/ui/B2BForm";
import { Building2, Lightbulb, ClipboardCheck, Factory, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Pro" });
  return {
    title: `Relève Énergie | ${t("title")}`,
    description: t("desc")
  };
}

export default function ProfessionnelsPage() {
  const t = useTranslations("Pro");

  return (
    <>
      <section className="bg-brand-dark text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("desc")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">{t("h2")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("h2d")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <Lightbulb className="w-8 h-8 text-brand-green mb-4" />
                  <h3 className="font-bold text-brand-dark mb-2">{t("b1")}</h3>
                  <p className="text-sm text-gray-600">{t("b1d")}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <ClipboardCheck className="w-8 h-8 text-brand-green mb-4" />
                  <h3 className="font-bold text-brand-dark mb-2">{t("b2")}</h3>
                  <p className="text-sm text-gray-600">{t("b2d")}</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <Building2 className="w-8 h-8 text-brand-green mb-4" />
                  <h3 className="font-bold text-brand-dark mb-2">{t("b3")}</h3>
                  <p className="text-sm text-gray-600">{t("b3d")}</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <Factory className="w-8 h-8 text-brand-green mb-4" />
                  <h3 className="font-bold text-brand-dark mb-2">{t("b4")}</h3>
                  <p className="text-sm text-gray-600">{t("b4d")}</p>
                </div>
              </div>

              <div className="bg-brand-green-light/50 p-6 rounded-xl mt-8 border border-brand-green-light">
                <div className="flex items-start">
                  <Zap className="w-8 h-8 text-brand-green-dark mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-brand-dark text-lg mb-2">{t("ceeTitle")}</h3>
                    <p className="text-gray-700">
                      {t("ceeDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-xl h-full">
              <B2BForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
