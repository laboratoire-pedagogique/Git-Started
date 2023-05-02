const countButton = document.getElementById("countButton");
const count = document.getElementById("count");

let counter = 0;

countButton.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});