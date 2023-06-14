window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('small', window.scrollY > 0);
});

window.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = link.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      var targetOffset = targetSection.offsetTop;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });

  var sectionLinks = document.querySelectorAll('#home a');
  sectionLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = link.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      var targetOffset = targetSection.offsetTop;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
