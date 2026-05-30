import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, ThermometerSun, Euro, Shield, Wind, Droplets } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PAC" });
  return {
    title: `Relève Énergie | ${t("title")}`,
    description: t("leadDesc")
  };
}

export default function PacPage() {
  const t = useTranslations("PAC");

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Shield className="w-10 h-10 text-brand-green mr-4 flex-shrink-0" />
              <div className="font-bold text-brand-dark">{t("b1")}</div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <ThermometerSun className="w-10 h-10 text-brand-green mr-4 flex-shrink-0" />
              <div className="font-bold text-brand-dark">{t("b2")}</div>
            </div>
            <div className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Euro className="w-10 h-10 text-brand-green mr-4 flex-shrink-0" />
              <div className="font-bold text-brand-dark">{t("b3")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">{t("eduTitle")}</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>{t("eduP1")}</p>
                <p>{t("eduP2")}</p>
                <p>{t("eduP3")}</p>
              </div>
            </div>
            <div className="aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
              <span className="text-gray-400 font-medium">{t("schema")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">{t("typesTitle")}</h2>
            <p className="text-lg text-gray-400">
              {t("typesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Wind className="w-12 h-12 text-brand-green mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t("type1")}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t("type1d")}
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Droplets className="w-12 h-12 text-brand-green mb-6" />
              <h3 className="text-2xl font-bold mb-4">{t("type2")}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t("type2d")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">{t("stepsTitle")}</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: 1, title: t("step1"), desc: t("step1d") },
              { step: 2, title: t("step2"), desc: t("step2d") },
              { step: 3, title: t("step3"), desc: t("step3d") },
              { step: 4, title: t("step4"), desc: t("step4d") },
              { step: 5, title: t("step5"), desc: t("step5d") },
            ].map((item) => (
              <div key={item.step} className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mr-6 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-green-light flex items-center justify-center text-brand-green-dark font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
