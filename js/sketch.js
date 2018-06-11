 let start = 2; //index
 let time = 3000; // interval
 
 setInterval(function() { 
   let img = document.querySelector("#img");
   img.src= `dota${start}.jpg`;
   start === 4 ? (start = 1) : start++;
 }, time);