let bars = document.querySelector(".fa-bars");
let fa_circle_xmark = document.querySelector(".fa-circle-xmark");
let span = document.querySelector("header nav+span");
let nav = document.querySelector("header nav");
let page = document.querySelector(".login-page");
let to_Top = document.querySelector(".to-Top");
document.querySelector(".date").append(new Date().getFullYear());
window.onscroll = _ => to_Top.style.display = window.scrollY ? "block" : "none";
bars.onclick = function () {
    nav.style.display = "block";
    span.style.display = "block";
}
fa_circle_xmark.onclick = function () {
    fa_circle_xmark.parentElement.parentElement.style.display = "none";
    span.style.display = "none";
}
span.onclick = function () {
    nav.style.display = "none";
    span.style.display = "none";
}
window.onresize = () => page.style.marginTop = `${document.querySelector("header").offsetHeight + 48}px`;
page.style.marginTop = `${document.querySelector("header").offsetHeight + 48}px`;