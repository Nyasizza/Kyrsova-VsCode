const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

