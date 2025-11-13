import React, { useRef, useEffect, ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('is-visible');
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => observer.unobserve(element);
    }, []);

    return (
        <div ref={sectionRef} className={`will-fade-in ${className || ''}`}>
            {children}
        </div>
    );
};

export default AnimatedSection;