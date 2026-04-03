import React from 'react';
import { ArrowRight, MoveRight } from 'lucide-react';
import { servicesData, skillsData } from '../data/services';
import { Timeline } from '../components/ui/Timeline';
import { Casestudy5 } from '../components/ui/Casestudy5';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { Hero, BgGradient, TextStagger, AnimatedContainer } from '../components/ui/HeroAnimated';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { PositioningSection } from '../components/home/PositioningSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { AssessmentOffer } from '../components/home/AssessmentOffer';
import { UNHCRHighlight } from '../components/home/UNHCRHighlight';

const Home = () => {
  const { t } = useTranslation();

  const timelineItems = [
    {
      title: t('home.timeline.banque.title'),
      description: t('home.timeline.banque.desc'),
      date: "2008 - 2015",
      category: "Banque",
      status: "completed"
    },
    {
      title: t('home.timeline.analyse.title'),
      description: t('home.timeline.analyse.desc'),
      date: "2015 - 2019",
      category: "Analyse",
      status: "completed"
    },
    {
      title: t('home.timeline.bi.title'),
      description: t('home.timeline.bi.desc'),
      date: "2019 - 2022",
      category: "Business Intelligence",
      status: "completed"
    },
    {
      title: t('home.timeline.software.title'),
      description: t('home.timeline.software.desc'),
      date: "2022 - 2024",
      category: "Ingénierie Logicielle",
      status: "completed"
    },
    {
      title: t('home.timeline.data.title'),
      description: t('home.timeline.data.desc'),
      date: "Aujourd'hui",
      category: "Data Analytics",
      status: "current"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen text-foreground relative z-10">
      {/* Unified Hero Section */}
      <ShapeLandingHero 
        badge={t('home.welcome')}
        title1={t('home.intro_title').split('&')[0] + '&'}
        title2={t('home.intro_title').split('&')[1]}
        customDescription={
          <div className="float-animation">
            <TextStagger 
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto px-4 font-light"
              text={t('home.intro_subtitle')}
              stagger={0.02}
            />
          </div>
        }
        trustText={t('home.trust_boost')}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" className="rounded-lg px-8 h-12 shadow-lg bg-primary hover:opacity-90" asChild>
            <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              {t('home.cta_book')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="glass-button rounded-lg px-8 h-12 text-white shadow-sm" asChild>
            <a href="#services">
              {t('home.cta_cases')}
            </a>
          </Button>
        </div>
      </ShapeLandingHero>

      {/* Positioning Section - From Left */}
      <AnimatedContainer transformDirection="left" transition={{ delay: 0.2 }}>
        <PositioningSection />
      </AnimatedContainer>

      {/* Services/Core Offers & Microfinance Case Study - From Right */}
      <AnimatedContainer transformDirection="right" transition={{ delay: 0.2 }}>
        <Casestudy5 />
      </AnimatedContainer>

      {/* UNHCR Highlight Case Study - From Left */}
      <AnimatedContainer transformDirection="left" transition={{ delay: 0.2 }}>
        <UNHCRHighlight />
      </AnimatedContainer>

      {/* How I Work Section - From Right */}
      <AnimatedContainer transformDirection="right" transition={{ delay: 0.2 }}>
        <HowItWorks />
      </AnimatedContainer>

      {/* Assessment Offer Section - From Left */}
      <AnimatedContainer transformDirection="left" transition={{ delay: 0.2 }}>
        <AssessmentOffer />
      </AnimatedContainer>

      {/* Timeline Section - From Right */}
      <AnimatedContainer transformDirection="right" transition={{ delay: 0.2 }}>
        <section className="py-24 bg-transparent border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 gradient-text">
                {t('home.timelineTitle')}
              </h2>
              <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                {t('home.timelineDesc')}
              </p>
            </div>
            <div className="glass-card p-8 md:p-12 border-white/5">
              <Timeline items={timelineItems} />
            </div>
          </div>
        </section>
      </AnimatedContainer>

      {/* Final CTA Section */}
      <section className="py-32 bg-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-16 text-center border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight gradient-text">
              {t('home.final_cta_text')}
            </h2>
            <Button size="lg" className="glass-button px-12 h-16 text-xl font-bold shadow-2xl hover:scale-105 transition-transform text-white border-white/20" asChild>
              <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                {t('home.final_cta_btn')}
                <MoveRight className="ml-3 h-7 w-7" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
