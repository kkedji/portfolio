import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, TrendingUp } from 'lucide-react';
import { servicesData, skillsData } from '../data/services';
import AnimatedTextCycle from '../components/ui/AnimatedTextCycle';
import { Timeline } from '../components/ui/Timeline';
import { Casestudy5 } from '../components/ui/Casestudy5';
import { useTranslation } from 'react-i18next';



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
    <div className="bg-white">
      {/* Hero Section removed per user request */}

      {/* Services Section */}
      <Casestudy5 />

      {/* Parcours / Timeline Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.timelineTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.timelineDesc')}
            </p>
          </div>
          
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.skillsTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.skillsDesc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-primary-100 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            {t('home.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projets"
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              {t('home.ctaBtn1')}
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              {t('home.ctaBtn2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
