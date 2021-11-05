const grid = document.getElementById('grid');

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

  // masonry snippet
  const $grid = $('.grid').imagesLoaded(() => {
    // init Masonry after all images have loaded
    $grid.masonry({
      itemSelector: '.grid-item',
      columnWidth: 160,
      gutter: 10,
    });
  });
};

/* the json data about paintings are fetched via fetch method from the localhost,
then is called the displayData function.
*/
fetch('../data.json')
  .then((response) => response.json())
  .then((data) => displayData(data));
