import React from 'react';
import type { Service, Testimonial } from './types';

// Icon Components
export const PcIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const CctvIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const NetworkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

export const CertifiedIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

export const FastTurnaroundIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const QualityIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

export const ConsultationIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

export const DiagnosisIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" />
    </svg>
);

export const RepairIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

export const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
    </svg>
);

export const CONTACT_INFO = {
    name: "Malith Lakshan",
    phone: "+94741907061",
    email: "contact@solotech.example.com",
    whatsappLink: "https://wa.me/94741907061",
    location: "Serving Colombo and surrounding areas",
};

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "SoloTech Solution transformed our office network. The process was seamless, professional, and the results exceeded our expectations. Highly recommended!",
        name: "John Doe",
        company: "CEO, Innovate Inc."
    },
    {
        quote: "My laptop was unusably slow. Malith diagnosed the issue quickly and had it running faster than when it was new. The service was fast and affordable.",
        name: "Jane Smith",
        company: "Freelance Designer"
    },
    {
        quote: "The new CCTV system gives us incredible peace of mind. The installation was clean, and the team provided excellent training on how to use it.",
        name: "Alex Johnson",
        company: "Homeowner"
    }
];

export const SERVICES_DATA: Service[] = [
    {
        id: 'pc-laptop',
        title: 'PC & Laptop Services',
        shortDescription: 'Comprehensive hardware and software solutions to keep your devices running at peak performance.',
        icon: <PcIcon className="w-12 h-12 text-cyan-500" />,
        imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800',
        bannerUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920',
        details: {
            description: "From routine maintenance to complex hardware repairs, we handle all aspects of PC and laptop servicing.",
            longDescription: "Our expert technicians diagnose and resolve issues efficiently, ensuring minimal downtime. We use high-quality parts and the latest diagnostic tools to provide reliable, long-lasting repairs for all major brands and custom builds.",
            serviceLevels: [
                {
                    title: 'Basic Tune-up & Optimization',
                    points: ['System health check', 'Virus & Malware removal', 'OS updates & cleanup', 'Performance enhancement']
                },
                {
                    title: 'Advanced Hardware Repair',
                    points: ['Screen & Keyboard replacement', 'Motherboard repair', 'Power supply issues', 'Component upgrades (RAM, SSD)']
                },
                {
                    title: 'Data Recovery Tiers',
                    points: ['Tier 1: Accidental deletion recovery', 'Tier 2: Formatted drive recovery', 'Tier 3: Physical damage recovery consultation']
                }
            ],
            faqs: [
                { q: "How long does a typical repair take?", a: "Most software issues are resolved within 24-48 hours. Hardware repairs depend on part availability but are typically completed within 3-5 business days." },
                { q: "Do you offer on-site support?", a: "Yes, we offer on-site support for select services in the Colombo area. Please contact us to check for availability." }
            ]
        }
    },
    {
        id: 'cctv',
        title: 'CCTV Configuration',
        shortDescription: 'Professional installation and repair of security camera systems for homes and businesses.',
        icon: <CctvIcon className="w-12 h-12 text-cyan-500" />,
        imageUrl: 'https://images.unsplash.com/photo-1588631154331-b56a12405a64?q=80&w=800',
        bannerUrl: 'https://images.unsplash.com/photo-1618374514332-53645e755034?q=80&w=1920',
        details: {
            description: "Secure your property with our reliable and high-definition CCTV solutions. We offer setup, configuration, and maintenance.",
            longDescription: "We specialize in designing and implementing surveillance systems tailored to your specific security needs. Our expertise covers both modern IP networks and traditional analog HD systems, ensuring you get the best performance and value. We are proficient with leading brands like Hikvision and Dahua.",
            serviceLevels: [
                {
                    title: 'Analog (HD) Systems',
                    points: ['Cost-effective surveillance', 'Installation using existing coaxial cables', 'DVR setup and configuration', 'System maintenance and repair']
                },
                {
                    title: 'IP (Network) Systems',
                    points: ['High-resolution video quality', 'Remote access & mobile viewing', 'NVR & PoE switch installation', 'Advanced analytics features']
                },
                {
                    title: 'System Warranty & Support',
                    points: ['1-Year warranty on installations', 'Remote troubleshooting support', 'Scheduled maintenance plans', 'User training on system operation']
                }
            ],
            faqs: [
                { q: "Can I view my cameras on my phone?", a: "Absolutely. All our modern CCTV systems (especially IP systems) come with mobile apps for remote viewing from anywhere." },
                { q: "What is the difference between Analog HD and IP cameras?", a: "IP cameras offer higher resolution and more advanced features over a network, while Analog HD cameras are a budget-friendly option that uses traditional cabling." }
            ]
        }
    },
    {
        id: 'networking',
        title: 'Networking Services',
        shortDescription: 'Expert setup, optimization, and security for your home and office network infrastructure.',
        icon: <NetworkIcon className="w-12 h-12 text-cyan-500" />,
        imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800',
        bannerUrl: 'https://images.unsplash.com/photo-1611033198586-3211756544a8?q=80&w=1920',
        details: {
            description: "We design, deploy, and manage robust networking solutions to ensure seamless connectivity and security.",
            longDescription: "A reliable network is the backbone of any modern home or office. We provide end-to-end networking services, from optimizing your home WiFi for better coverage to setting up structured cabling and server cabinets for your business.",
            serviceLevels: [
                {
                    title: 'Home Mesh WiFi Optimization',
                    points: ['Eliminate dead zones', 'Seamless roaming across your home', 'Router configuration for optimal performance', 'Parental controls & guest network setup']
                },
                {
                    title: 'Office Server Cabinet Setup',
                    points: ['Structured cabling & patch panel installation', 'Server rack and cabinet assembly', 'Switch & router configuration', 'Neat and professional cable management']
                },
                {
                    title: 'Network Security & Firewall',
                    points: ['Firewall installation & configuration', 'VPN setup for secure remote access', 'Network traffic monitoring', 'Intrusion detection systems']
                }
            ],
            faqs: [
                { q: "My WiFi is slow in some rooms. Can you fix it?", a: "Yes, a mesh WiFi system is an excellent solution for eliminating dead zones and ensuring strong, consistent WiFi coverage throughout your property." },
                { q: "What is structured cabling?", a: "It's a standardized way of installing network cabling in a building that makes it easy to manage, troubleshoot, and upgrade your network in the future." }
            ]
        }
    }
];
