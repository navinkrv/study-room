
var navbar=document.querySelector(".nav");
var toggler=document.querySelector(".toggler");
window.addEventListener('resize',function(){
if(window.innerWidth<700){
    navbar.classList.remove("nav-default");
    navbar.classList.add("nav-hidden");
}
else{
    navbar.classList.remove("nav-hidden");
    navbar.classList.add("nav-default");
}
});
function defaultNavbar(){
    if(window.innerWidth<700){
        navbar.classList.remove("nav-default");
        navbar.classList.add("nav-hidden");
    }
    else{
        navbar.classList.remove("nav-hidden");
        navbar.classList.add("nav-default");
    }
}
defaultNavbar();
function navbarToggler(){
    if(document.querySelector(".nav").classList=="nav nav-hidden"){
        toggler.addEventListener("click",function(){
            document.querySelector("nav").classList.remove("navbar");
            document.querySelector("nav").classList.add("navbar-toggled");
            navbar.classList.remove("nav-hidden");
            navbar.classList.add("nav-show");
            navbarToggler();
        });
        
    }
    else if(document.querySelector(".nav").classList=="nav nav-show"){
        toggler.addEventListener("click",function(){
            document.querySelector("nav").classList.remove("navbar-toggled");
//             document.querySelector("nav").classList.add("navbar");
            navbar.classList.remove("nav-show");
            navbar.classList.add("nav-hidden");
            navbarToggler();
        });
     
    }
    
}
navbarToggler();
