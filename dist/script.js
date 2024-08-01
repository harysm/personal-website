// Nav Fix 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset> fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};


// ham
const ham = document.querySelector('#ham');
const menu = document.querySelector('#menu');

ham.addEventListener('click', function() {
    ham.classList.toggle('ham-act');
    menu.classList.toggle('hidden');
});


// ham out click
window.addEventListener('click', function(e) {
    if(e.target != ham && e.target != menu) {
        ham.classList.remove('ham-act');
        menu.classList.add('hidden');
    }
});

// DarkMode 
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const drk = document.querySelector('#drc');
const drf = document.querySelector('#drl');

darkToggle.addEventListener('click' , function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        drk.classList.add('hidden');
        drf.classList.remove('hidden');
    }else{
        html.classList.remove('dark');
        drk.classList.remove('hidden');
        drf.classList.add('hidden');
    }
})






