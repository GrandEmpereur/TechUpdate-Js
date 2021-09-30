const btn = document.querySelector('.Arrow');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth",
    })

});