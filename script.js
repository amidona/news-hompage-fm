const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

open.addEventListener("click", function () {
    console.log("It's working!");
    menu.style.display = "block";
});

close.addEventListener("click", function () {
    console.log("I'm working too!")
    menu.style.display = "none";
});
