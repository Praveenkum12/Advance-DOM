'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const headerEl = document.querySelector('.header');

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

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved analytics and functionalities. <button class="btn btn--close-cookie">Got it!</button>`;

// headerEl.prepend(message);
// headerEl.append(message.cloneNode(true));
headerEl.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';

// console.log(message.style.height);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.getAttribute('class'));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOneEl = document.getElementById('section--1');
btnScrollTo.addEventListener('click', function () {
  sectionOneEl.scrollIntoView({ behavior: 'smooth' });
});

const footerLog = document.querySelector('.footer__logo');
footerLog.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// const form = function (e) {
//   console.log('Hi, this is me');
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', form);

// setTimeout(() => h1.removeEventListener('mouseenter', form), 3000);

const navBox = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');

const randomInt = (min, max) =>
  Math.floor(Math.random() * Math.abs(max - min + 1) + min);

// const num = randomInt(10, 20);
// console.log(num);

navLink.forEach(function (navL) {
  navL.addEventListener('click', function (e) {
    e.preventDefault();
    this.style.backgroundColor = `rgb(
      ${randomInt(0, 255)},
      ${randomInt(0, 255)},
      ${randomInt(0, 255)}
    )`;
  });
});

navBox.addEventListener('click', function (e) {
  this.style.backgroundColor = `rgb(
    ${randomInt(0, 255)},
    ${randomInt(0, 255)},
    ${randomInt(0, 255)}
  )`;
});

nav.addEventListener('click', function (e) {
  this.style.backgroundColor = `rgb(
    ${randomInt(0, 255)},
    ${randomInt(0, 255)},
    ${randomInt(0, 255)}
  )`;
});
