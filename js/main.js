// selecter
const cardContainer = document.querySelector(".cardContainer");
const inputCounter = document.querySelector(".inputCounter");
const counterbox = document.querySelector(".counterbox");
const filterbutton = document.querySelector(".filterBox");
const box_Sort = document.querySelector(".box_Sort");
const sortbutton = document.querySelector(".sortBox");
const filter_Box = document.querySelector(".filter_Box ");
const counderFilter = document.querySelector(".counderFilter ");
const taptour = document.querySelectorAll(".SingelTaps");
const layoutviews = document.querySelectorAll(".layoutviews");
const arrowFiltter = document.querySelector(".filterBox div .fa-arrow-down");
const arrowSort = document.querySelector(".sortBox div .fa-arrow-down");
const buttonDuration = document.querySelector(".buttonDuration");
const fromInquery = document.getElementById("formInquery");
const mobileButton = document.querySelector(".button_moblie");
const counterDate = document.querySelector(".inputCounter span");
const counterDateFilter = document.querySelector(".buttonDuration");
const buttoncounter = document.querySelector(".buttoncounter");
const Infants = document.getElementById("Infants");
const Children = document.getElementById("Children");
const adults = document.getElementById("adults");
const InfantsFilter = document.getElementById("InfantsFilter");
const ChildrenFilter = document.getElementById("ChildrenFilter");
const adultsFilter = document.getElementById("adultsFilter");
const icombare = document.querySelector(".iconMneu i");
const iconClose = document.querySelector(".iconMneu img");
const menu_Bar = document.querySelector(".menu_Bar");
// event
buttonDuration &&
  buttonDuration.addEventListener("click", () => {
    counderFilter.classList.toggle("active");
  });
// // scroll to form position
// mobileButton &&
//   mobileButton.addEventListener("click", () => {
//     fromInquery.scrollIntoView({ behavior: "smooth" });
//     mobileButton.classList.add("close");
//   });
// open and close  filter box and Sort box
filterbutton &&
  filterbutton.addEventListener("click", () => {
    filter_Box.classList.toggle("active");
    arrowFiltter.classList.toggle("rotate");
  });
// close counter box
buttoncounter &&
  buttoncounter.addEventListener("click", () => {
    counterbox.classList.remove("active");
  });
// open and clode sort box
sortbutton &&
  sortbutton.addEventListener("click", () => {
    box_Sort.classList.toggle("active");
    arrowSort.classList.toggle("rotate");
  });
//open and close manu bar
icombare &&
  icombare.addEventListener("click", () => {
    icombare.classList.add("active");
    iconClose.classList.add("active");
    menu_Bar.classList.add("active");
  });
iconClose &&
  iconClose.addEventListener("click", () => {
    icombare.classList.remove("active");
    iconClose.classList.remove("active");
    menu_Bar.classList.remove("active");
  });
// scroll box

const handleClick = (direction) => {
  // setIsMoved(true);

  const { scrollLeft, clientWidth } = cardContainer;
  const scrollTo =
    direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  cardContainer.scrollTo({ left: scrollTo, behavior: "smooth" });
};

// taps tour function
function add_and_remove_active_class() {
  //for in will not work with DOM elements
  taptour.forEach((elem, i) => {
    elem.addEventListener("click", () => {
      for (let index = 0; index < taptour.length; index++) {
        taptour[index].classList.remove("active");
        layoutviews[index].classList.remove("active");
      }
      elem.classList.add("active");
      layoutviews[i].classList.add("active");
      layoutviews[i].scrollIntoView(true);
    });
  });
}
add_and_remove_active_class();
// counter
// frist open and close counter
inputCounter &&
  inputCounter.addEventListener("click", () => {
    counterbox.classList.toggle("active");
  });
// counter form inquire
function updateText(value1, value2) {
  counterDate.innerHTML = `${value1} adults, ${value2} children`;
}
// add
function addCounter(type) {
  if (type == "adults") {
    adults.value++;
  }
  if (type == "Children") {
    Children.value++;
  }
  if (type == "Infants") {
    Infants.value++;
  }
  updateText(adults.value, Children.value);
}

// reomve
function removeCounter(type) {
  if (type == "adults") {
    if (adults.value == 0) {
      adults.value = 0;
      aduitsValue = adults.value;
    } else {
      adults.value--;
    }
  }
  if (type == "Children") {
    if (Children.value == 0) {
      Children.value = 0;
    } else {
      Children.value--;
    }
  }
  if (type == "Infants") {
    if (Infants.value == 0) {
      Infants.value = 0;
    } else {
      Infants.value--;
    }
  }
  updateText(adults.value, Children.value);
}
// // date
// $(function () {
//   $('input[name="daterange"]').daterangepicker(
//     {
//       opens: "left",
//     },
//     function (start, end, label) {
//       console.log(
//         "A new date selection was made: " +
//           start.format("YYYY-MM-DD") +
//           " to " +
//           end.format("YYYY-MM-DD")
//       );
//     }
//   );
// });

// counter filter listToura
// set value of counter
function updateTextFilter(value1, value2) {
  counterDateFilter.innerHTML = `${value1} adults, ${value2} children`;
}
// add
function addCounterFilter(type) {
  if (type == "adults") {
    adultsFilter.value++;
  }
  if (type == "Children") {
    ChildrenFilter.value++;
  }
  if (type == "Infants") {
    InfantsFilter.value++;
  }
  updateTextFilter(adultsFilter.value, ChildrenFilter.value);
}

// reomve
function removeCounter(type) {
  if (type == "adults") {
    if (adultsFilter.value == 0) {
      adultsFilter.value = 0;
    } else {
      adultsFilter.value--;
    }
  }
  if (type == "Children") {
    if (ChildrenFilter.value == 0) {
      ChildrenFilter.value = 0;
    } else {
      ChildrenFilter.value--;
    }
  }
  if (type == "Infants") {
    if (InfantsFilter.value == 0) {
      InfantsFilter.value = 0;
    } else {
      InfantsFilter.value--;
    }
  }
  updateTextFilter(adultsFilter.value, ChildrenFilter.value);
}
