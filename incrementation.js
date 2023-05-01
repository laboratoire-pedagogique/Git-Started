let incrementBtn = document.getElementById('incrementBtn');
let count = document.getElementById('count');

let counter = 0;

incrementBtn,addEventListener('click', () => {
    counter++;
    count.innerText = counter;
    
});

