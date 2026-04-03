import React from 'react';
import { GlassmorphismPortfolioBlock } from '../components/ui/GlassmorphismPortfolioBlock';
import { Hero, BgGradient, TextStagger, AnimatedContainer } from '../components/ui/HeroAnimated';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent min-h-screen">
      <Hero className="px-6 py-24 text-white">
        <BgGradient
          gradientColors="black"
          gradientSize="lg"
        />
        <TextStagger
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          text={t('header.about')}
        />
        <AnimatedContainer className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl">
          <p>{t('header.apps_desc', 'Découvrez mon profil et mon expertise.')}</p>
        </AnimatedContainer>
      </Hero>
      <div className="relative z-10 -mt-20 pb-20">
        <GlassmorphismPortfolioBlock />
      </div>
    </div>
  );
};

export default About;
