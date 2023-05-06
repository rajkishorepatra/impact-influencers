import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

// this is the root layout for the website
// navbar and footer can be placed here and
// other elements will replace Outlet accoring to routes.

export default function Root() {
  return (
    <>
      <div className="position-relative">
        <div className="fixed-top">
          <NavBar />
        </div>
        <div className=""  style={{ marginTop: "54px" }}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
