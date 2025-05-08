// src/pages/LandingPage.jsx

import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import { Link } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Moon, Sun } from "lucide-react";

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between shadow-sm bg-white dark:bg-background-dark sticky top-0 z-10">
        <Logo />
        <div className="flex items-center gap-3">
          {/* Theme Switch */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-indigo-600 dark:text-yellow-300 hover:text-orange-500 dark:hover:text-yellow-400"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs font-semibold border-indigo-500 dark:border-yellow-400 text-indigo-600 dark:text-yellow-300"
          >
            {language === "en" ? "বাংলা" : "EN"}
          </Button>

          {/* Login Button */}
          <Link to="/login">
            <Button variant="outline" size="sm" className="text-xs font-semibold">
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-20 gap-10 overflow-hidden">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
            Coding Made Playful. Learning Made Fun.
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 mb-8">
            Discover the joy of problem-solving with blocks! BlockChamp turns
            kids into coding heroes through interactive puzzles and gamified learning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link to="/problems">
              <Button className="btn-primary">Explore Problems</Button>
            </Link>
            <Link to="/tutorials">
              <Button variant="outline" className="btn-secondary">Tutorials</Button>
            </Link>
          </div>
        </div>

        {/* Right: Login Box */}
        <div className="flex-1 flex justify-center">
          <div className="card w-full max-w-md">
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

        {/* Blurred Gradient Backgrounds */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © 2025 BlockChamp. All rights reserved.
      </footer>
    </div>
  );
}
