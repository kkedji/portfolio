import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, TrendingUp } from 'lucide-react';
import { servicesData, skillsData } from '../data/services';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Bienvenue, je suis Sename
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-primary-100">
                Consultant Data Indépendant
              </p>
              <p className="text-lg mb-8 text-primary-50">
                Avec plus de quinze ans d'expérience dans l'industrie bancaire, 
                je mets mon expertise en analyse de données, gestion des risques 
                et reporting stratégique au service des entreprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projets"
                  className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Voir mes projets
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/applications"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Mes applications
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
                  alt="Data Analytics"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <BarChart3 className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15+</p>
                      <p className="text-sm text-gray-600">Années d'expérience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mes Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez vos données en leviers de performance et de réduction des risques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="card p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compétences & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Outils et technologies que je maîtrise
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
            Prêt à transformer vos données ?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Découvrez mes projets et applications pour voir comment je peux 
            vous aider à exploiter la puissance de vos données.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projets"
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Voir les projets
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
