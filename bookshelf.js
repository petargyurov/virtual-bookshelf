import { getRootCssStyles} from './cssUtils.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function adjustTextStyle(length) {
  if (length > 150) return [true, "9.5px", "23px"];
  if (length > 100) return [true, "10px", "22px"];
  if (length > 95) return [true, "10.5px", "21px"];
  if (length > 84) return [true, "11px", "20px"];
  return [false, "0px", "0px"];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));

let availablePatterns = getRootCssStyles();

let availableColors = [
  "maroon",
  "darkgreen",
  "darkolivegreen",
  "brown",
  "saddlebrown",
  "sienna",
  "midnightblue",
];

// assign a random height, pattern and colour to each book
spines.map(function (s, i) {
  const spineTitle = s.firstElementChild;
  const titleLength = [...spineTitle.textContent].length;
  const [adjustmentNeeded, fontSize, paddingBottom] = adjustTextStyle(titleLength);
  const randomHeight = adjustmentNeeded ? getRandomInt(270, 290) : getRandomInt(220, 290);

  if (adjustmentNeeded) {
    spineTitle.style.fontSize = fontSize;
    spineTitle.style.paddingBottom = paddingBottom;
  }

  s.style.height = `${randomHeight}px`;
  s.style.top = `${280 - randomHeight}px`;

  let randomPattern = randomChoice(availablePatterns);
  s.style.backgroundImage = `var(${randomPattern})`;

  let randomColor = randomChoice(availableColors);
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.top = `${280 - randomHeight}px`;
});
