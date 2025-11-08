import React from 'react';
import { Mail, MapPin, Briefcase, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            À propos de moi
          </h1>
          <p className="text-xl text-primary-50">
            Consultant Data Indépendant passionné par l'analyse de données
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="card p-6 text-center sticky top-24">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-200">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80" 
                    alt="Sename Kudjo Kedji"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Sename Kudjo Kedji
                </h2>
                <p className="text-primary-600 font-semibold mb-4">
                  Consultant Data Indépendant
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start text-gray-600">
                    <Briefcase size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>15+ années d'expérience</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>Spécialiste Industrie Bancaire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="mr-3 text-primary-600" />
                  Mon parcours
                </h3>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Avec plus de quinze ans d'expérience dans l'industrie bancaire, 
                    j'ai développé une expertise approfondie en analyse de données, 
                    gestion des risques et reporting stratégique.
                  </p>
                  <p>
                    En tant que consultant data indépendant, j'aide les organisations 
                    à transformer leurs données en leviers de performance. Mon approche 
                    combine rigueur analytique, vision stratégique et capacité à 
                    communiquer des insights complexes de manière claire et actionnable.
                  </p>
                  <p>
                    Ma passion pour la data m'a conduit à développer de nombreux 
                    projets d'analyse et de visualisation de données, couvrant des 
                    domaines variés : finance, économie, supply chain, et plus encore.
                  </p>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="mr-3 text-primary-600" />
                  Domaines d'expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Analyse de données avancée',
                    'Gestion des risques bancaires',
                    'Reporting stratégique',
                    'Business Intelligence',
                    'Data Visualization',
                    'Automatisation des processus',
                    'Formation & Coaching',
                    'Consulting stratégique'
                  ].map((expertise, index) => (
                    <div key={index} className="flex items-center p-4 bg-primary-50 rounded-lg">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Technologies & Outils
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Visualisation & BI
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {['Power BI', 'Excel', 'Tableau'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Programmation & Bases de données
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {['Python', 'SQL', 'Pandas', 'NumPy'].map((tech) => (
                        <span key={tech} className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {['Data Storytelling', 'Communication', 'Leadership', 'Analyse stratégique'].map((tech) => (
                        <span key={tech} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="gradient-bg text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">
                  Travaillons ensemble
                </h3>
                <p className="mb-6 text-primary-50">
                  Vous avez un projet ou une question ? N'hésitez pas à me contacter 
                  pour discuter de la façon dont je peux vous aider.
                </p>
                <a
                  href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  <Mail className="mr-2" size={20} />
                  Me contacter sur LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
