const beginning = document.getElementById("beginning");
const ending = document.getElementById("ending");
const button = document.querySelector("button");
const answer = document.getElementById("answer");

const  test = beginning.value = 5;
const test2 = ending.value = 10;
const formula = test2 - test1;
const ans = formula/test;

button.addEventListener("click", function(){
    alert(ans);
});