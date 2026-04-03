import React from 'react';
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const data = {
  twitterLink: 'https://twitter.com/senameskk',
  githubLink: 'https://github.com/kkedji',
  linkedinLink: 'https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/',
  services: {
    apps: '/applications',
    projets: '/projets',
    consulting: '/#services',
  },
  about: {
    home: '/',
    profil: '/about',
  },
  contact: {
    email: 'contact@skkanalytics.com', // Placeholder, adjust as needed
    phone: '', 
    address: 'Lome, Togo',
  },
  company: {
    name: 'SKK Analytics',
    description:
      'Consultant Data Indépendant spécialisé en analyse de données, gestion des risques et reporting stratégique. Transformez vos données en leviers de performance.',
  },
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
];

const getAboutLinks = (t) => [
  { text: t('header.home'), href: '/' },
  { text: t('header.profile'), href: '/about' },
];

const getServiceLinks = (t) => [
  { text: t('header.apps'), href: '/applications' },
  { text: t('header.projects'), href: '/projets' },
  { text: t('header.services'), href: '/#services' },
];

const getContactInfo = (data) => [
  { icon: Mail, text: data.contact.email },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-3xl border-t border-border/50 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-3 sm:justify-start items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">SKK</span>
              </div>
              <span className="text-2xl font-bold text-foreground">
                {data.company.name}
              </span>
            </div>

            <p className="text-muted-foreground mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left text-sm">
              {t('footer.desc')}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-foreground">{t('footer.about')}</p>
              <ul className="mt-8 space-y-4 text-sm font-medium">
                {getAboutLinks(t).map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground hover:text-primary transition-colors"
                      to={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-foreground">{t('header.solutions')}</p>
              <ul className="mt-8 space-y-4 text-sm font-medium">
                {getServiceLinks(t).map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground hover:text-primary transition-colors"
                      to={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-foreground">{t('footer.contact')}</p>
              <ul className="mt-8 space-y-4 text-sm font-medium">
                {getContactInfo(data).map(({ icon: Icon, text, isAddress }, idx) => (
                  <li key={idx}>
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <Icon className="text-primary size-5 shrink-0" />
                      {isAddress ? (
                        <address className="text-muted-foreground -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-muted-foreground flex-1 transition">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm font-medium text-muted-foreground">
               Conçu avec passion 💡
            </p>

            <p className="text-muted-foreground font-medium mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {currentYear} {data.company.name}. {t('footer.allRights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
