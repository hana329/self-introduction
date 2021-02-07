"use strict";

const HAMBURGER_BUTTON = document.getElementById('js-hamburger-button');
const HAMBURGER_CONT = document.getElementById('js-hamburger-cont');
const HAMBURGER_LINK = document.querySelectorAll('.js-hamburger-link');

HAMBURGER_BUTTON.addEventListener('click', hamburger);
function hamburger() {
  this.classList.toggle('js-active-content');
  HAMBURGER_CONT.classList.toggle('is-open');
}
function closeHamburger() {
  HAMBURGER_BUTTON.classList.remove('js-active-content');
  HAMBURGER_CONT.classList.remove('is-open');
}
for (let i = 0; i < HAMBURGER_LINK.length; i++) {
  HAMBURGER_LINK[i].addEventListener('click', closeHamburger);
}

const HAMBURGER_BUTTON = document.getElementById('js-hamburger-button');
const HAMBURGER_CONT = document.getElementById('js-hamburger-cont');
const HAMBURGER_LINK = document.querySelectorAll('.js-hamburger-link');


const CHANGE_CONTENT = document.querySelectorAll('js-change');
const PREV_BUTTON =  document.getElementById('js-button-prev');
const NEXT_BUTTON =  document.getElementById('js-button-next');
let last = CHANGE_CONTENT.length;

CHANGE_CONTENT[0].classList.add("js-active-content");
CHANGE_CONTENT[1].classList.add("js-next-content");
CHANGE_CONTENT[last].classList.add("js-prev-content");

function goPrev() {
  let active =  document.querySelector('.js-active-content');
  let next =  document.querySelector('.js-next-content');
  let prev =  document.querySelector('.js-prev-content');

  HAMBURGER_BUTTON.classList.remove('js-active-content');
  HAMBURGER_CONT.classList.remove('is-open');
}


PREV_BUTTON.addEventListener('click', goPrev);
NEXT_BUTTON.addEventListener('click', goNext);

      // let num = -1;
 
      // function slide_time() {
      //   if (num === 2) {
      //     num = 0;
      //   } else {
      //     num++;
      //   }
      //   document.getElementById("slide_img").src = img_src[num];
      // }
 
      // setInterval(slide_time, 1300);