import React from 'react';
import { ExternalLink } from 'lucide-react';
import { applicationsData } from '../data/applications';
import FeaturedAppDemo from '../components/ui/FeaturedAppDemo';

const Applications = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes Applications
          </h1>
          <p className="text-xl text-primary-50">
            Découvrez les applications que j'ai développées pour résoudre des problèmes réels
          </p>
        </div>
      </section>

      {/* Applications Showcase */}
      <div>
        {applicationsData.map((app) => (
          <FeaturedAppDemo key={app.id} app={app} />
        ))}
      </div>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous avez un projet d'application ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Je peux vous aider à développer des applications personnalisées pour 
            répondre à vos besoins spécifiques en analyse de données.
          </p>
          <a
            href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Me contacter
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Applications;
