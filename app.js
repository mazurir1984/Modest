// gamburg-menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let maineMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        maineMenu.classList.add("active-menu")
    } else {
        maineMenu.classList.remove("active-menu");
    }
})

//modal

let modal = document.querySelector(".modal");
let sendMessage = document.querySelector(".send");
let closeBtn = document.querySelector(".btn-close");

sendMessage.addEventListener("click",function() {
    modal.classList.add("show");
    modal.classList.remove("hide");
})

closeBtn.addEventListener("click",function() {
    modal.classList.add("hide");
    modal.classList.remove("show");
})