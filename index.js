const count = document.getElementById("count"),
  incrementBtn = document.getElementById("increment"),
  decrementBtn = document.getElementById("decrement");
let n = 0;
incrementBtn.addEventListener("click", () => {
  n++;
  count.textContent = n;
});

decrementBtn.addEventListener("click", () => {
  if (n === 0) {
    return;
  } else {
    n--;
    count.textContent = n;
  }
});
