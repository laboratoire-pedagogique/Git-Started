window.addEventListener("DOMContentLoaded",function(){
    var count=document.getElementById("count");
    var incriment=document.getElementById("incriment");
    var score=0;
    incriment.addEventListener("click",function(){
       score++;
      count.innerText="count:"+score;
    })
})