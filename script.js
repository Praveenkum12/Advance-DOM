'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const headerEl = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// btnScrollTo.addEventListener('click', function () {
//   sectionOneEl.scrollIntoView({ behavior: 'smooth' });
// });

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);
    const ref = e.target.getAttribute('href');
    console.log(ref);
    document.querySelector(ref).scrollIntoView({ behavior: 'smooth' });
  }
});

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  if (!clicked) return;
  // console.log('start');
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  // console.log(clicked.className);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const hoverEffect = function (e) {
  // console.log(e.target, this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const clicked = e.target;
    const logo = clicked.closest('.nav').querySelector('img');
    const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
    siblings.forEach(function (s) {
      if (s !== clicked) {
        s.style.opacity = this;
      }
    }, this);
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', hoverEffect.bind(0.5));
nav.addEventListener('mouseout', hoverEffect.bind(1));

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsFun = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const obsOpt = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsFun, obsOpt);
headerObserver.observe(header);

const sectionAll = document.querySelectorAll('.section');
const secFun = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(secFun, {
  root: null,
  threshold: 0.15,
});

sectionAll.forEach(function (sec) {
  sec.classList.add('section--hidden');
  sectionObserver.observe(sec);
});

// const h1 = document.querySelector('h1');
// console.log(h1.parentElement);

// console.log(e.target);
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     console.log('Links');
//   }
// });
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved analytics and functionalities. <button class="btn btn--close-cookie">Got it!</button>`;

// headerEl.prepend(message);
// headerEl.append(message.cloneNode(true));
// headerEl.after(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// message.style.backgroundColor = '#37383d';

// console.log(message.style.height);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.getAttribute('class'));

// const form = function (e) {
//   console.log('Hi, this is me');
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', form);

// setTimeout(() => h1.removeEventListener('mouseenter', form), 3000);

// const navBox = document.querySelector('.nav__links');
// const navLink = document.querySelectorAll('.nav__link');
// const nav = document.querySelector('.nav');

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * Math.abs(max - min + 1) + min);

// const num = randomInt(10, 20);
// console.log(num);

// navLink.forEach(function (navL) {
//   navL.addEventListener('click', function (e) {
//     e.preventDefault();
//     this.style.backgroundColor = `rgb(
//       ${randomInt(0, 255)},
//       ${randomInt(0, 255)},
//       ${randomInt(0, 255)}
//     )`;
//   });
// });

// navBox.addEventListener('click', function (e) {
//   this.style.backgroundColor = `rgb(
//     ${randomInt(0, 255)},
//     ${randomInt(0, 255)},
//     ${randomInt(0, 255)}
//   )`;
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = `rgb(
//     ${randomInt(0, 255)},
//     ${randomInt(0, 255)},
//     ${randomInt(0, 255)}
//   )`;
// });

const footerLog = document.querySelector('.footer__logo');
footerLog.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
