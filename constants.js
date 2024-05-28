// constant is something that can't be changed

// we use const insted of let to fix the value
const PI = 3.14159;
let radius;
let circumfence;

// radius = window.prompt("enter the radious");
// radius = Number(radius);



document.getElementById("myBtn").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfence = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumfence;
}

