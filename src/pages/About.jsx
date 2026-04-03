import React from 'react';
import { GlassmorphismPortfolioBlock } from '../components/ui/GlassmorphismPortfolioBlock';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { Hero, BgGradient, TextStagger, AnimatedContainer } from '../components/ui/HeroAnimated';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent min-h-screen">
      <ShapeLandingHero 
        badge={t('header.about')}
        title1={t('profile.title', 'Mon Profil')}
        title2="Data Analyst & Developer"
        description={t('home.intro_subtitle')}
      />
      <div className="relative z-10 -mt-20 pb-20">
        <GlassmorphismPortfolioBlock />
      </div>
    </div>
  );
};

export default About;
