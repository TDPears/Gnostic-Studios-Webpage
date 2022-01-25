const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo= document.querySelector('.header__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// close mobile menu when clicking menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth < 800 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};

menu.addEventListener('click', mobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);