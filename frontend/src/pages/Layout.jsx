
import React from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../components/navbar/NavbarContainer";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <NavbarContainer />
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
