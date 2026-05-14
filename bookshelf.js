import {
  getAngleInRadians,
  getRandomInt,
  getRootCssStyles,
  randomChoice,
} from "./utils.js";

const SLANTED_BOOK_ANGLE = 12;
const MIN_BOOK_HEIGHT = 220;
const MAX_BOOK_HEIGHT = 290;
const MIN_SPINE_WIDTH = 35;
const MAX_SPINE_WIDTH = 65;

let spines = Array.from(document.getElementsByClassName("spine"));
let covers = Array.from(document.getElementsByClassName("cover"));
let tops = Array.from(document.getElementsByClassName("top"));
let books = Array.from(document.getElementsByClassName("book"));

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

// handle positioning for leaning books
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

  let previousBook = books[i - 1];

  // if the previous book is a non-leaning book, offset the position for the current leaning book
  if (previousBook && !previousBook.classList.contains("slanted-book")) {
    let spineHeight = spines[i].offsetHeight;
    let currentSpineHeight = parseFloat(spineHeight);
    let offset = Math.abs(Math.sin(leanAngle) * currentSpineHeight) + 1;
    book.style.marginLeft = `${offset}px`;
  }
});
