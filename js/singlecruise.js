// selctor
const boat = document.querySelector(".boat");
const start = document.querySelector(".start");
const end = document.querySelector(".end");

// enent scroll
window.addEventListener("scroll", slidesas);

slidesas();

function slidesas() {
  const homeHeight = window.innerHeight / 6;

  const boatTop = boat.getBoundingClientRect().top;
  const starTop = start.getBoundingClientRect().top;
  const endTop = end.getBoundingClientRect().top;
  if (boatTop < homeHeight) {
    boat.classList.add("move");
    console.log(starTop, boatTop);
  } else {
    boat.classList.remove("move");
    console.log("stop");
  }
  if (boatTop <= starTop) {
    boat.classList.remove("move");
    return;
  }
  if (homeHeight >= endTop) {
    boat.classList.remove("move");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#mayYouLike", {
    perPage: 2,
    perMove: 1,
    gap: "10px",
    arrows: false,
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

      // autoScroll: {
      //   speed: 1,
      // },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});
var splide = new Splide(".splide", {
  type: "loop",
  padding: "5rem",
  arrows: false,
  gap: "10px",
});

splide.mount();
