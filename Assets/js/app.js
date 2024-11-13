var navbar = document.querySelector('.navbar');

var menuBtn = document.querySelector('#menu-btn');

var section = document.querySelectorAll('section');

var navLinks = document.querySelectorAll('header .navbar a');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {

    navbar.classList.remove('active');

    section.forEach((sec) => {

        let top = window.scrollY;

        let height = sec.offsetHeight;

        let offset = sec.offsetTop - 150;

        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document
                .querySelector('header .navbar a[href*=' + id + ']')
                .classList.add('active');
            });
        }
    });
    if(window.scrollY > 50){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
};