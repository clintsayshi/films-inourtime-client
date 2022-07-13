import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const toggleDarkMode = () => {
    if (
      document.documentElement.getAttribute("data-theme") == "light" ||
      document.documentElement.getAttribute("data-theme") == null
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  const router = useRouter();

  const links = [
    ["Home", "/"],
    /*["Movies", "/movies"],
    ["TV Shows", "/tvshows"],*/
  ];

  return (
    <header className="bg-gray-50 dark:bg-gray-900">
      <nav className="container mx-auto p-4 sm:px-0 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/*  <button className="sm:hidden text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button> */}
          <Link href="/">
            <a className={`text-base dark:text-gray-100 underline-offset-4`}>
              WS
            </a>
          </Link>

          <div className="hidden sm:flex gap-4">
            {links.map(([title, url], key) => (
              <Link key={key} href={url}>
                <a
                  className={`text-base dark:text-gray-100 underline-offset-4 ${
                    url == router.pathname ? "underline" : ""
                  }`}
                >
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="text-gray-900 dark:text-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
          <button className="hidden text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
