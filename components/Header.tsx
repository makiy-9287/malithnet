import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeContext, ThemeContextType } from '../types';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const ThemeToggle: React.FC = () => {
    const context = useContext(ThemeContext);
    if (!context) return null;
    const { theme, setTheme } = context as ThemeContextType;
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-slate-950 transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

const HeaderNavLink: React.FC<{ to: string, children: React.ReactNode, className?: string, active: boolean }> = ({ to, children, className, active }) => (
    <NavLink to={to} className={`${className} group transition-colors duration-300 ${active ? 'text-cyan-600 dark:text-cyan-400' : 'hover:text-cyan-500 dark:hover:text-cyan-400'}`}>
        <span className="relative">
            {children}
            <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${active ? 'scale-x-100' : ''}`}></span>
        </span>
    </NavLink>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "px-4 py-2 text-sm font-semibold";

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-slate-950/95 shadow-md dark:shadow-slate-800/50' : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}>
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                            Solo<span className="text-cyan-500">Tech</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <HeaderNavLink to="/#services" className={navLinkClasses} active={location.hash === '#services'}>Services</HeaderNavLink>
                            <HeaderNavLink to="/contact" className={navLinkClasses} active={location.pathname === '/contact'}>Contact</HeaderNavLink>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-slate-950"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         <NavLink to="/#services" className={({ isActive }) => `block rounded-md px-3 py-2 text-base font-medium ${location.hash === '#services' ? 'text-cyan-600 dark:text-cyan-400 bg-slate-100 dark:bg-slate-800' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Services</NavLink>
                         <NavLink to="/contact" className={({ isActive }) => `block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'text-cyan-600 dark:text-cyan-400 bg-slate-100 dark:bg-slate-800' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
