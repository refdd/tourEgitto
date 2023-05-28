document.addEventListener("DOMContentLoaded", function () {
  new Splide("#offerSection", {
    type: "loop",
    perPage: 2.5,
    perMove: 1,
    gap: "10px",
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
        speed: 1,
      },

      // autoScroll: {
      //   speed: 1,
      // },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});
