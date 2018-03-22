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
    if(beginning || ending === NaN){
        answer.textContent ="Please enter a number.";
    } else{
        answer.textContent = "% " + Number(ending.value - beginning.value)/beginning.value * 100;
    }
});

