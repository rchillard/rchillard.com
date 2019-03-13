import React, { Component } from "react";
import style from "./footer.module.css";
// import launchpad from "../images/rch-launchpad.svg";
import github from "../images/rch-github.svg";
import npm from "../images/rch-npm.svg";
import docker from "../images/rch-docker.svg";

class Footer extends Component {
  render() {
    return (
      <div className={style.ground}>
        <div className={style.footer}>
        {/* <img src={launchpad} alt="RCH Launchpad Icon" className={style.pad} /> */}
          <a href="https://github.com/rchillard">
            <img src={github} alt="RCH GitHub Icon" className={style.special} />
          </a>
          <a href="https://www.npmjs.com/~rchillard">
            <img src={npm} alt="RCH NPM Icon" className={style.icon} />
          </a>
          <a href="https://hub.docker.com/u/rchillard/">
            <img src={docker} alt="RCH Docker Icon" className={style.icon} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
