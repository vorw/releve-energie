import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  const t = useTranslations("ServiceCard");
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <div className="w-14 h-14 bg-brand-green-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
        <Icon className="w-7 h-7 text-brand-green-dark group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-brand-dark mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
        {description}
      </p>
      <Link href={href as any} className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors">
        {t("discover")} <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
}
