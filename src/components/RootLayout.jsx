import React from "react";
import Header from "./UI/Layout/Header";
import Footer from "./UI/Layout/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
