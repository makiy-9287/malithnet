import React from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceLevel {
  title: string;
  points: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  imageUrl: string;
  bannerUrl: string;
  details: {
    description: string;
    longDescription: string;
    serviceLevels: ServiceLevel[];
    faqs: ServiceFAQ[];
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}
