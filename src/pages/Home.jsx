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
    <div className="bg-transparent min-h-screen text-foreground">
      {/* Unified Hero Section */}
      <ShapeLandingHero 
        badge={t('home.welcome')}
        title1={t('home.intro_title').split(' ').slice(0, 3).join(' ')}
        title2={t('home.intro_title').split(' ').slice(3).join(' ')}
        description={t('home.intro_subtitle')}
        trustText={t('home.trust_boost')}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" className="rounded-full px-8 h-12 shadow-lg" asChild>
            <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              {t('home.cta_book')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all shadow-sm" asChild>
            <a href="#services">
              {t('home.cta_cases')}
            </a>
          </Button>
        </div>
      </ShapeLandingHero>

      {/* Positioning Section */}
      <PositioningSection />

      {/* Services/Core Offers & Microfinance Case Study */}
      <Casestudy5 />

      {/* UNHCR Highlight Case Study */}
      <UNHCRHighlight />

      {/* How I Work Section */}
      <HowItWorks />

      {/* Assessment Offer Section */}
      <AssessmentOffer />

      {/* Timeline Section */}
      <section className="py-20 bg-white/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('home.timelineTitle')}
            </h2>
          </div>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            {t('home.final_cta_text')}
          </h2>
          <Button size="lg" className="bg-white text-primary hover:bg-primary-50 rounded-full px-12 h-16 text-xl font-bold shadow-2xl transition-transform hover:scale-105" asChild>
            <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              {t('home.final_cta_btn')}
              <MoveRight className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
