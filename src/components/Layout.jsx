import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { BgGradient } from './ui/HeroAnimated';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const getGradientColor = () => {
    switch (location.pathname) {
      case '/':
        return 'blue';
      case '/projets':
        return 'purple';
      case '/applications':
        return 'skyblue';
      case '/about':
        return 'black';
      default:
        return 'blue';
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <BgGradient 
        gradientColors={getGradientColor()}
        gradientSize="lg"
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
