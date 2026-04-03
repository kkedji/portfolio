import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = Object.values(t('home.how_it_works_steps', { returnObjects: true }));

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('home.how_it_works_title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card relative p-8 border-white/10 group hover:bg-white/10 transition-all"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-black text-lg shadow-2xl z-20 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pt-2">
                {step.title}
              </h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
