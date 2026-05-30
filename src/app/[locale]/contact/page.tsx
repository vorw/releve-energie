import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: `Relève Énergie | ${t("title")}`
  };
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <>
      <section className="bg-brand-dark text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("desc")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-brand-dark mb-6">{t("coord")}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-brand-green mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{t("addr")}</p>
                      <p className="text-gray-600">32 rue d'Orsel<br/>75018 PARIS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-brand-green mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{t("phone")}</p>
                      <a href="tel:0188457921" className="text-brand-green hover:underline">01 88 45 79 21</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-brand-green mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{t("email")}</p>
                      <a href="mailto:contact@releve-energie.fr" className="text-brand-green hover:underline break-all">contact@releve-energie.fr</a>
                      <p className="text-sm text-gray-500 mt-1">{t("or")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
