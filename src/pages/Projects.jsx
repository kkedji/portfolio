import React, { useState } from 'react';
import { Filter, MoveRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import { Tabs } from '../components/ui/VercelTabs';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { TimelineContent } from '../components/ui/TimelineContent';
import { ProgressiveBlur } from '../components/ui/ProgressiveBlur';
import { cn } from '../lib/utils';

const Projects = () => {
  const { t } = useTranslation();
  
  const categoryOptions = [
    { id: 'all', label: t('projects.tab_all') },
    { id: 'Power BI', label: 'Power BI' },
    { id: 'Python', label: 'Python' },
    { id: 'SQL', label: 'SQL' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-transparent min-h-screen">
      {/* Header Section */}
      <ShapeLandingHero 
        badge={t('projects.badge', 'Portfolio')}
        title1={t('header.projects')}
        title2={t('projects.title2')}
        description=""
      />

      {/* NEW CONTENT AREA - WHITE BACKGROUND */}
      <main className="bg-white text-black py-20 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Typography Section */}
          <TimelineContent animation="fade-up" delay={0.2}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {t('projects.featured_badge', 'Réalisations')}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="block text-gray-900">{t('projects.recent_heading')}</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                  {selectedCategory === 'all' ? t('projects.featured_sub', 'Expertise & Impact') : selectedCategory}
                </span>
              </h2>
              
              <p className="max-w-2xl mx-auto text-lg text-gray-600 font-light leading-relaxed">
                {t('projects.desc_short')}
              </p>
              
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-10" />
            </div>
          </TimelineContent>

          {/* Filter Section */}
          <TimelineContent animation="fade-up" delay={0.3}>
            <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-3 text-gray-900 font-bold">
                <Filter size={20} className="text-blue-600" />
                <span>{t('projects.filter_by')}</span>
                <span className="ml-2 px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {filteredProjects.length}
                </span>
              </div>
              <Tabs 
                tabs={categoryOptions}
                activeTab={selectedCategory}
                onTabChange={(id) => setSelectedCategory(id)}
              />
            </div>
          </TimelineContent>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <TimelineContent 
                key={project.id} 
                animation="fade-up" 
                delay={index * 0.1}
                className="group"
              >
                <a 
                  href={project.link || "#"} 
                  target={project.link ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={t(`projects.items.${project.id}.title`)} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {t(`projects.items.${project.id}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed line-clamp-3">
                      {t(`projects.items.${project.id}.desc`)}
                    </p>
                    
                    <div className="mt-auto pt-6 flex items-center text-blue-600 font-bold text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                      <span>{t('casestudies.viewMore')}</span>
                      <MoveRight size={18} className="ml-2" />
                    </div>
                  </div>
                </a>
              </TimelineContent>
            ))}
          </div>

          {/* Stats Section - Adapted for Light Mode */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
            <TimelineContent animation="fade-up" delay={0.1}>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all duration-500 hover:bg-blue-50 text-center">
                <div className="text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {projectsData.filter(p => p.category === 'Power BI').length}+
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
                  {t('projects.stats_powerbi')}
                </div>
              </div>
            </TimelineContent>
            <TimelineContent animation="fade-up" delay={0.2}>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all duration-500 hover:bg-blue-50 text-center">
                <div className="text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {projectsData.filter(p => p.category === 'Python').length}+
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
                  {t('projects.stats_python')}
                </div>
              </div>
            </TimelineContent>
            <TimelineContent animation="fade-up" delay={0.3}>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all duration-500 hover:bg-blue-50 text-center">
                <div className="text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {projectsData.filter(p => p.category === 'SQL').length}+
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
                  {t('projects.stats_sql')}
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Final CTA Section */}
          <TimelineContent animation="fade-up" delay={0.4}>
            <div className="mt-32 relative py-24 text-center px-4 overflow-hidden rounded-[4rem] bg-gray-900 shadow-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                  {t('projects.cta_title')}
                </h2>
                <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  {t('projects.cta_desc')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
                  >
                    {t('footer.contact')}
                    <MoveRight size={24} className="ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </TimelineContent>

        </div>
      </main>
    </div>
  );
};

export default Projects;
