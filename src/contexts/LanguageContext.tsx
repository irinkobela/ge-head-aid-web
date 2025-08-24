import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ka';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Navigation
    home: 'Home',
    education: 'Educational Resources',
    research: 'Research & Publications',
    support: 'Patient Support',
    news: 'News & Updates',
    about: 'About Us',
    
    // Homepage
    heroTitle: 'Georgian Headache and Migraine Organization',
    heroSubtitle: 'Dedicated to improving the lives of those affected by headaches and migraines through research, education, and support.',
    learnMore: 'Learn More',
    getSupport: 'Get Support',
    
    // Mission
    missionTitle: 'Our Mission',
    missionText: 'To advance understanding, treatment, and prevention of headache disorders while providing comprehensive support to patients and their families.',
    
    // Featured sections
    featuredNews: 'Featured News',
    latestResearch: 'Latest Research',
    patientResources: 'Patient Resources',
    
    // Education page
    educationTitle: 'Educational Resources',
    overview: 'Overview',
    symptoms: 'Symptoms',
    treatments: 'Treatments',
    prevention: 'Prevention',
    lifestyle: 'Lifestyle Tips',
    glossary: 'Medical Glossary',
    
    // Research page
    researchTitle: 'Research & Publications',
    studySummaries: 'Study Summaries',
    localData: 'Local Data',
    researchTeam: 'Research Team',
    publications: 'Publications',
    
    // Support page
    supportTitle: 'Patient & Caregiver Support',
    faqs: 'Frequently Asked Questions',
    guides: 'Patient Guides',
    migraineDiary: 'Migraine Diary',
    practicalTips: 'Practical Tips',
    
    // News page
    newsTitle: 'News & Updates',
    articles: 'Articles',
    events: 'Events Calendar',
    mediaGallery: 'Media Gallery',
    
    // About page
    aboutTitle: 'About Us',
    mission: 'Mission',
    history: 'History',
    leadership: 'Leadership',
    partners: 'Partners',
    contact: 'Contact Information',
    
    // Common
    readMore: 'Read More',
    downloadPdf: 'Download PDF',
    backToHome: 'Back to Home',
  },
  ka: {
    // Navigation (Georgian)
    home: 'მთავარი',
    education: 'საგანმანათლებლო რესურსები',
    research: 'კვლევა და პუბლიკაციები',
    support: 'პაციენტთა მხარდაჭერა',
    news: 'სიახლეები',
    about: 'ჩვენ შესახებ',
    
    // Homepage
    heroTitle: 'საქართველოს თავის ტკივილისა და შაკიკის ორგანიზაცია',
    heroSubtitle: 'ვეძღვნებით თავის ტკივილითა და შაკიკით დაზარალებულთა ცხოვრების გაუმჯობესებას კვლევის, განათლებისა და მხარდაჭერის მეშვეობით.',
    learnMore: 'გაიგე მეტი',
    getSupport: 'მიღე მხარდაჭერა',
    
    // Mission
    missionTitle: 'ჩვენი მისია',
    missionText: 'თავის ტკივილის დაავადებების გაგება-გააზრების, მკურნალობისა და პრევენციის განვითარება, პაციენტებისა და მათი ოჯახების ყოვლისმომცველი მხარდაჭერის უზრუნველყოფასთან ერთად.',
    
    // Featured sections
    featuredNews: 'რჩეული სიახლეები',
    latestResearch: 'უახლესი კვლევა',
    patientResources: 'პაციენტის რესურსები',
    
    // Education page
    educationTitle: 'საგანმანათლებლო რესურსები',
    overview: 'მიმოხილვა',
    symptoms: 'სიმპტომები',
    treatments: 'მკურნალობა',
    prevention: 'პრევენცია',
    lifestyle: 'ცხოვრების წესის რჩევები',
    glossary: 'სამედიცინო ტერმინთა განმარტება',
    
    // Research page
    researchTitle: 'კვლევა და პუბლიკაციები',
    studySummaries: 'კვლევის შეჯამება',
    localData: 'ადგილობრივი მონაცემები',
    researchTeam: 'საკვლევი ჯგუფი',
    publications: 'პუბლიკაციები',
    
    // Support page
    supportTitle: 'პაციენტისა და მომვლელის მხარდაჭერა',
    faqs: 'ხშირად დასმული კითხვები',
    guides: 'პაციენტის სახელმძღვანელოები',
    migraineDiary: 'შაკიკის დღიური',
    practicalTips: 'პრაქტიკული რჩევები',
    
    // News page
    newsTitle: 'სიახლეები და განახლებები',
    articles: 'სტატიები',
    events: 'ღონისძიებების კალენდარი',
    mediaGallery: 'მედია გალერეა',
    
    // About page
    aboutTitle: 'ჩვენ შესახებ',
    mission: 'მისია',
    history: 'ისტორია',
    leadership: 'ხელმძღვანელობა',
    partners: 'პარტნიორები',
    contact: 'საკონტაქტო ინფორმაცია',
    
    // Common
    readMore: 'წაიკითხე მეტი',
    downloadPdf: 'ჩამოტვირთე PDF',
    backToHome: 'მთავარ გვერდზე დაბრუნება',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ka')) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};