import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AuroraBackground } from './ui/StarfallPortfolio';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-background transition-colors duration-500">
      <AuroraBackground />
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
