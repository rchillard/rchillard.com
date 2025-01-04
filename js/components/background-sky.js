class BackgroundSky extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root
      this.attachShadow({ mode: "open" });
  
      // State variables
      this.timeOfDay = new Date().getHours();
  
      // Styles
      this.styles = `
        .container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .dawn { background-color: #FFCC99; }
        .day { background-color: #87CEFA; }
        .dusk { background-color: #FF7F50; }
        .night { background-color: #2C3E50; }
      `;
    }
  
    static get observedAttributes() {
      return ["background"];
    }

    connectedCallback() {
      this.render();
      this.updateCanvas();
    }
  
    drawStar(x, y, size, context) {
      context.fillStyle = "whitesmoke";
      context.fillRect(x, y, size, size);
    }

    getBackgroundColor(hour) {
      if (hour >= 5 && hour <= 8) return "dawn";
      if (hour > 8 && hour < 18) return "day";
      if (hour >= 18 && hour <= 21) return "dusk";
      return "night";
    }

    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    updateCanvas() {
      const canvas = this.shadowRoot.querySelector(".stars");
      const context = canvas.getContext("2d");
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
  
      for (let i = 0; i < 250; i++) {
        this.drawStar(
          this.getRndInteger(0, canvas.width),
          this.getRndInteger(0, canvas.height),
          1,
          context
        );
      }
    }
  
    render() {
      // Determine the background class
      const backgroundColor = this.getBackgroundColor(this.timeOfDay);
  
      this.shadowRoot.innerHTML = `
        <style>${this.styles}</style>
        <div class="container ${backgroundColor}">
          <canvas class="stars"></canvas>
          <slot></slot>
        </div>
      `;
    }

  }
  
  // Define the custom element
  customElements.define("background-sky", BackgroundSky);
  