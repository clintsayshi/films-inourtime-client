import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900 flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
