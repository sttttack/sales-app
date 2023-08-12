import Header from "./UI/Layout/Header";
import Footer from "./UI/Layout/Footer";
import { Outlet } from "react-router-dom";

import classes from "../components/RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <div className={classes.content}>
        <Outlet />
      </div>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
}
