import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />

      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
