"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Preserve current pathname when switching languages
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center w-full rounded-full border border-gray-300 shadow-sm px-3 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <Globe className="w-4 h-4 mr-1 text-brand-green" />
          {locale.toUpperCase()}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <button
              onClick={() => switchLanguage("fr")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === "fr" ? "bg-brand-green-light text-brand-green-dark font-bold" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === "en" ? "bg-brand-green-light text-brand-green-dark font-bold" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
