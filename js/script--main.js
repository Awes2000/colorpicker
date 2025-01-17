const colors = document.getElementsByClassName("colors__color");
let secondColor = false;

for (let i = 0; i < colors.length; i++) {
  //color
  //nummer inclusief 1 tot 360 => hue
  //percentage

  let randomHue = Math.floor(Math.random() * (360 - 1) + 1);
  let randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";
  let randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";
  colors[
    i
  ].children[0].style.background = `hsl(${randomHue} ${randomSaturation} ${randomLightness})`;

  console.log(randomHue, randomSaturation, randomLightness);

  //onclick
  colors[i].onclick = function () {
    colors[i].children[0].classList.add("colors__circle--selected");
    navigator.clipboard.writeText(colors[i].children[0].style.background);
    document.title = colors[i].children[0].style.background;
  };
}
