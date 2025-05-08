import React from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-router";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 group transition-opacity hover:opacity-90"
      aria-label="BlockChamp Home"
    >
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <img
          src={logo}
          alt="BlockChamp Logo"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
        {/* Glow ring effect */}
        <span className="absolute inset-0 animate-pulse opacity-20 group-hover:opacity-40"></span>
      </div>

      <span className="text-lg sm:text-2xl font-extrabold tracking-wide text-indigo-600 dark:text-indigo-300 group-hover:text-orange-500 transition-colors duration-300">
        BlockChamp
      </span>
    </Link>
  );
}

export default Logo;
