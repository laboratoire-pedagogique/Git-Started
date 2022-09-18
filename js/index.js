const input = document.getElementById("name-prompt");
const container = document.getElementById("container");


const alertName = (input) => {
    alert(`Hello ${input.value} !`);
    input.value = "";
}

input.addEventListener("keydown",(event) => {
    if(event.key == "Enter"){
        alertName(input);
    }
})