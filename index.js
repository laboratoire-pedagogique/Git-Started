let counter = 0;
const number = document.getElementById("number");
const countBtn = document.getElementById("countBtn");

countBtn.addEventListener("click", () => {
  counter++;
  let sum = 0;
  for(let i = 0; i <= counter; i++){
    sum += i;
  }
  number.textContent = sum.toString();
});
