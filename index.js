const displaycount =document.getElementById("count");
const button=document.getElementById("button");
let count=0
function increment (){
    count++;
    displaycount.innerText=count
}