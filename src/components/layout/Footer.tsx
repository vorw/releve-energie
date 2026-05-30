"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const th = useTranslations("Header");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Relève Énergie</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t("desc")}
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-brand-green" />
                <span>32 rue d'Orsel, 75018 PARIS</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-green" />
                <a href="tel:0188457921" className="hover:text-white transition-colors">01 88 45 79 21</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-green" />
                <a href="mailto:contact@releve-energie.fr" className="hover:text-white transition-colors">contact@releve-energie.fr</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("quickLinks")}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-brand-green transition-colors">{th("accueil")}</Link></li>
              <li><Link href="/blog" className="hover:text-brand-green transition-colors">{th("blog")}</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">{th("contact")}</Link></li>
              <li><Link href="/professionnels" className="hover:text-brand-green transition-colors">{th("professionnels")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t("services")}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/ite" className="hover:text-brand-green transition-colors">{th("ite")}</Link></li>
              <li><Link href="/pompe-a-chaleur" className="hover:text-brand-green transition-colors">{th("pac")}</Link></li>
              <li><Link href="/th145" className="hover:text-brand-green transition-colors">{th("th145")}</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} {t("rge")}. {t("rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">{t("legal")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
