let buttonOpen = document.querySelector(".menu-button");
let menuButtonClose = document.querySelector('.menu-button-close')
let navMenu = document.querySelector('.conteiner-menu');
 buttonOpen.onclick = function() {
    navMenu.classList.add('is-open');
    menuButtonClose.style.display = 'flex';

  };

menuButtonClose.addEventListener('click', ()=>{
navMenu.classList.remove('is-open');
menuButtonClose.style.display = 'none';
});