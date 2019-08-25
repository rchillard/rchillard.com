import React from "react";
import { Helmet } from "react-helmet";
// import { css } from "react-emotion";
// import { rhythm } from "../utils/typography";
import Background from "./background";
import Header from "./header";
import Footer from "./footer";
import style from "./layout.module.css";

export default ({ children }) => (
  <Background>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RCH | Servant leader, shortstack developer</title>
      <link rel="canonical" href="https://rchillard.com" />
    </Helmet>
    <Header />
    <div className={style.layout}>{children}</div>
    <Footer />
  </Background>
);
