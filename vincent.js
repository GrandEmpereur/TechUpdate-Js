const btn = document.querySelector('.Arrow');

btn.addEventListener('click', () => {//when we click on the arrow, this append:

    window.scrollTo({
        top: 800,//We scroll the page to downPage
        left: 0,
        behavior: "smooth",//and we scroll with smooth, better for your eyes
    })

});