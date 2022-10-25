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
  document.body.style.overflow = 'hidden';
}


window.onload = function () {
  setTimeout(function () {
    document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/5B3G5mZ/bg-hero-3-1792-x1.webp")')
  }, 3000);
  setTimeout(function () {
    document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/9NJMyJW/bg-hero-1-1792-x1.webp")')
  }, 6000);
  setTimeout(function () {
    document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/xhPxtSB/bg-hero-2-1792-x1.webp")')
  }, 9000);
  setTimeout(function () {
    document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/F6BF5J7/bg-hero-4-1792-x1.webp")')
  }, 12000);
  setTimeout(function () {
    document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/xhPxtSB/bg-hero-2-1792-x1.webp")')
  }, 15000);
  setTimeout(function () {
    document.querySelector(".mainslider").style.backgroundImage = ('url("https://i.ibb.co/yyK44dw/bg-hero-5-1792-x1.webp")')
  }, 18000);

};



let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let iconfile;

window.addEventListener("load", () => {

  let long;
  let lat;

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {



      long = position.coords.longitude;
      lat = position.coords.latitude;


      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dab3af44de7d24ae7ff86549334e45bd`

      fetch(api).then((response) => {

        return response.json();


      })

        .then(data => {

          const { feels_like } = data.main;
          const { id } = data.weather[0];


          tempvalue.textContent = Math.round(feels_like - 273);
          if (id < 300 && id > 200) {
            tempicon.src = "./icons/thunderstorm.svg"
          }
          else if (id < 400 && id > 300) {
            tempicon.src = "./icons/cloud-solid.svg"
          }
          else if (id < 600 && id > 500) {
            tempicon.src = "./icons/rain.svg"
          }
          else if (id < 700 && id > 600) {
            tempicon.src = "./icons/snow.svg"
          }
          else if (id < 800 && id > 700) {
            tempicon.src = "./icons/clouds.svg"
          }
          else if (id == 800) {
            tempicon.src = "./icons/clouds-and-sun.svg"
          }

          console.log(data);
        })



    }



    )
  }


})