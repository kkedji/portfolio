import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const AssessmentOffer = ({ lightMode = false }) => {
  const { t } = useTranslation();
  const items = Object.values(t('home.assessment_items', { returnObjects: true }));

  return (
    <section className={cn("py-24 bg-transparent relative z-10", !lightMode && "border-t border-white/5")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("rounded-[2rem] overflow-hidden shadow-2xl border", lightMode ? "border-gray-100" : "border-white/10")}
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop" 
              alt="Financial Assessment" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={cn("text-3xl lg:text-5xl font-bold mb-8 leading-tight", lightMode ? "text-gray-900" : "text-white gradient-text")}>
              {t('home.assessment_title')}
            </h2>
            <p className={cn("text-xl mb-10 font-light leading-relaxed", lightMode ? "text-gray-600" : "text-slate-300")}>
              {t('home.assessment_desc')}
            </p>
            
            <div className={cn(
              "p-8 rounded-3xl border mb-10 transition-all duration-500",
              lightMode ? "bg-gray-50 border-gray-100 shadow-sm" : "glass-card border-white/10"
            )}>
              <p className="font-black text-blue-600 text-sm uppercase tracking-[0.2em] mb-6">
                {t('home.assessment_receive')}
              </p>
              <div className="grid gap-5">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <CheckCircle className="text-blue-600 h-6 w-6 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className={cn("text-lg font-light transition-colors duration-300", lightMode ? "text-gray-700" : "text-white")}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className={cn(
              "rounded-full px-12 h-16 text-lg font-bold shadow-2xl transition-all hover:scale-105",
              lightMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-blue-900 hover:bg-blue-50"
            )} asChild>
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
