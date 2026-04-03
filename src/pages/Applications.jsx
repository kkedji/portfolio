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
        badge={t('apps.badge', 'Business Systems')}
        title1={t('apps.title')}
        title2={t('apps.title2', 'Automated Solutions')}
        description={t('apps.desc')}
      />

      {/* Applications Showcase */}
      <div>
        {translatedApps.map((app) => (
          <FeaturedAppDemo key={app.id} app={app} />
        ))}
      </div>

      {/* Info Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('apps.custom_cta_title', "Vous avez un projet d'application ?")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('apps.custom_cta_desc', "Je peux vous aider à développer des applications personnalisées pour répondre à vos besoins spécifiques en analyse de données.")}
          </p>
          <a
            href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            {t('footer.contact')}
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Applications;
