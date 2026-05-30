"use client";

import { useState } from "react";
import { Button } from "./Button";
import { useTranslations } from "next-intl";

export function B2BForm() {
  const t = useTranslations("Pro");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold mb-2">{t("success")}</h3>
        <p>{t("successDesc")}</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-brand-green font-medium hover:underline"
        >
          {t("another")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">{t("formTitle")}</h3>
      
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fName")}</label>
          <input required type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fContact")}</label>
          <input required type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fPhone")}</label>
          <input required type="tel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fEmail")}</label>
          <input required type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("fAddr")}</label>
        <input required type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fType")}</label>
          <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3 bg-white">
            <option value="">{t("fTypeS")}</option>
            <option value="entrepot">{t("fType1")}</option>
            <option value="industriel">{t("fType2")}</option>
            <option value="bureau">{t("fType3")}</option>
            <option value="hotel">{t("fType4")}</option>
            <option value="supermarche">{t("fType5")}</option>
            <option value="autre">{t("fType6")}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fSurf")}</label>
          <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3 bg-white">
            <option value="">{t("fTypeS")}</option>
            <option value="moins-1000">{t("fSurf1")}</option>
            <option value="1000-2000">{t("fSurf2")}</option>
            <option value="plus-2000">{t("fSurf3")}</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("fWork")}</label>
        <textarea rows={3} className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" placeholder={t("fWorkPlc")}></textarea>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("fTime")}</label>
        <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" placeholder={t("fTimePlc")} />
      </div>

      <div className="mb-8">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input required id="consent-b2b" type="checkbox" className="w-4 h-4 text-brand-green border-gray-300 rounded focus:ring-brand-green" />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent-b2b" className="font-medium text-gray-700">{t("fConsent")}</label>
            <p className="text-gray-500">{t("fConsentTxt")}</p>
          </div>
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {t("fBtn")}
      </Button>
    </form>
  );
}
