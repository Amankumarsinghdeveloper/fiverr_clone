const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



const screen_mode = document.querySelector(".light_dark-btn");
const mode_switch = document.querySelector(".light_dark-icon");

const toggleScreen = () => {
  document.body.classList.toggle("dark-theme");
};

screen_mode.addEventListener("click", () => toggleScreen());

document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
  const inputField = copyLinkParent.querySelector(".copy-link-input");
  const copyButton = copyLinkParent.querySelector(".copy-link-button");
  const text = inputField.value;

  inputField.addEventListener("focus", () => inputField.select());

  copyButton.addEventListener("click", () => {
    inputField.select();
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    setTimeout(() => (inputField.value = text), 2000);
  });
});

// let x = document.querySelector(".mainslider");

window.onload = function () {
    setTimeout(function () {
      document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/5B3G5mZ/bg-hero-3-1792-x1.webp")')
    }, 3000);
    setTimeout(function () {
      document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/yyK44dw/bg-hero-5-1792-x1.webp")')
    }, 6000);
};