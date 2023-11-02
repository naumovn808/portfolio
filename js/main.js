// Находим элементы взаимодействия
const btnNav = document.querySelector('.btn-nav');
const iconMenu = document.querySelector('.icon-menu');
const navMobile = document.querySelector('.nav-mb');
// const header = document.querySelector('.header');
const menuMb = document.querySelector('.menu-mb');
// const overlay = document.querySelector('#overlay');
const body = document.body;
const allItemMbNav = document.querySelectorAll('[data-nav]');


// Анимация иконки по клику на кнопку
btnNav.addEventListener('click', function () {
  this
  navMobile.classList.toggle('nav-mb--active');
  iconMenu.classList.toggle('icon-menu--active');
  // body.classList.toggle('noscroll');
});

// Отменяем класс active при resize
window.addEventListener('resize', function () {
  navMobile.classList.remove('nav-mb--active');
  iconMenu.classList.remove('icon-menu--active');
  overlay.classList.remove('active');
  // body.classList.remove('noscroll');
});

// Отменяем класс у элементов --active, при клике в мобильной навигации
allItemMbNav.forEach(function (items) {
  items.addEventListener('click', function () {
    navMobile.classList.remove('nav-mb--active');
    iconMenu.classList.remove('icon-menu--active');
    overlay.classList.remove('active');
    // body.classList.remove('noscroll');
  })
});






