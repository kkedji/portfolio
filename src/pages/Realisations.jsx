import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { MicrofinanceHighlight } from '../components/home/MicrofinanceHighlight';
import { UNHCRHighlight } from '../components/home/UNHCRHighlight';
import { cn } from '../lib/utils';

const Realisations = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent min-h-screen text-foreground relative z-10">
      <ShapeLandingHero 
        badge={t('realisationsPage.badge')}
        title1={t('realisationsPage.title')}
        title2={t('realisationsPage.title2')}
        description={t('realisationsPage.description')}
      />

      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            <MicrofinanceHighlight lightMode={true} />
            <div className="h-px bg-gray-100 max-w-5xl mx-auto" />
            <UNHCRHighlight lightMode={true} />
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 italic max-w-2xl mx-auto">
              {t('casestudies.sectionDesc')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Realisations;
