// how to accept user input?

// 1. Easy way = window prompt
// 2. Professional way = HTML TextBox

let userName;
/*
userName = window.prompt("Enter your username!");
// console.log(`${userName} is a good boy`);
document.getElementById("p1").textContent = `${userName} is a good boy`;
*/
document.getElementById("myBtn").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myHead").textContent = `Welcome ${userName}`;
}