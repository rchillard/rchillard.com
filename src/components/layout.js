import React from "react";
// import { css } from "react-emotion";
// import { rhythm } from "../utils/typography";
import Background from "./background";
import Header from "./header";
import Footer from "./footer";
import style from "./layout.module.css";

export default ({ children }) => (
  <Background>
    <Header />
    {/* This is the main pane/content section */}
    <div className={style.layout}>{children}</div>
    <Footer />
  </Background>
);
