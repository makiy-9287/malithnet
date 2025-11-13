import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const FaqItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 dark:border-slate-700 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                <span className="pr-4">{q}</span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="mt-3 text-slate-600 dark:text-slate-400 pt-2">
                        <p>{a}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServiceDetailPage: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const [service, setService] = useState<Service | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const currentService = SERVICES_DATA.find(s => s.id === serviceId) || null;
        setService(currentService);
    }, [serviceId]);
    
    if (!service) {
        return <div className="text-center py-20">Service not found.</div>;
    }

    return (
        <div className="bg-white dark:bg-slate-950">
            {/* Service Banner */}
            <div className="relative h-80 parallax-bg" style={{ backgroundImage: `url(${service.bannerUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-slate-900/50"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
                     <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-6 border border-white/20">
                        {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10 text-white" })}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter">{service.title}</h1>
                    <p className="mt-4 text-xl max-w-2xl text-slate-200">{service.details.description}</p>
                </div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                             <p className="lead">{service.details.longDescription}</p>
                        </div>
                       
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Service Levels</h3>
                             {service.details.serviceLevels.map((level) => (
                                <div key={level.title} className="mb-8 p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:-translate-y-1">
                                    <h4 className="font-semibold text-xl text-cyan-600 dark:text-cyan-400">{level.title}</h4>
                                    <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                                        {level.points.map((point, index) => (
                                          <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{point}</span>
                                          </li>
                                        ))}
                                    </ul>
                                </div>
                             ))}
                        </div>
                    </div>
                    <aside>
                        <div className="sticky top-24">
                             <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">FAQs</h3>
                                <div>
                                    {service.details.faqs.map((faq, index) => <FaqItem key={index} q={faq.q} a={faq.a} />)}
                                </div>
                             </div>
                        </div>
                    </aside>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-lg p-8 text-center border border-cyan-500/30 dark:border-cyan-400/30">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to Get Started?</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Let's solve your IT issues today. Contact us for a free, no-obligation quote.</p>
                        <Link to="/contact" className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
                            Request a Quote
                        </Link>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/#services" className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                            Back to All Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
