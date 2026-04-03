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
        title1="Business Data Analyst &"
        title2="Automation Solution Developer"
        description={t('home.intro_subtitle')}
      />
      
      {/* NEW CONTENT AREA - WHITE BACKGROUND */}
      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphismPortfolioBlock lightMode={true} />
        </div>
      </main>
    </div>
  );
};

export default About;
