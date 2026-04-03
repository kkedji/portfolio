import React, { useRef } from 'react';
import { ArrowRight, MoveRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Timeline } from '../components/ui/Timeline';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { TextStagger, AnimatedContainer } from '../components/ui/HeroAnimated';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import { PositioningSection } from '../components/home/PositioningSection';
import { HowItWorks } from '../components/home/HowItWorks';
import { AssessmentOffer } from '../components/home/AssessmentOffer';
import { UNHCRHighlight } from '../components/home/UNHCRHighlight';
import { TimelineContent } from '../components/ui/TimelineContent';
import { ProgressiveBlur } from '../components/ui/ProgressiveBlur';
import { cn } from '../lib/utils';

const Home = () => {
  const { t } = useTranslation();
  const timelineRef = useRef(null);

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

      {/* NEW CONTENT AREA - WHITE BACKGROUND */}
      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Typography Section */}
          <article className="w-fit mx-auto max-w-4xl text-center space-y-8 mb-20">
            <TimelineContent
              as="div"
              animationNum={1}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="flex w-fit mx-auto items-center gap-1 rounded-full bg-blue-600 border-4 border-blue-100 py-0.5 pl-0.5 pr-3 text-xs"
            >
              <div className="rounded-full bg-white px-2 py-1 text-xs font-bold text-blue-600">
                Data Specialist
              </div>
              <p className="text-white sm:text-base text-xs inline-block ml-1">
                ✨ {t('home.trust_boost')}
              </p>
            </TimelineContent>

            <TimelineContent
              as="h1"
              animationNum={2}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[110%] tracking-tight text-gray-900"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Expertise
              </span>{" "}
              {t('home.intro_title').split('&')[0]} &{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={3}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {t('home.intro_subtitle')}
            </TimelineContent>
          </article>

          {/* Content Sections */}
          <div className="space-y-32 py-20">
            <PositioningSection lightMode={true} />
            <UNHCRHighlight lightMode={true} />
            <HowItWorks lightMode={true} />
            <AssessmentOffer lightMode={true} />
            
            {/* Timeline Section */}
            <section className="py-20 border-t border-gray-100">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {t('home.timelineTitle')}
                  </h2>
                  <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
                    {t('home.timelineDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                  <Timeline items={timelineItems} dark={false} />
                </div>
              </div>
            </section>

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

