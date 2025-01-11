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


/* Add Event Listener for Multiple Elements */
const addEventOnElements = function (elements, eventType, callback) {
    // Loop through all elements in the NodeList 'elements'
    for (let i = 0, len = elements.length; i < len; i++) {
        // Add the specified event listener to each element
        elements[i].addEventListener(eventType, callback);
    }
};



/* NAVBAR*/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


const toggleNavbar=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classKist.toggle("nav=active");
}
addEventOnElements(navTogglers, "click", toggleNavbar);


/* Header */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
