import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { projectsData, categories } from '../data/projects';
import { Tabs } from '../components/ui/VercelTabs';
import { ShapeLandingHero } from '../components/ui/ShapeLandingHero';
import GalleryHoverCarousel from '../components/ui/GalleryHoverCarousel';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects = selectedCategory === 'Tous'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <ShapeLandingHero 
        badge="Data Analytics Portfolio"
        title1="Mes Projets"
        title2="Insights & Visualisations"
        description="Explorez mon portfolio de projets en Data Analytics, visualisations Power BI, analyses Python et requêtes SQL"
      />

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center text-gray-700 font-semibold">
              <Filter size={20} className="mr-2" />
              Filtrer par :
            </div>
            <Tabs 
              tabs={categories.map(c => ({ id: c, label: c }))}
              activeTab={selectedCategory}
              onTabChange={(id) => setSelectedCategory(id)}
            />
          </div>
          <div className="mt-4 text-gray-600">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <GalleryHoverCarousel 
        heading={`Projets ${selectedCategory === 'Tous' ? 'Récents' : selectedCategory}`}
        items={filteredProjects.map((p) => ({
          id: p.id.toString(),
          title: p.title,
          summary: p.description,
          url: p.link || "#",
          image: p.image
        }))}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {projectsData.filter(p => p.category === 'Power BI').length}+
              </div>
              <div className="text-gray-600 font-semibold">
                Projets Power BI
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {projectsData.filter(p => p.category === 'Python').length}+
              </div>
              <div className="text-gray-600 font-semibold">
                Analyses Python
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {projectsData.filter(p => p.category === 'SQL').length}+
              </div>
              <div className="text-gray-600 font-semibold">
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
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Je peux vous aider à réaliser vos projets d'analyse de données et de visualisation
          </p>
          <a
            href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center bg-white text-primary-600 hover:bg-primary-50"
          >
            Contactez-moi
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
