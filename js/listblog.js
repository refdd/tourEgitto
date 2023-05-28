//  Card 3D Rotation Animation On Hover
// DOM Element selections
const cardWrapper = document.querySelectorAll(".imageBlog");
const card = document.querySelectorAll(".imageBlog img");
const highlight = document.querySelectorAll(".highlight");
// highest values for angle
const mostX = 10; // 10 or -10
const mostY = 10; // 10 or -10

cardWrapper &&
  cardWrapper.forEach((item, index) => {
    item.addEventListener("mousemove", (e) => {
      // remove transition
      card[index].style.transition = "none";
      highlight[index].style.transition = "none";

      const x = e.offsetX;
      const y = e.offsetY;
      const { width, height } = item.getBoundingClientRect();
      const halfWidth = width / 2;
      const halfHeight = height / 2;

      // calculate angle
      const rotationY = ((x - halfWidth) / halfWidth) * mostX;
      const rotationX = ((y - halfHeight) / halfHeight) * mostY;

      // set rotation
      card[
        index
      ].style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
      highlight[index].style.left = `${(rotationY / mostX) * 30 * -1}%`;
      highlight[index].style.top = `${(rotationX / mostY) * 30 * -1}%`;
    });

    item.addEventListener("mouseleave", () => {
      // add transition back
      card[index].style.transition = "transform 0.5s ease-in-out";
      card[index].style.transform = `rotateY(0) rotateX(0)`;
      highlight[index].style.transition =
        "left 0.5s ease-in-out, top 0.5s ease-in-out";

      // add default position back to highlight
      highlight[index].style.left = `0%`;
      highlight[index].style.top = `0s%`;
    });
  });
