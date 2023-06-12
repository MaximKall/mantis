window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('small', window.scrollY > 0);
});

window.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('a');
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
});
