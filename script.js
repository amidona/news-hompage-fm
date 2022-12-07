const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

open.addEventListener("click", function () {
    console.log("It's working!");
    document.body.classList.add("open")
});

close.addEventListener("click", function () {
    console.log("I'm working too!")
    document.body.classList.remove("open")
});
