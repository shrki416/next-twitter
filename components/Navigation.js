import React, { useEffect, useState } from "react";

import { CgTwitter } from "react-icons/cg";
import Link from "next/link";
import { useTheme } from "next-themes";

function Navigation() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
     setMounted(true);
   }, []);

  return (
    <header className="container mx-auto max-w-2xl">
      <div className="flex items-center justify-between py-8">
        <Link href="/">
          <a className="cursor-pointer ml-5 md:ml-0">
            <CgTwitter />
          </a>
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="/">
            <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
              Home
            </a>
          </Link>
          <Link href="/search">
            <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
              Search
            </a>
          </Link>
          <Link href="/favorites">
            <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
              Favorites
            </a>
          </Link>
        </div>
        <div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 mr-5 md:mr-0 bg-gray-200 rounded-lg dark:bg-gray-600 flex flex-end items-center justify-center hover:ring-2 ring-gray-300 transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
