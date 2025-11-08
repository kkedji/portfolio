import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { projectsData, categories } from '../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects = selectedCategory === 'Tous'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-primary-50">
            Explorez mon portfolio de projets en Data Analytics, visualisations Power BI, 
            analyses Python et requêtes SQL
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center text-gray-700 font-semibold">
              <Filter size={20} className="mr-2" />
              Filtrer par :
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-gray-600">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full inline-flex items-center justify-center"
                    >
                      Voir le projet
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
