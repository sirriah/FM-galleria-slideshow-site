# Frontend Mentor - Galleria slideshow site solution

This is a solution to the [Galleria slideshow site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slideshow and view each painting in a lightbox
- View the progress bar in the footer

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Vercel](https://fm-galleria-slideshow-site-sirriah.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- Vanilla JS
- [Macy.js](https://github.com/bigbite/macy.js) - masonry script
- ESLint, Prettier


### What I learned

I have some issues with the masonry script. I do not want to use the `grid-template-rows: masonry`, because the support of this in the browsers is still at the low level. So I used the macy.js script. It works fine, but I can not figured out where should I insert the masonry snippet, because the elements of the grid was inserted with template literals from js file and it caused the problem with the order of scripts and stylesheets. First, I wanted to split it into the two files, but later I put the snippet after the loop of template literals and it works.

I used the "JS-heavy" approach. I fetch the data of all paintings from the JSON files and then I use one html file called "detail.html" where the data are displayed with the template literal which is set in the "detail.js".

I stored the data of all paintings in the sessionStorage, so I cannot fetch the data with every reload.


### Continued development

I want to focus on the accessibility with the next project. I try to add some details into this project, but I don't know, if it is correct. I need to study more documentation. 


### Useful resources

- [Macy.js script](http://macyjs.com/) - This is a webpage of the masonry script. Lightweight and easy to work with.


## Author

- Frontend Mentor - [@sirriah](https://www.frontendmentor.io/profile/sirriah)

## Acknowledgments

Many thanks goes to Matt from Frontend Mentor, that he create so amazing platform :)


