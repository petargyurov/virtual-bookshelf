function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function spinetitle(name)
{
  let len = Number(name.innerHTML.length);
  if(len<8)
  {
    name.style.fontSize = `${25-len}px`;
  }
  else if(len<25)
  {
    name.style.fontSize = `${35-len}px`;
  }
  else if(len<35)
  {
    name.style.fontSize = "15px";
  }
  else if(len>35)
  {
    name.style.fontSize = "15px";
    name.innerHTML = name.innerHTML.slice(0, (len-10)) + "...";
  }
}

let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));
let titles = Object.values(document.getElementsByClassName("spine-title"));

let availablePatterns = ["argyle", "tartan"]; // we could probably get these programatically
let availableColours = [
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
  let randomHeight = getRandomInt(220, 290);
  s.style.height = `${randomHeight}px`;
  s.style.top = `${280 - randomHeight}px`;

  let randomPattern = randomChoice(availablePatterns);
  s.style.backgroundImage = `var(--${randomPattern})`;

  let randomColor = randomChoice(availableColours);
  s.style.backgroundColor = randomColor;

  covers[i].style.height = `${randomHeight}px`;
  covers[i].style.top = `${280 - randomHeight}px`;

  tops[i].style.top = `${280 - randomHeight}px`;
  spinetitle(titles[i]);
});