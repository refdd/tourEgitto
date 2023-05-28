// varables
const daysfield = document.querySelectorAll(".daysOffer");
const secondsfield = document.querySelectorAll(".secondsOffer");
const hoursfield = document.querySelectorAll(".hoursOffer");
const minautefield = document.querySelectorAll(".minauteOffer");
console.log(daysfield);
// Set the date you want the countdown timer to end
const countdownDate = new Date("2023-06-01T00:00:00Z").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const remainingTime = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the remaining time in the HTML document

  // console.log(
  //   "Time remaining: " +
  //     days +
  //     " days " +
  //     hours +
  //     " hours " +
  //     minutes +
  //     " minutes " +
  //     seconds +
  //     " seconds "
  // );
  daysfield &&
    daysfield.forEach((day) => {
      day.innerHTML = days;
    });
  secondsfield &&
    secondsfield.forEach((second) => {
      second.innerHTML = seconds;
    });
  hoursfield &&
    hoursfield.forEach((hour) => {
      hour.innerHTML = hours;
    });
  minautefield &&
    minautefield.forEach((minute) => {
      minute.innerHTML = minutes;
    });
  daysfield &&
    daysfield.forEach((day) => {
      day.innerHTML = days;
    });

  // If the countdown is finished, display a message
  if (remainingTime < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
