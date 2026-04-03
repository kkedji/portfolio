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

      {/* Applications Showcase */}
      <div>
        {translatedApps.map((app) => (
          <FeaturedAppDemo key={app.id} app={app} />
        ))}
      </div>

      {/* Info Section */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center border-white/10 group hover:bg-white/10 transition-all">
            <h2 className="text-3xl font-bold text-foreground mb-4 gradient-text">
              {t('apps.custom_cta_title', "Vous avez un projet d'application ?")}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-light">
              {t('apps.custom_cta_desc', "Je peux vous aider à développer des applications personnalisées pour répondre à vos besoins spécifiques en analyse de données.")}
            </p>
            <a
              href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-8 py-4 rounded-xl text-white inline-flex items-center text-lg font-medium shadow-2xl hover:scale-105 transition-transform"
            >
              {t('footer.contact')}
              <ExternalLink size={20} className="ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;
