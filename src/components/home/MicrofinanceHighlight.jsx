import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layout, CheckCircle2, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

export const MicrofinanceHighlight = ({ lightMode = false }) => {
  const { t } = useTranslation();

  return (
    <section className={cn("py-24 bg-transparent relative z-10", !lightMode && "border-b border-white/5")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-2"
          >
            <div className={cn(
              "aspect-video rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500",
              lightMode ? "border-gray-100" : "border-white/10"
            )}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" 
                alt="Microfinance System" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full scale-75" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
             <div className="flex items-center gap-3 mb-6 text-blue-600 font-bold tracking-widest uppercase text-sm">
              <Layout size={22} className="float-animation" />
              {t('realisationsPage.microfinance_badge')}
            </div>
            <h2 className={cn("text-3xl lg:text-5xl font-bold mb-8 leading-tight", lightMode ? "text-gray-900" : "text-white gradient-text")}>
              {t('casestudies.featured.title')}
            </h2>
            
            <div className="space-y-6">
              <div className={cn(
                "p-6 rounded-2xl border transition-all duration-500",
                lightMode ? "bg-gray-50 border-gray-100" : "glass-card border-white/10"
              )}>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-2">{t('casestudies.featured.problem_label')}</span>
                <p className={cn("text-lg font-light leading-relaxed", lightMode ? "text-gray-700" : "text-white/80")}>
                  {t('casestudies.featured.problem_desc')}
                </p>
              </div>

              <div className={cn(
                "p-6 rounded-2xl border transition-all duration-500",
                lightMode ? "bg-emerald-50/30 border-emerald-100/50" : "bg-emerald-500/5 border-emerald-500/10"
              )}>
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider block mb-2">{t('casestudies.featured.solution_label')}</span>
                <p className={cn("text-lg font-light leading-relaxed", lightMode ? "text-gray-700" : "text-white/80")}>
                  {t('casestudies.featured.solution_desc')}
                </p>
              </div>

              <div className="pt-4">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider block mb-4">{t('casestudies.featured.impact_label')}</span>
                <div className="grid sm:grid-cols-1 gap-3">
                  {Object.values(t('casestudies.featured.impact_points', { returnObjects: true })).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                      <span className={cn("text-base font-light", lightMode ? "text-gray-600" : "text-slate-300")}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
