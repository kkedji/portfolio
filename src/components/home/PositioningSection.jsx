import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PositioningSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 gradient-text">
              {t('home.what_i_do_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed">
              {t('home.what_i_do_desc')}
            </p>
            <ul className="space-y-5">
              {Object.values(t('home.what_i_do_items', { returnObjects: true })).map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg text-white font-light">
                  <CheckCircle2 className="text-blue-400 h-6 w-6" />
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
            className="glass-card p-10 border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <p className="text-2xl font-black text-blue-400 leading-tight relative z-10 italic">
              {t('home.what_i_do_goal')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
