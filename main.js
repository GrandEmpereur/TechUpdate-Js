const navSlide = () =>{
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-on');

    });

    navLinks.forEach((link,index) => {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7}s`;
        console.log(index / 7);
    });
}

navSlide();