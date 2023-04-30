const count = document.getElementById("count");
const countIt = document.getElementById("countIt");
let increment = 0;

countIt.addEventListener("click" , ()=>{
    increment++;
    count.innerHTML = "Count = " + increment;
})