/* Get the paramater value from the URL.
 The value is the id of the image, which detail the user want to see
 */
const detailURL = window.location.href;
const url = new URL(detailURL);
let parameter = url.searchParams.get('painting');
parameter = parseInt(parameter, 10);

// load the elements
const mainTag = document.getElementById('main');
const footerTag = document.getElementById('footer');

// create the sessionStorage variable
const paintingsStorage = window.sessionStorage;

// get the painting details from the sessionStorage and parse it
const paintingData = JSON.parse(paintingsStorage.getItem(parameter));

// Template literals for the main tag and for the footer tag
const paintingDetailTemplateMain = `
<div class="painting-detail">
<div>
<div class="painting-detail__view-image">
<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
<span>View image</span>
</div>
<img class="painting-detail__image" src="${paintingData.images.hero.small}" alt="" srcset="${paintingData.images.hero.small} 600w, ${paintingData.images.hero.large} 1440w">
</div>
<div class="painting-detail__wrapper">
  <div class="painting-detail__name-author">
    <h1 class="heading heading--1 painting-detail__name">${paintingData.name}</h1>
    <h2 class="subhead subhead--1">${paintingData.artist.name}</h2>
  </div>
  <img class="painting-detail__artist" src="${paintingData.artist.image}" alt="" srcset="">
  
</div>

</div>
<div class="description">
<p class="description__year heading heading--display">${paintingData.year}</p>
<div class="description__text">
  <p class="paragraph">
    ${paintingData.description}
  </p>
  <a class="link link--2" href="${paintingData.source}">Go to source</a>
</div>

</div>
`;

/* buttons has the parameter in the link. It is called with modulo - it is a loop of images */
const paintingDetailTemplateFooter = `
<div class="footer__image-details">
        <h3 class="heading heading--3">${paintingData.name}</h3>
        <h4 class="subhead subhead--2">${paintingData.artist.name}</h4>
      </div>
      <div class="footer__buttons">
        <a href="detail.html?painting=${(((parameter - 1) % paintingsStorage.length) + paintingsStorage.length) % paintingsStorage.length}" class="button button--arrow"><svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg></a>
        <a href="detail.html?painting=${(((parameter + 1) % paintingsStorage.length) + paintingsStorage.length) % paintingsStorage.length}" class="button button--arrow"><svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg></a>
      </div>`;

mainTag.innerHTML = paintingDetailTemplateMain;
footerTag.innerHTML = paintingDetailTemplateFooter;
