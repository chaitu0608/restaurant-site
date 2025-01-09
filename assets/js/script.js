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