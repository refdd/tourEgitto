// slector
const inputCheack = document.querySelector(".flightcheck");
const felidFlight = document.querySelector(".flightFelid");
const inpuiryButton = document.querySelector(".button_moblie");
const forrmInpuiry = document.getElementById("from");

// event
// button inqure on scroll event and on click event go to from
inpuiryButton &&
  inpuiryButton.addEventListener("click", () => {
    forrmInpuiry.scrollIntoView(false);
    setTimeout(() => {
      inpuiryButton.classList.add("close");
    }, 1500 / 2);
  });
window.addEventListener("scroll", () => {
  if (inpuiryButton.classList.contains("close")) {
    inpuiryButton.classList.remove("close");
  }
});
// flight filed
const openAndCloseFlightFiled = (checkBox) => {
  if (checkBox.checked == true) {
    felidFlight.classList.add("active");
  } else {
    felidFlight.classList.remove("active");
  }
};
