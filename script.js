
/* PRELOADER */

const preloader=document.querySelector("[data-preaload]");
window.addEventListener("load",function(){
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});


/* add event listener on multiple elements */



const addEventOnElements=function(elements,eventType,callaback){
    for(let i=0,len=elements.length;i<len,i++){
        elements[i].addEventListener(eventType,callback);
    }
}
