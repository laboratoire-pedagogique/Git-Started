const counterBtn = document.getElementById("counterBtn");
const count = document.getElementById("count");

let counter = 0;

counterBtn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});