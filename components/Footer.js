import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-100">
      <div className="container mx-auto py-6 flex justify-between">
        <p>
          Powered by&nbsp;
          <a
            className="underline underline-offset-2"
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Movie Database
          </a>
        </p>

        <p>
          made by&nbsp;
          <a
            className="underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/clintsayshello"
          >
            Clinton
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
