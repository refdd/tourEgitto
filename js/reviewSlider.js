document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviewSection", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
      autoScroll: {
        speed: 2,
      },
      autoScroll: {
        speed: 1,
      },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});
