import React, { Component } from "react";
import { Link } from "gatsby";
import style from "./header.module.css";
import logo from "../images/logo.svg";
import github from "../images/github.svg";

class Header extends Component {
  render() {
    return (
      <div className={style.header}>
        <Link to={`/`}>
          <img src={logo} alt="Ryan's Rocket Ship" className={style.logo} />
        </Link>
        <ul>
          {/* <li>Leadership</li>
          <li>Development</li> */}
          <li>
            <Link to={`/about/`}>About</Link>
          </li>
          <li>
            <a href="https://github.com/rchillard">
              <img src={github} alt="GitHub Icon" className={style.icon} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
