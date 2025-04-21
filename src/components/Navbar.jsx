import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState(i18n.language || "en");

  // Toggle Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLanguage(storedLang);
      i18n.changeLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "bn" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        <Link to="/">Scratch Judge</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/problems" className={`text-sm font-medium `}>
          {t("navbar.problems")}
        </Link>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="text-xs"
        >
          {language === "en" ? "বাংলা" : "EN"}
        </Button>
      </div>
    </nav>
  );
}
