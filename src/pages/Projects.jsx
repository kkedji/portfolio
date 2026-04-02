import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { projectsData, categories } from '../data/projects';
import { Tabs } from '../components/ui/VercelTabs';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import GalleryHoverCarousel from '../components/ui/GalleryHoverCarousel';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  
  // Map categories to translated versions
  const translatedCategories = [
    t('projects.tab_all'),
    "Power BI",
    "Python",
    "SQL"
  ];

  const [selectedCategory, setSelectedCategory] = useState(t('projects.tab_all'));

  const filteredProjects = selectedCategory === t('projects.tab_all')
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* Header Section */}
      <ShapeLandingHero 
        badge="Data Analytics Portfolio"
        title1={t('projects.title')}
        title2="Insights & Visualisations"
        description={t('projects.desc')}
      />

      {/* Filter Section */}
      <section className="py-8 bg-zinc-900/50 border-b border-zinc-800 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center text-zinc-400 font-semibold">
              <Filter size={20} className="mr-2" />
              {t('projects.filter_by', 'Filtrer par :')}
            </div>
            <Tabs 
              tabs={translatedCategories.map(c => ({ id: c, label: c }))}
              activeTab={selectedCategory}
              onTabChange={(id) => setSelectedCategory(id)}
            />
          </div>
          <div className="mt-4 text-zinc-500">
            {filteredProjects.length} {t('projects.count_text', 'projet(s) trouvé(s)')}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <GalleryHoverCarousel 
        heading={selectedCategory === t('projects.tab_all') ? t('projects.recent_heading', 'Projets Récents') : `${t('projects.category_heading', 'Projets')} ${selectedCategory}`}
        items={filteredProjects.map((p) => ({
          id: p.id.toString(),
          title: t(`projects.items.${p.id}.title`),
          summary: t(`projects.items.${p.id}.desc`),
          url: p.link || "#",
          image: p.image
        }))}
      />

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {projectsData.filter(p => p.category === 'Power BI').length}+
              </div>
              <div className="text-zinc-400 font-semibold">
                Projets Power BI
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {projectsData.filter(p => p.category === 'Python').length}+
              </div>
              <div className="text-zinc-400 font-semibold">
                Analyses Python
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {projectsData.filter(p => p.category === 'SQL').length}+
              </div>
              <div className="text-zinc-400 font-semibold">
                Projets SQL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('projects.cta_title', 'Vous avez un projet similaire ?')}
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            {t('projects.cta_desc', "Je peux vous aider à réaliser vos projets d'analyse de données et de visualisation")}
          </p>
          <a
            href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center bg-white text-primary-600 hover:bg-primary-50"
          >
            {t('footer.contact')}
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
