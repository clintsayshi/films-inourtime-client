import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Header />

      {children}

      <Footer />
    </div>
  );
}

export default Layout;
