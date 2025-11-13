
import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ThemeContext, ThemeContextType } from '../types';

const Layout: React.FC = () => {
  const context = useContext(ThemeContext);
  const location = useLocation();

  if (!context) {
    throw new Error('Layout must be used within a ThemeProvider');
  }
  const { theme } = context as ThemeContextType;

  return (
    <div className={`flex flex-col min-h-screen font-sans antialiased text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 transition-colors duration-300`}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
