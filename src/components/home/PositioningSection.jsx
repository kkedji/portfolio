import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PositioningSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white/30 backdrop-blur-sm border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('home.what_i_do_title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('home.what_i_do_desc')}
            </p>
            <ul className="space-y-4">
              {Object.values(t('home.what_i_do_items', { returnObjects: true })).map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-foreground font-medium">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-inner"
          >
            <p className="text-2xl font-semibold text-primary leading-tight">
              {t('home.what_i_do_goal')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
