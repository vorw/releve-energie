import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, ThermometerSun, ShieldCheck, Home as HomeIcon, CheckCircle2, TrendingDown } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === "en" ? "Relève Énergie | Energy Renovation & Insulation" : "Relève Énergie | Rénovation Énergétique & Isolation",
    description: locale === "en" ? "RGE-certified professional specialized in energy savings. ITE, Heat pump, BAR-TH-145." : "Professionnel RGE spécialisé en économie d'énergie. ITE, Pompe à chaleur, BAR-TH-145."
  };
}

export default function Home() {
  const t = useTranslations("Home");
  const th = useTranslations("Header");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green via-brand-dark to-brand-dark"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {t("heroTitle1")} <span className="text-brand-green">Relève Énergie</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              {t("heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#services" className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center">
                {t("discoverBtn")} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                {t("simulBtn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{t("servicesTitle")}</h2>
            <p className="text-lg text-gray-600">{t("servicesDesc")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              href="/ite"
              title={th("ite")}
              description={t("iteDesc")}
              icon={HomeIcon}
            />
            <ServiceCard
              href="/pompe-a-chaleur"
              title={th("pac")}
              description={t("pacDesc")}
              icon={ThermometerSun}
            />
            <ServiceCard
              href="/th145"
              title={th("th145")}
              description={t("th145Desc")}
              icon={TrendingDown}
            />
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">{t("asterisk1")}</p>
        </div>
      </section>

      {/* About & Certifications */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green-light text-brand-green-dark font-semibold text-sm mb-6">
                <ShieldCheck className="w-5 h-5 mr-2" /> RGE QualiPAC
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">{t("aboutTitle")}</h2>
              <div className="space-y-4 text-lg text-gray-600 mb-8 leading-relaxed">
                <p>{t("aboutP1")}</p>
                <p>{t("aboutP2")}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[t("aboutL1"), t("aboutL2"), t("aboutL3")].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-800 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-block bg-brand-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-green transition-colors">
                {t("aboutBtn")}
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gray-200 overflow-hidden shadow-2xl relative flex items-center justify-center">
                 <span className="text-gray-400 font-medium">{t("photoPlaceholder")}</span>
              </div>
              
              {/* Floating Certification Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100">
                <h4 className="font-bold text-brand-dark mb-2">{t("certifTitle")}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{t("certifDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">{t("partnersTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t("partnersDesc")}</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Placeholders for partner logos */}
            <div className="text-xl font-bold text-gray-400">Domofinance</div>
            <div className="text-xl font-bold text-gray-400">Projexio</div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("processTitle")}</h2>
            <p className="text-gray-400 text-lg">{t("processDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

            {[
              { num: "01", title: t("s1Title"), desc: t("s1Desc") },
              { num: "02", title: t("s2Title"), desc: t("s2Desc") },
              { num: "03", title: t("s3Title"), desc: t("s3Desc") },
              { num: "04", title: t("s4Title"), desc: t("s4Desc") },
              { num: "05", title: t("s5Title"), desc: t("s5Desc") }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-dark border-4 border-brand-green flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realizations Placeholder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">{t("realTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Replace these divs with next/image later */}
             {[1, 2, 3].map((i) => (
               <div key={i} className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                 <span className="text-gray-400">{t("imgPlaceholder")} {i}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Preview Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{t("blogTitle")}</h2>
              <p className="text-gray-600 text-lg">{t("blogDesc")}</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center text-brand-green font-semibold hover:text-brand-green-dark">
              {t("blogAll")} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Articles */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">{t("imgPlaceholder")}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-brand-green mb-3 uppercase tracking-wider">{t("articleTip")}</div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Titre de l'article {i}</h3>
                  <Link href="/blog" className="text-brand-green font-semibold hover:underline flex items-center">
                    {t("readArticle")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark">
              {t("blogAll")} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-brand-green-light mb-10">
            {t("ctaDesc")}
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg">
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
    </>
  );
}
