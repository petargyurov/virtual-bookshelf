function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function identity() { // wrapped authors original code in a function in order to call it on the inserted book divs
    let spines = Object.values(document.getElementsByClassName("spine"));
    let covers = Object.values(document.getElementsByClassName("cover"));
    let tops = Object.values(document.getElementsByClassName("top"));

    let availablePatterns = ["argyle", "tartan"]; // we could probably get these programmatically
    let availableColors = [
        "maroon",
        "darkgreen",
        "darkolivegreen",
        "brown",
        "saddlebrown",
        "sienna",
        "midnightblue",
    ];

    // assign a random height, pattern and color to each book
    spines.map(function (s, i) {
        let randomHeight = getRandomInt(220, 290);
        s.style.height = `${randomHeight}px`;
        s.style.top = `${280 - randomHeight}px`;

        let randomPattern = randomChoice(availablePatterns);
        s.style.backgroundImage = `var(--${randomPattern})`;

        let randomColor = randomChoice(availableColors);
        s.style.backgroundColor = randomColor;

        covers[i].style.height = `${randomHeight}px`;
        covers[i].style.top = `${280 - randomHeight}px`;

        tops[i].style.top = `${280 - randomHeight}px`;
    });
}
function add() { // This is by MarMar using the authors original open license book div code as bookDetails feel free to use
    let cover = document.getElementById('txtCover').value;
    let title = document.getElementById('txtTitle').value;// Get value from text box
    let author = document.getElementById('txtAuthor').value;
    let book = document.createElement('div');// create new div element
    // assign original authors book div code to bookDetails
    let bookDetails = `<div class="book"> 
  <div class="side spine">
      <span class="spine-title">${title}</span>
      <span class="spine-author">${author}</span>
  </div>
  <div class="side top"></div>
  <div class="side cover"style="background-image: url(${cover})"></div>
  
  </div>`;
    book.insertAdjacentHTML('beforeend', bookDetails);// insert bookDetails into book div
    let bookshelf = document.querySelector('.bookshelf');// find bookshelf div by class
    bookshelf.appendChild(book);// add book in bookshelf div
    this.identity();// run authors original randomizer script repackaged as identity() on the new book
}

