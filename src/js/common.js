"use strict";
const SLIDER = new Swiper('#js-slider',{
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  // autoplay: {
  //   delay: 4000, // スライドが切り替わるまでの表示時間(ミリ秒)
  //   stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
  //   disableOnInteraction: true, // ユーザーのスワイプ操作を検出したら自動再生を中止するか
  // },
  pagination: {
    el: '#js-pagination',
    clickable: false,
  },
  navigation: {  //ナビゲーションボタンを表示
    prevEl: '#js-button-prev',
    nextEl: '#js-button-next',
  },
});
const PREV_BUTTON = document.getElementById('js-button-prev');
const NEXT_BUTTON = document.getElementById('js-button-next');

PREV_BUTTON.addEventListener('click', function () {
  changeSldieAnimation();
  console.log("prev");
});

NEXT_BUTTON.addEventListener('click', function () {
  changeSldieAnimation();
  console.log("next");
});

function changeSldieAnimation() {
  anime.timeline({loop: false})
  .add({
    targets: '#js-curtain_inner',
    translateY: ['-100%','0%'],
    easing: "easeOutQuint",
    duration: 300,
  }).add({
    targets: '#js-curtain_inner',
    translateY: ['0%','-100%'],
    easing: "easeOutQuint",
    duration: 300,
  });
  
  anime.timeline({loop: false})
  // .add({
  //   targets: '#js-curtain',
  //   rotate: 10,
  //   easing: "easeOutQuint",
  //   duration: 300,
  // })
  .add({
    targets: '#js-curtain',
    rotate: 0,
    easing: "easeOutQuint",
    duration: 300,
  }).add({
    targets: '#js-curtain',
    rotate:7,
    easing: "easeOutQuint",
    duration: 300,
  });
}



// const HAMBURGER_BUTTON = document.getElementById('js-hamburger-button');
// const HAMBURGER_CONT = document.getElementById('js-hamburger-cont');
// const HAMBURGER_LINK = document.querySelectorAll('.js-hamburger-link');

// HAMBURGER_BUTTON.addEventListener('click', hamburger);
// function hamburger() {
//   this.classList.toggle('js-active-content');
//   HAMBURGER_CONT.classList.toggle('is-open');
// }
// function closeHamburger() {
//   HAMBURGER_BUTTON.classList.remove('js-active-content');
//   HAMBURGER_CONT.classList.remove('is-open');
// }
// for (let i = 0; i < HAMBURGER_LINK.length; i++) {
//   HAMBURGER_LINK[i].addEventListener('click', closeHamburger);
// }

// const HAMBURGER_BUTTON = document.getElementById('js-hamburger-button');
// const HAMBURGER_CONT = document.getElementById('js-hamburger-cont');
// const HAMBURGER_LINK = document.querySelectorAll('.js-hamburger-link');


// const CHANGE_CONTENT = document.querySelectorAll('js-change');
// const PREV_BUTTON =  document.getElementById('js-button-prev');
// const NEXT_BUTTON =  document.getElementById('js-button-next');
// let last = CHANGE_CONTENT.length;

// CHANGE_CONTENT[0].classList.add("js-active-content");
// CHANGE_CONTENT[1].classList.add("js-next-content");
// CHANGE_CONTENT[last].classList.add("js-prev-content");

// function goPrev() {
//   let active =  document.querySelector('.js-active-content');
//   let next =  document.querySelector('.js-next-content');
//   let prev =  document.querySelector('.js-prev-content');

//   HAMBURGER_BUTTON.classList.remove('js-active-content');
//   HAMBURGER_CONT.classList.remove('is-open');
// }


// PREV_BUTTON.addEventListener('click', goPrev);
// NEXT_BUTTON.addEventListener('click', goNext);

//       // let num = -1;
 
//       // function slide_time() {
//       //   if (num === 2) {
//       //     num = 0;
//       //   } else {
//       //     num++;
//       //   }
//       //   document.getElementById("slide_img").src = img_src[num];
//       // }
 
//       // setInterval(slide_time, 1300);