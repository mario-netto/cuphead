
document.addEventListener('DOMContentLoaded', function(){
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