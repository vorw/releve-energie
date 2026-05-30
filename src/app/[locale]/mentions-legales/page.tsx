import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Mentions" });
  return {
    title: `Relève Énergie | ${t("title")}`
  };
}

export default function MentionsLegalesPage() {
  const t = useTranslations("Mentions");

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-brand-dark mb-8">{t("title")}</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">{t("s1")}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s1d") }} />
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">{t("s2")}</h2>
            <p>{t("s2d")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">{t("s3")}</h2>
            <p>{t("s3d")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">{t("s4")}</h2>
            <p className="mb-4">{t("s4d1")}</p>
            <p>{t("s4d2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">{t("s5")}</h2>
            <p>{t("s5d")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
