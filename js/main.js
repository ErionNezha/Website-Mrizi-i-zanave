const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

// AOS
// AOS.refreshHard();
AOS.init({
  offset: 200, // largësia (në piksel) nga pika  fillestare e animacionit
  delay: 100, // vlerat nga 0 deri në 3000, me hap 50ms
  duration: 400, // vlerat nga 0 deri në 3000, me hap 50ms
  easing: 'ease', // lëvizja e paracaktuar për animacionet AOS
  once: false, // nëse animacioni duhet të ndodhë vetëm një herë - gjatë lëvizjes poshtë
  mirror: false, // nëse elementët duhet të animohen jashtë gjatë lëvizjes nëpër to
  anchorPlacement: 'top-bottom', // definon pozicionin e elementit në lidhje me dritaren që duhet të aktivizojë animacionin
});

