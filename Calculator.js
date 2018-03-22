// The selectors
const beginning = document.getElementById("beginning").value;
const ending = document.getElementById("ending").value;
const button = document.querySelector("button");
const answer = document.getElementById("answer");
var input = document.querySelector("beginning");

// The formulas
const subtract = ending - beginning;
const ans = subtract/beginning;
// For now it's an alert, to better see if it is working. 
button.addEventListener("click", function(){
    var test = answer.textContent = Number(beginning);
    console.log(test)
});

