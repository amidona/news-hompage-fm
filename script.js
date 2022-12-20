const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const navItem = document.querySelectorAll(".nav-item");
const button = document.querySelector("button");
const link = document.querySelectorAll("a");

//Open nav menu on mobile
open.onclick = () => nav.style.display = "flex";

//Close nav menu on mobile using the X
close.onclick = () => nav.style.display = "none";
close.onmouseover = () => document.body.style.cursor = "pointer";
close.onmouseout =  () => document.body.style.cursor = "default";

//Close nav menu on mobile when you click to go to a section
navItem.forEach(navItem => navItem.onclick = function () {
    if (nav.style.display = "flex") {
        nav.style.display = "none"
    } else {
        return
    }
});

// Close nav menu on mobile when you click outside the nav
window.onclick = function(event) {
    if (event.target == nav) {
        nav.style.display = "none";
    }
} 

//Hover over Read More link to the #Popular article
button.onmouseover = () => button.classList.add("button-click");
button.onmouseout = () => button.classList.remove("button-click");

//Hover over links to the other articles
link.forEach(link => link.onmouseover = () => link.classList.add("hover"));
link.forEach(link => link.onmouseout = () => link.classList.remove("hover"));

