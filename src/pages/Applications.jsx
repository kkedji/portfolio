import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { applicationsData } from '../data/applications';

const Applications = () => {
  const [selectedApp, setSelectedApp] = useState(null);

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

      {/* Applications Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applicationsData.map((app) => (
              <div key={app.id} className="card overflow-hidden">
                <div className="relative group cursor-pointer" onClick={() => setSelectedApp(app)}>
                  <img
                    src={app.thumbnail}
                    alt={app.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="text-white" size={64} />
                  </div>
                  {app.videoUrl && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Vidéo disponible
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {app.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités :</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {app.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {app.demoLink && app.demoLink !== '#' && (
                      <a
                        href={app.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Démo
                      </a>
                    )}
                    {app.videoUrl && (
                      <button
                        onClick={() => setSelectedApp(app)}
                        className="btn-secondary inline-flex items-center"
                      >
                        <Play size={18} className="mr-2" />
                        Voir la vidéo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedApp && selectedApp.videoUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedApp.title}</h3>
              <button
                onClick={() => setSelectedApp(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              {selectedApp.videoUrl.includes('youtube.com') || selectedApp.videoUrl.includes('youtu.be') || selectedApp.videoUrl.includes('vimeo.com') ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedApp.videoUrl}
                  title={selectedApp.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              ) : (
                <video
                  controls
                  className="w-full h-full rounded-lg"
                  poster={selectedApp.thumbnail}
                >
                  <source src={selectedApp.videoUrl} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              )}
            </div>
          </div>
        </div>
      )}

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
