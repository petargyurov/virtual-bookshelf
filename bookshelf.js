import { getRootCssStyles } from "./cssUtils.js";

const SLANTED_BOOK_ANGLE = 12;
const MIN_BOOK_HEIGHT = 220;
const MAX_BOOK_HEIGHT = 290;
const MIN_SPINE_WIDTH = 35;
const MAX_SPINE_WIDTH = 65;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getAngleInRadians(value) {
  return (parseFloat(value) * Math.PI) / 180;
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

books.forEach(function (book, i) {
  if (!book.classList.contains("slanted-book")) {
    return;
  }

  book.style.setProperty("--lean-angle", `-${SLANTED_BOOK_ANGLE}deg`);

  let computedBookStyles = getComputedStyle(book);
  let baseMarginLeft = parseFloat(computedBookStyles.marginLeft) || 0;
  let leanAngle = getAngleInRadians(
    computedBookStyles.getPropertyValue("--lean-angle"),
  );
  let spineHeight =
    parseFloat(spines[i].style.height) || spines[i].offsetHeight;
  let leftwardLean = Math.abs(Math.sin(leanAngle) * spineHeight) + 1;

  book.style.marginLeft = `${Math.max(baseMarginLeft, leftwardLean)}px`;
});
