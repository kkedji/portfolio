import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, TrendingDown, Clock } from 'lucide-react';
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
              {t('casestudies.featured_2_title', 'UNHCR Financial Reporting Automation')}
            </h2>
            <div className="space-y-8">
              <div className={cn(
                "p-8 rounded-3xl border transition-all duration-500 group",
                lightMode ? "bg-gray-50 border-gray-100 hover:bg-gray-100/50" : "glass-card border-white/10 hover:bg-white/10"
              )}>
                <div className="flex items-center gap-5 text-emerald-600 mb-3">
                  <TrendingDown size={28} />
                  <span className="text-4xl font-black italic tracking-tighter">-50%</span>
                </div>
                <p className={cn("text-xl font-light leading-relaxed", lightMode ? "text-gray-700" : "text-white/90")}>
                  {t('casestudies.impact_2', 'Reduced reporting time by 50% across 11 international markets.')}
                </p>
              </div>
              <div className={cn("flex items-center gap-4 italic font-light", lightMode ? "text-gray-500" : "text-slate-300")}>
                <Clock size={20} className="text-blue-600" />
                <span className="text-base">Automated fragmented data collection from spreadsheets into structured reporting systems.</span>
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
