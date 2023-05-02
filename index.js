const countDisplay = document.querySelector(".countdisplay");
const incrementButton = document.querySelector(".incr");

let count = 0;

// Increment the count and update the display
function incrementCount() {
    count++;
    countDisplay.textContent = count;
}

// Add a click event listener to the increment button
incrementButton.addEventListener("click", incrementCount);
