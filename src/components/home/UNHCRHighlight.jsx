import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, TrendingDown, Clock } from 'lucide-react';

export const UNHCRHighlight = () => {
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
             <div className="flex items-center gap-3 mb-6 text-blue-400 font-bold tracking-widest uppercase text-sm">
              <Globe size={22} className="float-animation" />
              {t('casestudies.featured_impact_badge')}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight gradient-text">
              {t('casestudies.featured_2_title', 'UNHCR Financial Reporting Automation')}
            </h2>
            <div className="space-y-8">
              <div className="p-8 glass-card border-white/10 group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-5 text-emerald-400 mb-3">
                  <TrendingDown size={28} />
                  <span className="text-4xl font-black italic tracking-tighter">-50%</span>
                </div>
                <p className="text-xl text-white/90 font-light leading-relaxed">
                  {t('casestudies.impact_2', 'Reduced reporting time by 50% across 11 international markets.')}
                </p>
              </div>
              <div className="flex items-center gap-4 text-slate-300 italic font-light">
                <Clock size={20} className="text-blue-400" />
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" 
                alt="UNHCR Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full scale-75" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
