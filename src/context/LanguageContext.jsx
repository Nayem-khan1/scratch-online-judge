import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLanguage(storedLang);
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
