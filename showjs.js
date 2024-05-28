let fname = "Mr Nobody";
let age = 26;
let isStudent = false;
let lname = "Mrs Nobody";

document.getElementById("p1").textContent = fname;
document.getElementById("p2").textContent = `This text will collect first name from the variable fname which is ${fname} and his age will be ${age}. Here the name is ${typeof(fname)} and age is ${typeof(age)}. Is he a student? the answer is ${isStudent} and the answer type is ${typeof(isStudent)}`;