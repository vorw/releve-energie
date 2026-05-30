"use client";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    id: 1,
    name: "Jean D.",
    role: "Propriétaire d'une maison",
    content: "L'équipe de Relève Énergie a été fantastique. Ils m'ont accompagné pour bénéficier du dispositif BAR-TH-145 et mon reste à charge a été minime. Ma maison est maintenant parfaitement isolée et équipée d'une nouvelle pompe à chaleur.",
    rating: 5,
    date: "Octobre 2023"
  },
  {
    id: 2,
    name: "Marie P.",
    role: "Propriétaire",
    content: "Très professionnels du début à la fin. Les ouvriers étaient ponctuels et ont laissé le chantier très propre. Je recommande vivement pour vos travaux d'isolation par l'extérieur. Je vois déjà la différence sur ma facture.",
    rating: 5,
    date: "Janvier 2024"
  },
  {
    id: 3,
    name: "Thomas L.",
    role: "Propriétaire",
    content: "Installation d'une PAC Air/Eau réalisée avec succès. Les conseils en amont étaient clairs et précis, et ils ont géré toutes les démarches administratives pour les aides. Service impeccable.",
    rating: 5,
    date: "Mars 2024"
  }
];

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-green via-brand-dark to-brand-dark"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-400">
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-white font-bold">{testimonial.name}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-1">
                  <span>{testimonial.role}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
