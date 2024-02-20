'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
let headers = document.getElementsByTagName('header');
let header = headers[0];
console.log(header);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we display small cookie message here <button class="btn  btn--close-cookie">close</button>';
header.append(message);
header.append(message.cloneNode(true));

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});
//styles
message.style.backgroundColor = 'red';
message.style.color = 'green';
console.log(message);
console.log(getComputedStyle(message).alignItems);

console.log(getComputedStyle(message).width);
let height = Number.parseFloat(getComputedStyle(message).height);
console.log(height);
message.style.height = height + 30 + 'px';
let height2 = Number.parseFloat(getComputedStyle(message).height);

console.log(height2);

document.documentElement.style.setProperty('--color-primary', 'orange');
//attributes

let logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.src);
console.log(logo.alt);
logo.alt = 'hey waqt badal diya';
console.log(logo.alt);
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.designer = 'hatim2';
console.log(logo.getAttribute('designer'));
logo.setAttribute('designer', 'hatim lukmani');
console.log(logo.getAttribute('designer'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

let scrollBtn = document.querySelector('.btn--scroll-to');
let sectionOne = document.querySelector('#section--1');
scrollBtn.addEventListener('click', function (e) {
  let getCords = sectionOne.getBoundingClientRect();

  // window.scrollTo({
  //   left: getCords.left + window.pageXOffset,
  //   top: getCords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  sectionOne.scrollIntoView({ behavior: 'smooth' });
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
});

// let link = document.querySelector('.nav__link');
// let container = document.querySelector('.nav__links');
// let nav = document.querySelector('.nav');

// link.addEventListener('click', function () {
//   console.log('link');
// });

// container.addEventListener('click', function () {
//   console.log('container');
// });

// nav.addEventListener(
//   'click',
//   function () {
//     console.log('nav');
//   },
//   true
// );
//smoothing scrolls
let navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target.classList.contains('nav__link'));
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

//forward - child nodes
let h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.childNodes);
console.log(h1.children);
let firstChild = h1.children[0];
console.log(firstChild);
firstChild.style.color = 'blue';
console.log(h1.firstChild);

//going - upwards
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));
// h1.closest('h1').style.background=

//tabbed components
function tabbedHandeler(tar, curr) {
  console.log(tar);
  const siblings = tar
    .closest('.operations__tab-container')
    .querySelectorAll('.operations__tab');
  siblings.forEach(ele => {
    ele.classList.remove('operations__tab--active');
  });
  tar.classList.add('operations__tab--active');
  const siblingsContent = tar
    .closest('.operations')
    .querySelectorAll('.operations__content');

  siblingsContent.forEach(ele => {
    ele.classList.remove('operations__content--active');
  });
  tar
    .closest('.operations')
    .querySelector(`.operations__content--${curr}`)
    .classList.add('operations__content--active');
}
let oPT = document.querySelector('.operations__tab-container');
oPT.addEventListener('click', function (e) {
  e.preventDefault();
  let tar = e.target.closest('.operations__tab');
  if (tar) {
    tabbedHandeler(tar, tar.dataset.tab);
  }
});
//menu fade functions

let nav = document.querySelector('.nav');
console.log(nav);
const opacityHandeler = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    let siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    let img = e.target.closest('.nav').querySelector('img');
    // console.log('siblings', siblings);
    siblings.forEach(el => {
      if (el != e.target) {
        el.style.opacity = opacity;
      }
    });
    img.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', function (e) {
  opacityHandeler(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  opacityHandeler(e, 1.0);
});

//interscetion observer api
// const obsCB = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
//   // console.log(observer);
// };

// let obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCB, obsOptions);
// observer.observe(sectionOne);

//sticky - nav using intersection observer api
const navHieght = nav.getBoundingClientRect().height;
console.log(navHieght);
function callBack(entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
let options = {
  root: null,
  threshold: 0.0,
  // rootMargin: `${navHieght}px`,
};
let observer = new IntersectionObserver(callBack, options);
observer.observe(header);

//section smoothing
let section = document.querySelectorAll('.section');

function sectionCB(entries, observer) {
  let entry = entries[0];
  // console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  }
}
let sectionOptiobn = {
  root: null,
  threshold: 0.15,
};
const sectionObserver = new IntersectionObserver(sectionCB, sectionOptiobn);
section.forEach(sec => {
  sectionObserver.observe(sec);
  sec.classList.add('section--hidden');
});

//lazy image loading

let loadImg = document.querySelectorAll('img[data-src]');
console.log(loadImg);

let loadCB = function (entries, observer) {
  console.log('inside');
  let [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};
let loadOption = {
  root: null,
  threshold: 0,
};
let imageLoader = new IntersectionObserver(loadCB, loadOption);
loadImg.forEach(img => {
  imageLoader.observe(img);
});

//creating slider
let currSlide = 0;
let slide = document.querySelectorAll('.slide');
let leftButton = document.querySelector('.slider__btn--left');
let rightButton = document.querySelector('.slider__btn--right');
let maxSlides = slide.length;
const sliderFunction = function (currSlide) {
  console.log('ye lo');
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};
sliderFunction(0);
const nextSlide = function () {
  // console.log('right');
  if (currSlide == maxSlides - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  sliderFunction(currSlide);
};
const prevSlide = function () {
  if (currSlide == 0) {
    currSlide = maxSlides - 1;
  } else {
    currSlide--;
  }
  sliderFunction(currSlide);
};

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'ArrowLeft') prevSlide();
  if (e.key == 'ArrowRight') nextSlide();
});

//creating container

let dotContainer = document.querySelector('.dots');
console.log('doyt', dotContainer);

function createDots() {
  slide.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      `beforeend`,
      `<button class="dots__dot" data-slides="${i}"></button>`
    );
  });
}
createDots();
function buttonEffect(e) {
  console.log('fff');
  dots.forEach(ele => {
    ele.classList.remove('dots__dot--active');
  });
  console.log(e.target);
  e.target.classList.add('dots__dot--active');
}
let dots = document.querySelectorAll('.dots__dot');
console.log('sss', dots);
dots.forEach(ele => {
  console.log('s', ele);
  ele.addEventListener('click', e => {
    sliderFunction(e.target.dataset.slides);
    buttonEffect(e);
  });
});
