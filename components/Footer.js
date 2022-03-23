import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mx-auto min-h-32">
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
