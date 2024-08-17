import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../COMPONENTS/HEADER/Header";
import Footer from "../COMPONENTS/FOOTER/Footer";

function Layout() {
  return (
    <main>
      <header>
        <Header />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
