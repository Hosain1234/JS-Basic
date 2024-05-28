// creating a counter button using js

const DecreaseBtn = document.getElementById("decreaseBtn");
const ResetBtn = document.getElementById("resetBtn");
const IncreaseBtn = document.getElementById("increaseBtn");
const CountLabel = document.getElementById("countLabel");
let count = 0;

// Increase Function here
IncreaseBtn.onclick = function(){
    count++;
    CountLabel.textContent = count;
}

// Decrease Function here
DecreaseBtn.onclick = function(){
    count--;
    CountLabel.textContent = count;
}

// Reset Count Function Here
ResetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}






