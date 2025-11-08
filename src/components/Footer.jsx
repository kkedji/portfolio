import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">SKK Analytics</h3>
            <p className="text-gray-400">
              Consultant Data Indépendant spécialisé en analyse de données, 
              gestion des risques et reporting stratégique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/applications" className="text-gray-400 hover:text-white transition-colors">
                  Applications
                </a>
              </li>
              <li>
                <a href="/projets" className="text-gray-400 hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/senameskk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com/kkedji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Transformez vos données en leviers de performance
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SKK Analytics. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
