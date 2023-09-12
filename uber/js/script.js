"use strict";
const menuBtn = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-list");
const navItems = document.querySelectorAll("nav-item");

// menuBtn.addEventListener("click", () => {
//   if (menuBtn.classList.contains("active")) {
//     menuBtn.classList.remove("active");
//     navMenu.classList.remove("open");
//   } else {
//     menuBtn.classList.add("active");
//     navMenu.classList.add("open");
//   }
// });
const toggleMenue = function () {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("open");
};
menuBtn.addEventListener("click", () => {
  //   menuBtn.classList.toggle("active");
  //   navMenu.classList.toggle("open");
  toggleMenue();
});

navMenu.addEventListener("click", (evt) => {
  if (evt.target.className === "nav-link") {
    // menuBtn.classList.toggle("active");
    // navMenu.classList.toggle("open");
    // console.log("clicked");
    toggleMenue();
  }
});

// [...navMenu.children].forEach((item) => {
//   item.addEventListener("click", () => {
//     // menuBtn.classList.toggle("active");
//     // navMenu.classList.toggle("open");
//     toggleMenue();
//   });
// });
