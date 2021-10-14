const menu = document.querySelector('#mobile-menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// close mobile menu when clicking menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth < 1000 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};