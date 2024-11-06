
document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.querySelectorAll('[data-menu-toggle]');
    const menu = document.querySelector('.header__mobile__links');
    const backToTopButton = document.querySelector('.back-to-top');

    for (let i = 0; i < menuToggle.length; i++) {
        menuToggle[i].addEventListener('click', openCloseToggle);
    }

    document.addEventListener('click', function(event) {
        if (!menuToggle[0].contains(event.target)) {
            menu.classList.remove('header__mobile__links--is-open');
        }
    });
    
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
        backToTopButton.addEventListener('click', scrollToTop);
    };
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCloseToggle() {
    const addClass = 'header__mobile__links--is-open';
    const selectElement = document.querySelector('.header__mobile__links')

    selectElement.classList.toggle(addClass)
}

