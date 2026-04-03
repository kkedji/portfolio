import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const HowItWorks = ({ lightMode = false }) => {
  const { t } = useTranslation();
  const steps = Object.values(t('home.how_it_works_steps', { returnObjects: true }));

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={cn("text-3xl lg:text-5xl font-bold mb-4", lightMode ? "text-gray-900" : "text-foreground")}>
            {t('home.how_it_works_title')}
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={cn(
                "relative p-8 group transition-all duration-500 rounded-3xl border",
                lightMode ? "bg-gray-50 border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1" : "glass-card border-white/10 hover:bg-white/10"
              )}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg z-20 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className={cn("text-xl font-bold mb-4 pt-2", lightMode ? "text-gray-900" : "text-white")}>
                {step.title}
              </h3>
              <p className={cn("font-light leading-relaxed text-sm", lightMode ? "text-gray-600" : "text-slate-300")}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
