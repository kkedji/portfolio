import React, { useRef } from 'react';
import { MoveRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { PositioningSection } from '../components/home/PositioningSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { AssessmentOffer } from '../components/home/AssessmentOffer';
import { cn } from '../lib/utils';

const Home = () => {
  const { t } = useTranslation();
  const timelineRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div className="bg-transparent min-h-screen text-foreground relative z-10" ref={timelineRef}>
      {/* Unified Hero Section - Keeps Blue Style */}
      <ShapeLandingHero 
        badge={t('home.welcome')}
        title1={t('home.intro_title').includes('&') ? t('home.intro_title').split('&')[0] + '&' : t('home.intro_title')}
        title2={t('home.intro_title').includes('&') ? t('home.intro_title').split('&')[1] : ''}
        customDescription={
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg sm:text-xl text-white/90 mb-6 font-light leading-relaxed">
              {t('home.intro_subtitle')}
            </p>
            {/* Discrete Metrics List */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8 text-sm font-medium text-white/60">
              {Object.values(t('home.hero_metrics', { returnObjects: true })).map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
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

      {/* NEW CONTENT AREA - WHITE BACKGROUND */}
      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Content Sections */}
          <div className="space-y-32 py-20">
            <PositioningSection lightMode={true} />
            <HowItWorks lightMode={true} />
            <AssessmentOffer lightMode={true} />
            

            {/* Final CTA Section */}
            <section className="pb-20">
              <div className="max-w-5xl mx-auto">
                <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">
                      {t('home.final_cta_text')}
                    </h2>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-12 h-16 text-xl font-bold shadow-xl rounded-2xl" asChild>
                      <a href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        {t('home.final_cta_btn')}
                        <MoveRight className="ml-3 h-7 w-7" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

