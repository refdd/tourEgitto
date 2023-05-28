new TomSelect("#select-beast", {
  create: true,
  sortField: {
    field: "text",
    direction: "asc",
  },
});
new TomSelect("#select-code", {
  create: true,
  itemClass: "refat",
  sortField: {
    field: "text",
    direction: "asc",
  },
});
const children = document.getElementById("Children");
const aduilt = document.getElementById("aduilt");
const Infants = document.getElementById("Infants");
const addButton = document.querySelectorAll(".add");
const removeButton = document.querySelectorAll(".remove");

// event conter
// add
function addCounter(type) {
  if (type == "aduilt") {
    aduilt.value++;
  }
  if (type == "Children") {
    children.value++;
  }
  if (type == "infants") {
    Infants.value++;
  }
}

// reomve
function removeCounter(type) {
  if (type == "aduilt") {
    if (aduilt.value == 0) {
      aduilt.value = 0;
    } else {
      aduilt.value--;
    }
  }
  if (type == "Children") {
    if (children.value == 0) {
      children.value = 0;
    } else {
      children.value--;
    }
  }
  if (type == "infants") {
    if (Infants.value == 0) {
      Infants.value = 0;
    } else {
      Infants.value--;
    }
  }
}
