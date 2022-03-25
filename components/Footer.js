import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-6">
        Powered by
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Movie Database
        </a>
      </div>
    </footer>
  );
}

export default Footer;
