// IMPLEMENT MOBILE MENU

const background = document.querySelector('.mobile-menu-background');
const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const menu1 = document.querySelector('.close-menu-item1');
const menu2 = document.querySelector('.close-menu-item2');
const menu3 = document.querySelector('.close-menu-item3');
const body = document.querySelector('body');

background.style.display = 'none';

const closePopup = () => {
  body.style.overflow = 'auto';
  background.style.display = 'none';
  background.classList.remove('popUp');
};

burgerMenu.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  background.style.display = 'flex';
  background.classList.add('popUp');
});

closeMenu.addEventListener('click', () => {
  closePopup();
});

menu1.addEventListener('click', () => {
  closePopup();
});

menu2.addEventListener('click', () => {
  closePopup();
});

menu3.addEventListener('click', () => {
  closePopup();
});
