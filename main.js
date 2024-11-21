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
let mode = document.getElementById("mode");
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");
mode.onclick = function()  {
    if (light.classList.contains("none")) {
        document.body.style.background = "#000";
        window.localStorage.setItem("backgroundBody", "#000");
        window.localStorage.setItem("icon", "dark");
        document.styleSheets[1].rules[1].style.setProperty("--dark-color","#fff");
        document.styleSheets[1].rules[1].style.setProperty("--element-color","#181818");
        document.styleSheets[1].rules[1].style.setProperty("--black-color", "#fff");
        document.querySelector(".logo-1").src = "imgs/image e-commrce/img/logo-white.png";
        document.querySelector(".logo-2").src = "imgs/image e-commrce/img/logo-white.png";
    } else {
        document.body.style.background = "#f5f6f9";
        window.localStorage.setItem("backgroundBody", "#f5f6f9");
        window.localStorage.setItem("icon", "light");
        document.styleSheets[1].rules[1].style.setProperty("--dark-color","#000");
        document.styleSheets[1].rules[1].style.setProperty("--element-color","#fff");
        document.styleSheets[1].rules[1].style.setProperty("--black-color", "#000");
        document.querySelector(".logo-1").src = "imgs/image e-commrce/img/logo-black.png";
        document.querySelector(".logo-2").src = "imgs/image e-commrce/img/logo-black.png";
    }
    light.classList.toggle("none");
    dark.classList.toggle("none");
}
if (window.localStorage.getItem("backgroundBody")) {
    document.body.style.backgroundColor = window.localStorage.getItem("backgroundBody");
    if (window.localStorage.getItem("icon") === "dark") {
        light.classList.remove("none");
        dark.classList.add("none");
        document.styleSheets[1].rules[1].style.setProperty("--dark-color","#fff");
        document.styleSheets[1].rules[1].style.setProperty("--element-color","#181818");
        document.styleSheets[1].rules[1].style.setProperty("--black-color", "#fff");
        document.querySelector(".logo-1").src = "imgs/image e-commrce/img/logo-white.png";
        document.querySelector(".logo-2").src = "imgs/image e-commrce/img/logo-white.png";
    } else {
        light.classList.add("none");
        dark.classList.remove("none");
        document.styleSheets[1].rules[1].style.setProperty("--dark-color","#000");
        document.styleSheets[1].rules[1].style.setProperty("--element-color","#fff");
        document.styleSheets[1].rules[1].style.setProperty("--black-color", "#000");
        document.querySelector(".logo-1").src = "imgs/image e-commrce/img/logo-black.png";
        document.querySelector(".logo-2").src = "imgs/image e-commrce/img/logo-black.png";
    }
}