import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { MenuToggleIcon } from './ui/MenuToggleIcon';
import { createPortal } from 'react-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/NavigationMenu';
import {
  FolderOpen,
  Briefcase,
  User,
  BarChart,
  Globe,
  Map,
  MoveRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = currentLanguage.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b transition-colors duration-300', {
        'bg-white/95 supports-[backdrop-filter]:bg-white/80 border-gray-200 backdrop-blur-lg shadow-sm':
          scrolled,
        'bg-white border-transparent': !scrolled
      })}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center mr-4 group" aria-label="SKK Analytics">
            <img
              src="/images/logo-skk-analytics.png"
              alt="SKK Analytics"
              className="h-12 w-auto max-w-[190px] object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {/* Home */}
              <NavigationMenuLink asChild>
                <Link to="/" className="hover:bg-primary-50 text-gray-700 hover:text-primary-600 rounded-md py-2 px-4 transition-colors font-semibold text-sm">
                  {t('header.home')}
                </Link>
              </NavigationMenuLink>

              {/* Mes Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold px-4">
                  {t('header.solutions')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl border border-gray-100">
                    {getSolutionsLinks(t).map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Réalisations */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/realisations" className="hover:bg-primary-50 text-gray-700 hover:text-primary-600 rounded-md py-2 px-4 transition-colors font-semibold text-sm">
                    {t('header.realisations')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Mon Profil Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-semibold px-4">
                  {t('header.profile')}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl border border-gray-100">
                    {getProfilLinks(t).map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-bold text-primary"
          >
            <Globe className="size-4" />
            {currentLanguage.startsWith('fr') ? 'EN' : 'FR'}
          </Button>
          {/* Removed CTA buttons per user request */}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-bold text-primary"
          >
            <Globe className="size-4" />
            {currentLanguage.startsWith('fr') ? 'EN' : 'FR'}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={open} className="size-6 text-gray-900" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={open} className="flex flex-col justify-between gap-4 overflow-y-auto pt-6 px-6">
        <NavigationMenu className="max-w-full block">
          <div className="flex w-full flex-col gap-y-6">
            <Link to="/" onClick={() => setOpen(false)} className="font-bold text-2xl pb-4 border-b border-gray-100 text-gray-900 tracking-tight">{t('header.home')}</Link>
            
            <div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 block">{t('header.solutions')}</span>
              <div className="grid grid-cols-1 gap-2">
                {getSolutionsLinks(t).map((link) => (
                  <ListItem key={link.title} {...link} onClick={() => setOpen(false)} />
                ))}
              </div>
            </div>

            <Link 
              to="/realisations" 
              onClick={() => setOpen(false)} 
              className="font-bold text-lg py-4 border-y border-gray-100 text-gray-900 tracking-tight flex items-center justify-between"
            >
              {t('header.realisations')}
              <MoveRight className="size-5 text-primary-600" />
            </Link>

            <div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 block mt-2">{t('header.profile')}</span>
              <div className="grid grid-cols-1 gap-1">
                {getProfilLinks(t).map((item, i) => (
                  <Link
                    key={i}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex py-3 px-4 hover:bg-primary-50 text-gray-700 hover:text-primary-600 flex-row rounded-lg items-center gap-x-4 transition-colors"
                  >
                    <item.icon className="size-6 text-primary-600" />
                    <div>
                      <span className="font-bold text-lg block leading-tight">{item.title}</span>
                      <span className="text-xs text-gray-500 font-medium">{item.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </NavigationMenu>
        <div className="flex flex-col gap-3 mt-auto pb-10 pt-6">
          {/* Removed CTA buttons per user request */}
        </div>
      </MobileMenu>
    </header>
  );
}

function MobileMenu({ open, children, className, ...props }) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'bg-white/95 supports-[backdrop-filter]:bg-white/90 backdrop-blur-2xl',
        'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-gray-100 md:hidden'
      )}
    >
      <div
        className={cn(
          'animate-in slide-in-from-bottom-5 fade-in-0 duration-300 ease-out',
          'size-full',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  onClick,
  ...props
}) {
  return (
    <NavigationMenuLink asChild>
      <Link 
        to={href} 
        onClick={onClick}
        className={cn(
          'block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-50 focus:text-primary-600 group w-full', 
          className
        )} 
        {...props}
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary-100/50 flex aspect-square size-12 items-center justify-center rounded-lg group-hover:bg-primary-100 transition-colors shadow-sm shrink-0">
            <Icon className="text-primary-600 size-6" />
          </div>
          <div className="flex flex-col justify-center text-left">
            <div className="text-base font-bold text-gray-900 group-hover:text-primary-600">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

const getSolutionsLinks = (t) => [
  {
    title: t('header.projects'),
    href: '/projets',
    description: t('header.projects_desc'),
    icon: FolderOpen,
  },
  {
    title: t('header.apps'),
    href: '/applications',
    description: t('header.apps_desc'),
    icon: Briefcase,
  }
];

const getProfilLinks = (t) => [
  {
    title: t('header.profile_about'),
    href: '/about',
    description: t('header.profile_about_desc'),
    icon: User,
  },
  {
    title: t('header.profile_journey'),
    href: '/parcours',
    description: t('header.profile_journey_desc'),
    icon: Map,
  }
];

function useScroll(threshold) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
