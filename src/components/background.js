import React, { Component } from "react";
import styles from "./background.module.css";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      timeOfDay: "day"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className={styles.day}>
        {/* <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button> */}
        {this.props.children}
      </div>
    );
  }
}

export default Background;
