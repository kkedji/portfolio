import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline } from '../components/ui/Timeline';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { TimelineContent } from '../components/ui/TimelineContent';
import { cn } from '../lib/utils';

const Journey = () => {
  const { t } = useTranslation();
  const timelineRef = useRef(null);

  const timelineItems = [
    {
      title: t('home.timeline.banque.title'),
      description: t('home.timeline.banque.desc'),
      date: "2008 - 2015",
      category: t('home.timeline.banque.category'),
      status: "completed"
    },
    {
      title: t('home.timeline.analyse.title'),
      description: t('home.timeline.analyse.desc'),
      date: "2015 - 2019",
      category: t('home.timeline.analyse.category'),
      status: "completed"
    },
    {
      title: t('home.timeline.bi.title'),
      description: t('home.timeline.bi.desc'),
      date: "2019 - 2022",
      category: t('home.timeline.bi.category'),
      status: "completed"
    },
    {
      title: t('home.timeline.solutions.title'),
      description: t('home.timeline.solutions.desc'),
      date: "2022 - Aujourd'hui",
      category: t('home.timeline.solutions.category'),
      status: "current"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen text-foreground relative z-10" ref={timelineRef}>
      <ShapeLandingHero 
        badge={t('header.profile_journey')}
        title1={t('home.timelineTitle').split(' ')[0] + ' ' + t('home.timelineTitle').split(' ')[1]}
        title2={t('home.timelineTitle').split(' ').slice(2).join(' ')}
        description={t('home.timelineDesc')}
      />

      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <TimelineContent animation="fade-up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('home.timelineTitle')}
              </h2>
              <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
                {t('home.timelineDesc')}
              </p>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-10" />
            </div>
          </TimelineContent>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <Timeline items={timelineItems} dark={false} />
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 italic">
              {t('glassmorphism.cardDesc')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Journey;
