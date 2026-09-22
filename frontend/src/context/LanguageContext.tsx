import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
  translateCrop: (crop: string) => string;
  translateLocation: (loc: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('fasalbridge_lang');
    return (saved === 'hi' || saved === 'pa' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('fasalbridge_lang', lang);
  };

  const t = (key: keyof Translations): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const translateCrop = (crop: string): string => {
    const lower = crop.toLowerCase();
    if (lower === 'tomato') return t('crop_tomato');
    if (lower === 'onion') return t('crop_onion');
    if (lower === 'potato') return t('crop_potato');
    if (lower === 'wheat') return t('crop_wheat');
    if (lower === 'rice') return t('crop_rice');
    return crop;
  };

  const translateLocation = (loc: string): string => {
    const lower = loc.toLowerCase();
    if (lower === 'mohali') return t('loc_mohali');
    if (lower === 'chandigarh') return t('loc_chandigarh');
    if (lower === 'patiala') return t('loc_patiala');
    if (lower === 'ludhiana') return t('loc_ludhiana');
    if (lower === 'delhi') return t('loc_delhi');
    return loc;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateCrop, translateLocation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
