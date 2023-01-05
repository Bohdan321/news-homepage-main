let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-menu');
let shadowBox = document.querySelector(".shadow-box")
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    shadowBox.classList.toggle('active');
    
})
console.log();