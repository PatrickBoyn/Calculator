// The selectors
const beginning = document.getElementById("beginning");
const ending = document.getElementById("ending");
const button = document.querySelector("button");
const answer = document.getElementById("answer");

// The values to be used
const  test = Number(beginning.value);
const test2 = Number(ending.value);

console.log(test, test2);

// formulas
const formula = test2 - test;
const ans = formula/test;

// For now it's an alert, to better see if it is working. 
button.addEventListener("click", function(){
    alert(ans);
});