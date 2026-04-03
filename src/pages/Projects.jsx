import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { projectsData, categories } from '../data/projects';
import { Tabs } from '../components/ui/VercelTabs';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import { Hero, BgGradient, TextStagger, AnimatedContainer } from '../components/ui/HeroAnimated';
import { EthicalHero } from '../components/ui/EthicalHero';
import { useTranslation } from 'react-i18next';

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
    <div className="bg-transparent min-h-screen text-foreground">
      {/* Header Section */}
      <ShapeLandingHero 
        badge={t('projects.badge', 'Portfolio')}
        title1={t('header.projects')}
        title2={t('projects.title2')}
        description=""
      />

      {/* Filter Section */}
      <section className="py-12 bg-white/5 border-y border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center text-white font-bold tracking-wide">
              <Filter size={22} className="mr-3 text-blue-400" />
              {t('projects.filter_by', 'Filtrer par :')}
            </div>
            <Tabs 
              tabs={categoryOptions}
              activeTab={selectedCategory}
              onTabChange={(id) => setSelectedCategory(id)}
            />
          </div>
          <div className="mt-6 text-slate-400 font-light text-sm">
            {filteredProjects.length} {t('projects.count_text', 'projet(s) trouvé(s)')}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <EthicalHero
        title={selectedCategory === 'all' ? t('projects.recent_heading', 'Projets Récents') : `${t('projects.category_heading', 'Projets')} ${selectedCategory}`}
        subtitle={t('projects.desc_short')}
        features={filteredProjects.map((p) => ({
          id: p.id.toString(),
          title: t(`projects.items.${p.id}.title`),
          description: t(`projects.items.${p.id}.desc`),
          href: p.link || "#",
          imageUrl: p.image
        }))}
      />

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-card p-10 border-white/10 group hover:bg-white/10 transition-all text-center">
              <div className="text-5xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {projectsData.filter(p => p.category === 'Power BI').length}+
              </div>
              <div className="text-white font-bold uppercase tracking-widest text-xs">
                {t('projects.stats_powerbi')}
              </div>
            </div>
            <div className="glass-card p-10 border-white/10 group hover:bg-white/10 transition-all text-center">
              <div className="text-5xl font-black text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                {projectsData.filter(p => p.category === 'Python').length}+
              </div>
              <div className="text-white font-bold uppercase tracking-widest text-xs">
                {t('projects.stats_python')}
              </div>
            </div>
            <div className="glass-card p-10 border-white/10 group hover:bg-white/10 transition-all text-center">
              <div className="text-5xl font-black text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                {projectsData.filter(p => p.category === 'SQL').length}+
              </div>
              <div className="text-white font-bold uppercase tracking-widest text-xs">
                {t('projects.stats_sql')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full scale-50 -z-10" />
        <div className="max-w-4xl mx-auto glass-card border-white/10 p-12 md:p-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            {t('projects.cta_title', 'Vous avez un projet similaire ?')}
          </h2>
          <p className="text-xl mb-10 text-slate-300 font-light leading-relaxed">
            {t('projects.cta_desc', "Je peux vous aider à réaliser vos projets d'analyse de données et de visualisation")}
          </p>
          <a
            href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-900 font-black rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:scale-105"
          >
            {t('footer.contact')}
            <ExternalLink size={22} className="ml-3" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
