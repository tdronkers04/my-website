const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
    
    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`;
            } 
        }); 
        burger.classList.toggle('toggle');
    });
}

navSlide();



// HIDE NAV SLIDER AFTER LINK CLICK

const navLinksA = document.querySelectorAll('.nav-links a')

navLinksA.forEach(link => {
    link.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`;
            } 
        }); 
        burger.classList.toggle('toggle');
    });
});





