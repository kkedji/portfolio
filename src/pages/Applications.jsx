import React from 'react';
import { ExternalLink } from 'lucide-react';
import { applicationsData } from '../data/applications';
import FeaturedAppDemo from '../components/ui/FeaturedAppDemo';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { Hero, BgGradient, TextStagger, AnimatedContainer } from '../components/ui/HeroAnimated';
import { useTranslation } from 'react-i18next';

const Applications = () => {
  const { t } = useTranslation();

  const translatedApps = applicationsData.map(app => ({
    ...app,
    title: t(`apps.items.${app.id}.title`),
    description: t(`apps.items.${app.id}.desc`),
    features: [
      t(`apps.items.${app.id}.f1`),
      t(`apps.items.${app.id}.f2`),
      t(`apps.items.${app.id}.f3`)
    ]
  }));

  return (
    <div className="bg-transparent min-h-screen">
      {/* Header Section */}
      <ShapeLandingHero 
        badge={t('apps.badge', 'Apps')}
        title1={t('header.apps')}
        title2={t('apps.title2', 'Automated Solutions')}
        description=""
      />

      {/* NEW CONTENT AREA - WHITE BACKGROUND */}
      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12">
        {/* Applications Showcase */}
        <div className="space-y-0">
          {translatedApps.map((app) => (
            <FeaturedAppDemo key={app.id} app={app} lightMode={true} />
          ))}
        </div>

        {/* Info Section - Adapted for Light Mode */}
        <section className="py-24 relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-12 md:p-16 text-center border border-gray-100 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {t('apps.custom_cta_title')}
              </h2>
              <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                {t('apps.custom_cta_desc')}
              </p>
              <a
                href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                {t('footer.contact')}
                <ExternalLink size={24} className="ml-3" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Applications;
