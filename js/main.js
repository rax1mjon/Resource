// const loading = document.getElementById("loading");

// const loadingDuration = 10000;

// setTimeout(() => {
//   loading.classList.add("loading-none");
// }, loadingDuration);

// window.addEventListener("scroll", function () {
//   shrink();
// });

// let navbar = document.getElementById("header");

// function shrink() {
//   if (scrollY > 780) {
//     navbar.classList.add("navbar-shrink");
//   } else {
//     navbar.classList.remove("navbar-shrink");
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("humburger");
  const navLinks = document.getElementById("nav--list");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav--brand__list__active");
  });
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 46,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: false,
//     },
//     1035: {
//       items: 2,
//       nav: true,
//       loop: false,
//     },
//   },
// });

// window.addEventListener("scroll", function () {
//   toggleBacktop();
// });

// let backtop = document.getElementById("backtop");

// function toggleBacktop() {
//   if (
//     document.body.scrollTop > 150 ||
//     document.documentElement.scrollTop > 150
//   ) {
//     backtop.classList.add("backtop-show");
//   } else {
//     backtop.classList.remove("backtop-show");
//   }
// }
