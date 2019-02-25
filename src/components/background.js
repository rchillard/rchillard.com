import React, { Component } from "react";
import styles from "./background.module.css";

class Background extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isToggleOn: true,
      timeOfDay: new Date().getHours()
    }
  }

  render() {
    const hour = this.state.timeOfDay
    let background = { backgroundColor: 'gray' }
    if (hour >= 5 && hour <= 8) {
      background = styles.dawn
    } else if (hour > 8 && hour < 18) {
      background = styles.day
    } else if (hour >= 18 && hour <= 21) {
      background = styles.dusk
    } else {
      background = styles.night
    }
  
    return (
      <div className={background}>
        {this.props.children}
      </div>
    );
  }
}

export default Background;
