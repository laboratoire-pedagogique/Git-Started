// Necessary elements
const input = document.getElementById("name-prompt");
const container = document.getElementById("container");
const spinner = document.getElementById("spinner");
const greeting = document.getElementById("greeting");


const resetValue = (element) => {
    element.value = "";
}

const startLoading = (input,spinner) => {
    input.classList.add("hidden");
    spinner.classList.add("spinner");
}

const stopLoading =  (spinner) => {
    setTimeout(() => {
        spinner.classList.remove("spinner");
        greeting.classList.remove("hidden");
        greeting.classList.add("greeting");
    },2000);
}

const greet = (input) => {
    // Change the p tags text
    greeting.innerText = `Hello ${input.value} !`;
    
    // Change the input text to blank 
    resetValue(input);

    // Loader is on
    startLoading(input,spinner)

    // Waiting 2s before removing the loader
    stopLoading(spinner);
}

input.addEventListener("keydown",(event) => {
    // When "Enter" is pressed
    if(event.key == "Enter"){
        greet(input);
    }
})