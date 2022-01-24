import React, { useEffect, useState } from "react";

import Link from "next/link";
import ToggleButton from "./ToggleButton";
import { useTheme } from "next-themes";

function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="container mx-auto w-viewBox max-w-2xl">
      <div className="flex items-center justify-between p-4 md:p-8">
        <div className="md:inline-flex items-center space-x-5">
          <Link href="/">
            <a className="font-normal md:text-2xl md:inline-block p1 sm:px-3 sm:py-2 rounded-lg transition-all">
              Home
            </a>
          </Link>
          <Link href="/search">
            <a className="font-normal md:text-2xl md:inline-block p1 sm:px-3 sm:py-2 rounded-lg transition-all">
              Search
            </a>
          </Link>
          <Link href="/favorites">
            <a className="font-normal md:text-2xl md:inline-block p1 sm:px-3 sm:py-2 rounded-lg transition-all">
              Favorites
            </a>
          </Link>
        </div>

        <ToggleButton mounted={mounted} theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}

export default Navigation;
