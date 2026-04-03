import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const AssessmentOffer = () => {
  const { t } = useTranslation();
  const items = Object.values(t('home.assessment_items', { returnObjects: true }));

  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop" 
              alt="Financial Assessment" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 gradient-text leading-tight">
              {t('home.assessment_title')}
            </h2>
            <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed">
              {t('home.assessment_desc')}
            </p>
            
            <div className="glass-card p-8 border-white/10 mb-10">
              <p className="font-black text-blue-400 text-sm uppercase tracking-[0.2em] mb-6">
                {t('home.assessment_receive')}
              </p>
              <div className="grid gap-5">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <CheckCircle className="text-blue-400 h-6 w-6 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-light text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl bg-white text-blue-900 hover:bg-blue-50 transition-all hover:scale-105" asChild>
              <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                {t('home.final_cta_btn')}
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
