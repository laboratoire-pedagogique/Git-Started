const btn = document.querySelector('button');
const count = document.querySelector('p')

let acc = 0;
btn.addEventListener('click', function(){
    acc += 1;
    count.innerHTML = acc
})