"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-green-dark">
              Relève Énergie
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-brand-green font-medium"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {t('realisations')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link href="/ite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-green-light hover:text-brand-green-dark">
                    {t('ite')}
                  </Link>
                  <Link href="/pompe-a-chaleur" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-green-light hover:text-brand-green-dark">
                    {t('pac')}
                  </Link>
                  <Link href="/th145" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-green-light hover:text-brand-green-dark">
                    {t('th145')}
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/blog" className="text-gray-700 hover:text-brand-green font-medium">
              {t('blog')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-green font-medium">
              {t('contact')}
            </Link>
            <Link href="/professionnels" className="text-gray-700 hover:text-brand-green font-medium">
              {t('professionnels')}
            </Link>
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0188457921" className="flex items-center text-gray-600 hover:text-brand-green font-medium">
              <Phone className="h-5 w-5 mr-2" />
              01 88 45 79 21
            </a>
            <Link 
              href="/contact" 
              className="bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2.5 rounded-md font-semibold transition-colors shadow-sm"
            >
              {t('cta')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:0188457921" className="text-brand-green">
              <Phone className="h-6 w-6" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-brand-green-light">
              {t('accueil')}
            </Link>
            <div className="px-3 py-2 text-base font-medium text-gray-900 border-t border-gray-100 mt-2">
              {t('realisations')}
            </div>
            <Link href="/ite" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-green pl-6">
              - {t('ite')}
            </Link>
            <Link href="/pompe-a-chaleur" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-green pl-6">
              - {t('pac')}
            </Link>
            <Link href="/th145" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-green pl-6">
              - {t('th145')}
            </Link>
            <div className="border-t border-gray-100 mt-2"></div>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-brand-green-light">
              {t('blog')}
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-brand-green-light">
              {t('contact')}
            </Link>
            <Link href="/professionnels" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-brand-green-light">
              {t('professionnels')}
            </Link>
            <div className="mt-4 px-3">
              <Link 
                href="/contact" 
                className="block w-full text-center bg-brand-green text-white px-5 py-3 rounded-md font-semibold"
              >
                {t('simulation')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
