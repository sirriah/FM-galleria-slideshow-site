/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const grid = document.getElementById('grid');

// the paintings details are load from JSON file and saved in the Session Storage
const paintingsStorage = window.sessionStorage;

/* For each item in the array is called the Template Literal,
The index of the painting is added to the end of the href link - GET method */
const displayData = (data) => {
  data.forEach((element, index) => {
    grid.innerHTML += `
    <section class="image-wrapper grid-item">
      <a class="grid-item__link" href="detail.html?painting=${index}" data-id="${element.key}">
        <div class="grid-item__text">
          <h2 class="heading heading--2 white">${element.name}</h2>
          <p class="subhead subhead--2 white--opacity">${element.artist.name}</p>
        </div>
        <img class="grid-item__image" src="${element.images.thumbnail}" alt="${element.name}, author ${element.artist.name}">
      </a>
    </section>`;

    paintingsStorage.setItem(index, JSON.stringify(element));
  });

  // after the template literal is set, design the grid as masonry with macy.js script
  /*
    This can not be in the separate file, because there is a problem with the order of the scripts.
    This function has to be there, after the template literals are set.
  */
  const macyInstance = Macy({
    container: '.grid',
    columns: 4,
    margin: 40,
    breakAt: {
      1100: 3,
      840: 2,
      600: 1,
    },
    waitForImages: true,
  });
};

/* the json data about paintings are fetched via fetch method from the root directory,
then is called the displayData function.
*/
fetch('../data.json')
  .then((response) => response.json())
  .then((data) => displayData(data));
