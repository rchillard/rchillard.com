// Import the BackgroundComponent module
// import './components/background-sky.js';

// Additional initialization or component logic (if needed)
// console.debug('main.js: All components loaded!');

function calculateBackgroundColor() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour <= 8) return "bg-dawn";
    if (hour > 8 && hour < 18) return "bg-day";
    if (hour >= 18 && hour <= 21) return "bg-dusk";
    return "bg-night";
}

function setBackgroundColor() {
    const backgroundElement = document.querySelector(".background");
    // backgroundElement.classList.add(calculateBackgroundColor()); // Native alternative to:
    backgroundElement.className += ` | ${calculateBackgroundColor()}`;
}

document.addEventListener("DOMContentLoaded", () => {
    console.debug("DOM is fully loaded and parsed");
    setBackgroundColor();
});

console.debug('main.js loaded')