import React from "react";
import { Button } from "@/components/ui/button"; // Use your existing Button
import Logo from "@/components/shared/Logo";
import { Link } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="min-h-screen w-full">
      {/* Navbar */}
      <header className="w-full px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between shadow-md">
        <Logo />
        <div className="space-x-4">
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
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-16 gap-10 text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-normal tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                Coding Made Playful. Learning Made Fun
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-center">
              Discover the joy of problem-solving with blocks! CodePlay turns
              kids into coding heroes with interactive puzzles, challenges, and
              achievements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/challenges" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
                Explore Problems
              </Link>
              <Link className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 dark:text-indigo-200 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors">
                Tutorials
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-white dark:bg-card-dark shadow-xl rounded-2xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-300">
                Login
              </h2>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-sm"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-sm"
                />
                <Button className="btn-primary w-full">Login</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © 2025 BlockChamp. All rights reserved.
      </footer>
    </div>
  );
}
