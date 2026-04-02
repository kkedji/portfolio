import React from 'react';
import { ExternalLink } from 'lucide-react';
import { applicationsData } from '../data/applications';
import FeaturedAppDemo from '../components/ui/FeaturedAppDemo';
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
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="bg-zinc-900 border-b border-zinc-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('apps.title')}
          </h1>
          <p className="text-xl text-zinc-400">
            {t('apps.desc')}
          </p>
        </div>
      </section>

      {/* Applications Showcase */}
      <div>
        {translatedApps.map((app) => (
          <FeaturedAppDemo key={app.id} app={app} />
        ))}
      </div>

      {/* Info Section */}
      <section className="py-16 bg-zinc-900/30">
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
