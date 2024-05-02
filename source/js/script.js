const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__toggle');

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('nav--open');
});
