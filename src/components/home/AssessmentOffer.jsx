import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const AssessmentOffer = () => {
  const { t } = useTranslation();
  const items = Object.values(t('home.assessment_items', { returnObjects: true }));

  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop" 
              alt="Financial Assessment" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('home.assessment_title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('home.assessment_desc')}
            </p>
            
            <div className="space-y-6 mb-10">
              <p className="font-bold text-foreground text-lg uppercase tracking-wider">
                {t('home.assessment_receive')}
              </p>
              <div className="grid gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-primary h-6 w-6 shrink-0" />
                    <span className="text-lg font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl" asChild>
              <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer">
                {t('home.final_cta_btn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
