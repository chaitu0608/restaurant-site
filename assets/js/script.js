/* When you use "use strict"; for an entire JavaScript file or specific function, you must declare variables explicitly using 
let, const, or var before using them. 
This is one of the key features of strict mode—it prevents the accidental creation of global variables. */
'use strict';



/* Preload */


const preloader=document.querySelector("[data-preaload]");

window.addEventListener("load",function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


const navbar=document.querySelector("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");



const toggleNavbar=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers,"click",toggleNavbar);


/* Header */
