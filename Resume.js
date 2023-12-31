// Side Navigation 
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");


menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents= "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents= "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";

}

// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 20){
            nav.classList.add("sticky");
            scrollBtn.style.display = "block";
        }else{
            nav.classList.remove("sticky");
            scrollBtn.style.display = "none";
        }
    }