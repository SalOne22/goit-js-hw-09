export default class ColorSwitcher {
  constructor(delay) {
    this.delay = delay;
  }

  startColorSwitch() {
    this.id = setInterval(() => {
      this.#updateBodyColor(this.#getRandomHexColor());
    }, this.delay);
  }

  stopColorSwitch() {
    clearInterval(this.id);
  }

  #updateBodyColor(color) {
    document.body.style.backgroundColor = color;
  }

  #getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}
