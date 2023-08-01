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
    }, 3000); // 3000 milliseconds = 3.0 seconds
  });