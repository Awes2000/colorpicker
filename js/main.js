class ColorCard {
  id;
  color;
  addToList;
  htmlElement;
  circle;
  text;

  constructor(newId, newColor, htmlElement) {
    this.id = newId;
    this.color = newColor;
    this.addToList = htmlElement;

    /* make htmlElement to render */
    this.htmlElement = document.createElement("li");
    this.htmlElement.classList = "colors__color";
    this.circle = document.createElement("figure");
    this.circle.classList = "colors__circle";
    this.circle.style.background = this.color;
    this.text = document.createElement("p");
    this.text.innerText = "Copied";
    this.text.classList = "colors__text";
    this.htmlElement.onclick = this.onHTMLElementClicked;
    /* final render */
    this.render();
  }

  onHTMLElementClicked = () => {
    this.circle.classList.add("colors__circle--selected");
    document.title = this.color;
    window.navigator.clipboard.writeText(this.color);
  };

  render() {
    this.htmlElement.appendChild(this.circle);
    this.addToList.appendChild(this.htmlElement);
    this.htmlElement.appendChild(this.text);
  }
}

class ColorList {
  id;
  htmlElement;
  constructor(newId) {
    this.id = newId;
    this.htmlElement = document.createElement("ul");
    this.htmlElement.id = this.id;
    this.htmlElement.classList.add("colors");
    this.render();

    /* video 2 minuut 10 gestopt video 8 */
  }

  render() {
    document.querySelector("body").appendChild(this.htmlElement);
  }
}

class HSLGenerator {
  randomHue;
  randomSaturation;
  randomLightness;
  constructor() {
    this.generateHSL();
    this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
    this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
    this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`;
  }
  generateHue = function () {
    this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
  };
  generateSaturation = function () {
    this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
  };
  generateLightness = function () {
    this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
  };
  generateHSL = function () {
    this.generateHue();
    this.generateSaturation();
    this.generateLightness();
    this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`;
  };
}
/*Client */
let generator = new HSLGenerator();
let list = new ColorList("js--list");

for (let i = 1; i < 100; i++) {
  generator.generateHSL();
  new ColorCard(i, generator.hsl, document.getElementById(list.id));
}

console.log(generator);
//new ColorCard(i, hsl, document.getElementById(colorList.id));
