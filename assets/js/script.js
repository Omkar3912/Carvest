'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

window.addEventListener('load', function () {
  // Show the preloader for at least 3 seconds
  var preloader = document.querySelector('.preloader');
  setTimeout(function () {
      preloader.style.display = 'none';

      // Show the loaded content
      var loadedContent = document.querySelector('.loaded');
      loadedContent.style.display = 'block';
  }, 2000); // 2500 milliseconds = 2.5 seconds
});

/**
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  })
})*/