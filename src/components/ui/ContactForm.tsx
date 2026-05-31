"use client";

import { useState, useTransition } from "react";
import { Button } from "./Button";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { submitLead } from "@/actions/submitLead";

export function ContactForm() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    
    const formData = new FormData(e.currentTarget);
    
    // Inject hidden metadata
    formData.append("form_name", "contact_form");
    formData.append("locale", locale);
    formData.append("page_url", window.location.href);
    
    // Extract UTMs if present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("utm_source")) formData.append("utm_source", urlParams.get("utm_source")!);
    if (urlParams.has("utm_medium")) formData.append("utm_medium", urlParams.get("utm_medium")!);
    if (urlParams.has("utm_campaign")) formData.append("utm_campaign", urlParams.get("utm_campaign")!);

    startTransition(async () => {
      const result = await submitLead(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(t("error"));
      }
    });
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
      
      {/* Honeypot to prevent spam */}
      <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fName")}</label>
          <input name="name" required type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" disabled={isPending} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fPhone")}</label>
          <input name="phone" required type="tel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" disabled={isPending} />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("fEmail")}</label>
        <input name="email" required type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" disabled={isPending} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fType")}</label>
          <select name="housing_type" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3 bg-white" disabled={isPending}>
            <option value="maison">{t("fType1")}</option>
            <option value="appartement">{t("fType2")}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t("fStatus")}</label>
          <select name="user_type" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3 bg-white" disabled={isPending}>
            <option value="proprietaire">{t("fStatus1")}</option>
            <option value="locataire">{t("fStatus2")}</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("fMsg")}</label>
        <textarea name="message" rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green border p-3" disabled={isPending}></textarea>
      </div>

      <div className="mb-8">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input name="consent" required id="consent" type="checkbox" className="w-4 h-4 text-brand-green border-gray-300 rounded focus:ring-brand-green" disabled={isPending} />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-gray-700">{t("fConsent")}</label>
            <p className="text-gray-500">
              {t("fConsentTxt")} <Link href="/mentions-legales" className="text-brand-green hover:underline">{t("fConsent")}</Link>.
            </p>
          </div>
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isPending}>
        {isPending ? t("loading") : t("fBtn")}
      </Button>
    </form>
  );
}
