import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, TrendingDown, Clock, Zap, Target, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export const UNHCRHighlight = ({ lightMode = false }) => {
  const { t } = useTranslation();

  return (
    <section className={cn("py-24 bg-transparent relative z-10", !lightMode && "border-t border-white/5")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex items-center gap-3 mb-6 text-blue-600 font-bold tracking-widest uppercase text-sm">
              <Globe size={22} className="float-animation" />
              {t('casestudies.featured_impact_badge')}
            </div>
            <h2 className={cn("text-3xl lg:text-5xl font-bold mb-8 leading-tight", lightMode ? "text-gray-900" : "text-white gradient-text")}>
              {t('casestudies.unhcr.title')}
            </h2>
            
            <div className="space-y-10">
              {/* Problem & Solution */}
              <div className="grid gap-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-red-500/10 p-2 rounded-lg shrink-0">
                    <Target className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={cn("text-sm font-bold uppercase tracking-wider mb-2", lightMode ? "text-gray-900" : "text-white")}>
                      {t('casestudies.unhcr.problem_label')}
                    </h4>
                    <p className={cn("text-lg font-light", lightMode ? "text-gray-600" : "text-slate-300")}>
                      {t('casestudies.unhcr.problem_desc')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg shrink-0">
                    <Zap className="text-blue-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={cn("text-sm font-bold uppercase tracking-wider mb-2", lightMode ? "text-gray-900" : "text-white")}>
                      {t('casestudies.unhcr.solution_label')}
                    </h4>
                    <p className={cn("text-lg font-light leading-relaxed", lightMode ? "text-gray-600" : "text-slate-300")}>
                      {t('casestudies.unhcr.solution_desc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Card */}
              <div className={cn(
                "p-8 rounded-3xl border transition-all duration-500 group",
                lightMode ? "bg-gray-50 border-gray-100 shadow-sm" : "glass-card border-white/10"
              )}>
                <div className="flex items-center gap-5 text-emerald-600 mb-6">
                  <TrendingDown size={28} />
                  <span className="text-4xl font-black italic tracking-tighter">-50%</span>
                  <span className="text-xl font-bold uppercase tracking-widest">{t('casestudies.unhcr.impact_label')}</span>
                </div>
                
                <ul className="grid gap-4">
                  {Object.values(t('casestudies.unhcr.impact_points', { returnObjects: true })).map((point, idx) => (
                    <li key={idx} className={cn("flex items-center gap-3 text-lg font-light", lightMode ? "text-gray-700" : "text-white/90")}>
                      <CheckCircle2 className="text-emerald-500 h-5 w-5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={cn(
              "aspect-video rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500",
              lightMode ? "border-gray-100" : "border-white/10"
            )}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" 
                alt="UNHCR Dashboard" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full scale-75" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
