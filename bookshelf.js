import { getRootCssStyles} from './cssUtils.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));
let books = Object.values(document.getElementsByClassName("book"));

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

const MIN_BOOK_HEIGHT = 220;
const MAX_BOOK_HEIGHT = 290;
const MIN_SPINE_WIDTH = 35;
const MAX_SPINE_WIDTH = 65;

// assign a random height, width, pattern and colour to each book
spines.map(function (s, i) {
  let randomHeight = getRandomInt(MIN_BOOK_HEIGHT, MAX_BOOK_HEIGHT);
  let randomSpineWidth = getRandomInt(MIN_SPINE_WIDTH, MAX_SPINE_WIDTH);

  books[i].style.width = `${randomSpineWidth}px`;

  s.style.height = `${randomHeight}px`;
  s.style.width = `${randomSpineWidth}px`;
  s.style.top = `${280 - randomHeight}px`;

  let randomPattern = randomChoice(availablePatterns);
  s.style.backgroundImage = `var(${randomPattern})`;

  let randomColor = randomChoice(availableColors);
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.width = `${randomSpineWidth}px`;
  tops[i].style.top = `${280 - randomHeight}px`;

  covers[i].style.left = `${randomSpineWidth}px`;
});
