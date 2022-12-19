const open = document.querySelector(".open");
const close = document.querySelector(".close");
const button = document.querySelector("button");
const link = document.querySelectorAll("a");
const navItem = document.querySelectorAll(".nav-item");

//Open nav menu on mobile
open.addEventListener("click", function () {
    document.body.classList.add("open");
});

//Close nav menu on mobile using the X
close.addEventListener("click", function () {
    document.body.classList.remove("open");
});

//Close nav menu on mobile when you click to go to a section
navItem.forEach(navItem => navItem.addEventListener("click", function () {
    if (document.body.classList.contains("open")) {
        document.body.classList.remove("open")
    } else {
        return
    }
}));

//Hover over Read More link to the #Popular article
button.addEventListener("mouseover", function() {
    button.classList.add("button-click");
});
button.addEventListener("mouseout", function () {
    button.classList.remove("button-click");
});

//Hover over links to the other articles
link.forEach(link => link.addEventListener("mouseover", function() {
    link.classList.add("hover");
}));
link.forEach(link => link.addEventListener("mouseout", function() {
    link.classList.remove("hover");
}));

