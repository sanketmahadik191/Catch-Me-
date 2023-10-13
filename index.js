let box = document.querySelector(".box");
let width = document.documentElement.clientWidth - box.offsetHeight;
let height = document.documentElement.clientHeight - box.offsetHeight;
box.addEventListener("mouseover", (e) => {
    console.log(e);
    console.log(Math.floor(Math.random() * width));
    box.style.left = `${Math.floor(Math.random() * width)}px`;
    box.style.top = `${Math.floor(Math.random() * height)}px`;
    console.log("in");
});