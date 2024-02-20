'use strict';
let showModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
let close_modal = document.querySelector('.close-modal');
close_modal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keyup', function (e) {
  if (!modal.classList.contains('hidden') && e.key == 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
  console.log(e.key);
});
