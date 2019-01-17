import React, { Component } from "react";
import style from "./footer.module.css";
import github from "../images/github.svg";
// import npm from "../images/npm.svg";
// import docker from "../images/docker.svg";

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        {/* <a href="https://hub.docker.com/u/rchillard/">
          <img src={docker} alt="DockerHub Icon" className={style.icon} />
        </a>
        <a href="https://www.npmjs.com/~rchillard">
          <img src={npm} alt="NPM Icon" className={style.icon} />
        </a> */}
        <a href="https://github.com/rchillard">
          <img src={github} alt="GitHub Icon" className={style.icon} />
        </a>
      </div>
    );
  }
}

export default Footer;
