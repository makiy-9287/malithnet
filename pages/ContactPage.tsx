import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICES_DATA } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formState.name.trim()) newErrors.name = "Full Name is required.";
        if (!formState.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formState.service) newErrors.service = "Please select a service.";
        if (!formState.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
        if (errors[name]) {
            setErrors(prevErrors => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) return;

        setFormStatus('submitting');
        // Simulate an API call
        setTimeout(() => {
            setFormStatus('success');
            console.log('Form submitted:', formState);
        }, 2000);
    };
    
    const handleResetForm = () => {
        setFormState({ name: '', email: '', service: '', message: '' });
        setErrors({});
        setFormStatus('idle');
    }

    const getInputClasses = (fieldName: keyof typeof formState) =>
        `w-full px-4 py-3 rounded-md bg-slate-100 dark:bg-slate-800 border-2 ${
        errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
        } focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500`;

    const labelClasses = "block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300";
    const isSubmitting = formStatus === 'submitting';

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <header className="text-center mb-16">
                 <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">Get in Touch</h1>
                 <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
                    Ready to solve your IT problems? Reach out today for a free quote or consultation.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Contact Info & Buttons */}
                <div className="space-y-8">
                    <img 
                        src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1920" 
                        alt="Technician working on a laptop"
                        className="rounded-lg shadow-lg object-cover w-full h-64"
                    />
                     <div>
                        <h2 className="text-3xl font-bold mb-2">Direct Contact</h2>
                        <p className="text-slate-600 dark:text-slate-400">For immediate assistance or urgent issues, please don't hesitate to call or send a message on WhatsApp.</p>
                     </div>

                    <div className="space-y-4">
                        <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center text-center p-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold transition-transform duration-300 hover:scale-105 shadow-md group">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            WhatsApp Chat
                        </a>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="w-full flex items-center justify-center text-center p-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-transform duration-300 hover:scale-105 shadow-md group">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            Call Malith Lakshan
                        </a>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                        <p className="font-semibold text-lg">{CONTACT_INFO.name}</p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 dark:text-slate-400 hover:text-cyan-500">{CONTACT_INFO.email}</a>
                        <br/>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 dark:text-slate-400 hover:text-cyan-500">{CONTACT_INFO.phone}</a>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{CONTACT_INFO.location}</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {formStatus === 'success' ? (
                        <div className="text-center py-10">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500/10 mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">Thank you for reaching out. Malith will get back to you shortly.</p>
                            <button 
                                onClick={handleResetForm}
                                className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-6">Or Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div>
                                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className={getInputClasses('name')} placeholder="John Doe" disabled={isSubmitting} />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className={getInputClasses('email')} placeholder="you@example.com" disabled={isSubmitting} />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>
                                <div className="relative">
                                    <label htmlFor="service" className={labelClasses}>Service Required</label>
                                    <select id="service" name="service" value={formState.service} onChange={handleChange} className={`${getInputClasses('service')} appearance-none`} disabled={isSubmitting}>
                                        <option value="" disabled>Select a service...</option>
                                        {SERVICES_DATA.map(service => (
                                            <option key={service.id} value={service.id}>{service.title}</option>
                                        ))}
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 top-8">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className={labelClasses}>Message / Issue Details</label>
                                    <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleChange} className={getInputClasses('message')} placeholder="Describe your issue here..." disabled={isSubmitting}></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>
                                <div>
                                    <button 
                                        type="submit" 
                                        className="w-full flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting && (
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
