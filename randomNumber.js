// Random Number generator

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
document.getElementById("myh2").textContent = `Let's Play Ludo`;

const myButton = document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;

let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNumber1;
    myLabel2.textContent = randomNumber2;
    myLabel3.textContent = randomNumber3;
}





