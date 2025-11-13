import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                            Solo<span className="text-cyan-500">Tech</span> <span className="text-base font-medium">Solution</span>
                        </Link>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Your Dedicated Tech Partner.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-slate-900 uppercase dark:text-white">Quick Links</h2>
                            <ul className="text-slate-500 dark:text-slate-400 space-y-2">
                                <li><Link to="/" className="hover:text-cyan-500">Home</Link></li>
                                <li><Link to="/#services" className="hover:text-cyan-500">Services</Link></li>
                                <li><Link to="/contact" className="hover:text-cyan-500">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-slate-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-slate-500 dark:text-slate-400 space-y-2">
                                <li><a href="#" className="hover:text-cyan-500">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-cyan-500">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">
                        © {new Date().getFullYear()} Solo Tech Solution. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        {/* Placeholder Social Icons */}
                        {/* FIX: Explicitly pass SVG as children prop to fix typing error */}
                        <SocialIcon href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                        {/* FIX: Explicitly pass SVG as children prop to fix typing error */}
                        <SocialIcon href="#">
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
