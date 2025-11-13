import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA, TESTIMONIALS_DATA, CertifiedIcon, FastTurnaroundIcon, QualityIcon, ConsultationIcon, DiagnosisIcon, RepairIcon, QuoteIcon } from '../constants';
import { ThemeContext } from '../types';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const whyChooseUsRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const context = useContext(ThemeContext);
    const theme = context?.theme;

    const [heroScrollStyle, setHeroScrollStyle] = useState({});

    useEffect(() => {
        if (location.hash === '#services' && servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            // Enhanced animation: fade out over a longer distance and add a subtle scale effect.
            const opacity = 1 - Math.min(1, offset / 500);
            const translateY = offset * 0.4;
            const scale = 1 - Math.min(0.05, offset / 1000);

            setHeroScrollStyle({
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleScrollDown = () => {
        whyChooseUsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            {/* Hero Section */}
            <section 
                className="relative text-white parallax-bg h-[90vh] min-h-[600px] flex items-center justify-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1920')" }}
            >
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
                <div 
                    className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-300 ease-out"
                    style={heroScrollStyle}
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white animate-fade-in-down">
                        IT Solutions, Simplified.
                        <br />
                        <span className="text-cyan-400">Reliability, Delivered.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-200">
                        Expert service for your PCs, Laptops, CCTV, and Network Infrastructure.
                        <br />
                        Malith Lakshan - Your Dedicated Tech Partner.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/contact"
                            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
                        >
                            Book a Service
                        </Link>
                    </div>
                </div>
                <div 
                    onClick={handleScrollDown}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
                    style={{ opacity: (heroScrollStyle as any).opacity }}
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/50 group-hover:border-white transition-colors animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section ref={whyChooseUsRef} className="py-20 bg-slate-50 dark:bg-slate-900">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Why Choose SoloTech?</h2>
                            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                            Reliable service you can count on, every time.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatedSection>
                            <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-lg">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mx-auto mb-4">
                                    <CertifiedIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certified Expertise</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">Professional, certified technician with years of hands-on experience.</p>
                            </div>
                        </AnimatedSection>
                         <AnimatedSection>
                            <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-lg">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mx-auto mb-4">
                                    <FastTurnaroundIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Fast Turnaround</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">Efficient diagnostics and repairs to get you back up and running quickly.</p>
                            </div>
                         </AnimatedSection>
                         <AnimatedSection>
                            <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/50 hover:shadow-lg">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mx-auto mb-4">
                                    <QualityIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Guaranteed Quality</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">Commitment to quality service and long-lasting solutions for your peace of mind.</p>
                            </div>
                         </AnimatedSection>
                    </div>
                </div>
            </section>
            
            {/* Our Process Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Our Simple & Effective Process</h2>
                            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                                We make getting expert IT help straightforward and hassle-free.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-px h-[calc(100%-4rem)] bg-slate-200 dark:bg-slate-700 hidden md:block" aria-hidden="true"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
                            <AnimatedSection className="text-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mx-auto mb-4 border-2 border-cyan-500">
                                    <ConsultationIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">1. Consultation</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">Contact us with your issue. We'll listen and provide initial advice.</p>
                            </AnimatedSection>
                             <AnimatedSection className="text-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mx-auto mb-4 border-2 border-cyan-500">
                                    <DiagnosisIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">2. Diagnosis & Quote</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">We perform a thorough diagnosis and provide a transparent, no-obligation quote.</p>
                            </AnimatedSection>
                             <AnimatedSection className="text-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mx-auto mb-4 border-2 border-cyan-500">
                                    <RepairIcon className="h-8 w-8 text-cyan-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">3. Repair & Service</h3>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">Our expert technician gets to work, resolving the issue with precision and care.</p>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services Section */}
            <section id="services" ref={servicesRef} className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Our Core Services</h2>
                            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                                Comprehensive IT solutions tailored to your needs.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES_DATA.map((service, index) => (
                             <AnimatedSection key={service.id}>
                                <ServiceCard service={service} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">What Our Clients Say</h2>
                            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                                We take pride in the positive feedback from our valued clients.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS_DATA.map((testimonial, index) => (
                            <AnimatedSection key={index}>
                                <div className="h-full bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-500/30">
                                    <QuoteIcon className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-4 fill-current" />
                                    <blockquote className="flex-grow text-slate-600 dark:text-slate-300">
                                        <p>"{testimonial.quote}"</p>
                                    </blockquote>
                                    <footer className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                                        <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</p>
                                    </footer>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
