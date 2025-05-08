import Container from "@/components/shared/Container";
import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <Container>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-normal tracking-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
            Welcome to our Scratch Judge
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-center">
          A platform for competitive programming and coding challenges. A
          platform for competitive programming and coding challenges. A platform
          for competitive programming and coding challenges.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
            Explore Problems
          </Link>
          <Link className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 dark:text-indigo-200 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors">
            Learn More
          </Link>
        </div>
      </Container>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-blue-600"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-purple-600"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:bg-indigo-600"></div>
      </div>
    </section>
  );
}

export default Hero;
