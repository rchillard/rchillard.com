import React, { Component } from "react";
import styles from "./background.module.css";

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true,
      timeOfDay: new Date().getHours()
    };
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  drawStar(x, y, size, canvas) {
    canvas.strokeStyle = "whitesmoke";
    canvas.strokeRect(x, y, size, size);
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = this.refs.stars;
    const context = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    for (var i = 0; i < 250; i++) {
      this.drawStar(
        this.getRndInteger(0, canvas.width),
        this.getRndInteger(0, canvas.height),
        1,
        context
      );
    }
  }

  render() {
    const hour = this.state.timeOfDay;
    let background = { backgroundColor: "gray" };
    if (hour >= 5 && hour <= 8) {
      background = styles.dawn;
    } else if (hour > 8 && hour < 18) {
      background = styles.day;
    } else if (hour >= 18 && hour <= 21) {
      background = styles.dusk;
    } else {
      background = styles.night;
    }

    return (
      <div className={background}>
        <canvas ref="stars" className={styles.stars} />
        {this.props.children}
      </div>
    );
  }
}

export default Background;
