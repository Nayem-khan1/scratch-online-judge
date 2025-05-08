import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "./shared/Container";
import Logo from "./shared/Logo";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const { toggleTheme, theme } = useTheme();
  const { toggleLanguage, language } = useLanguage();

  return (
    <nav className="bg-[#FEF9F4] dark:bg-[#1E1B26] shadow-md transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-indigo-600 dark:text-orange-300 transition-colors">
            <Logo />
          </div>

          {/* Menu & Actions */}
          <div className="flex items-center gap-4">
            {/* Problems Link */}
            <Link
              to="/tutorial"
              className="text-sm sm:text-base lg:text-lg font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-orange-400 transition-colors"
            >
              {/* {t("navbar.problems")} */}
              Tutorials
            </Link>
            
            {/* Problems Link */}
            <Link
              to="/challenges"
              className="text-sm sm:text-base lg:text-lg font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-orange-400 transition-colors"
            >
              {/* {t("navbar.problems")} */}
              Challenges
            </Link>
            {/* Problems Link */}
            <Link
              to="/practice"
              className="text-sm sm:text-base lg:text-lg font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-orange-400 transition-colors"
            >
              {/* {t("navbar.problems")} */}
              Practice
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="text-indigo-600 dark:text-yellow-300 hover:text-orange-500 dark:hover:text-yellow-400 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* Language Switch */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-xs font-bold text-indigo-600 dark:text-yellow-300 border-indigo-500 dark:border-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition"
            >
              {language === "en" ? "বাংলা" : "EN"}
            </Button>
            

            {/* Login */}
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-bold text-indigo-600 dark:text-yellow-300 border-indigo-500 dark:border-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition"
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
