
document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.querySelectorAll('[data-menu-toggle]');

    for (i = 0; i < menuToggle.length; i++) {
        menuToggle[i].addEventListener('click', openCloseToggle);
    }
    
    
    window.onscroll = function() {
        let backToTopButton = document.querySelector('.back-to-top');

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

    selectElement.classList.toggle('header__mobile__links--is-open')

    console.log(selectElement);
}