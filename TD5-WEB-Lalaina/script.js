let count = 0;
let countButton = document.getElementById("countButton");
let countSpan = document.getElementById("counter");

countButton.addEventListener("click", () => {
  count++;
  countSpan.innerHTML = count;
});
