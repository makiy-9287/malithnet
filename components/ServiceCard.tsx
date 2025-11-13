import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <Link 
            to={`/services/${service.id}`}
            className="group block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300"
        >
            <div className="overflow-hidden">
                 <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 mb-6 -mt-16 bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400">{service.shortDescription}</p>
                <div className="mt-6 font-semibold text-cyan-600 dark:text-cyan-400 flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;