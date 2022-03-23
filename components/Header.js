import React from "react";

function Header() {
  return (
    <header classNme="dark:bg-gray-900">
      <nav classNme="container mx-auto flex justify-between">
        <div classNme="flex gap-4">
          <a classNme="text-lg dark:text-gray-100" href="#">
            Home
          </a>

          <div classNme="hidden sm:flex gap-4">
            <a classNme="text-lg dark:text-gray-100">Movies</a>
            <a classNme="text-lg dark:text-gray-100">Series</a>
          </div>
        </div>

        <button classNme="dark:text-gray-100">Dark Mode</button>
      </nav>
    </header>
  );
}

export default Header;
