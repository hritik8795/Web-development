burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')
logo = document.querySelector('.logo')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    logo.classList.toggle('v-class-resp')
})
