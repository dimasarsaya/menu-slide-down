const menuEl = document.querySelector(".menu");
const socialListEl = document.querySelector(".social-lists");

menuEl.addEventListener("click", ()=>{
    socialListEl.classList.toggle("hide");
});