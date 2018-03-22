// The selectors
const beginning = document.getElementById("beginning");
const ending = document.getElementById("ending");
const button = document.querySelector("button");
const answer = document.getElementById("answer");
const answer2 = document.getElementById("answer2");

// The formulas
const subtract = ending - beginning;
const ans = subtract/beginning;
// For now it's an alert, to better see if it is working. 
button.addEventListener("click", function(){
   answer.textContent = Number(beginning.value);
   answer2.textContent = Number(ending.value);
});

