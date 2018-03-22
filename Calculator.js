// The selectors
const beginning = document.getElementById("beginning");
const ending = document.getElementById("ending");
const button = document.querySelector("button");
const answer = document.getElementById("answer");

// The formulas
const subtract = ending - beginning;
const ans = subtract/beginning;
// For now it's an alert, to better see if it is working. 
button.addEventListener("click", function(){
   answer.textContent = Number((beginning.value - ending.value)/beginning.value);
});

