const beginning = document.getElementById("beginning");
const ending = document.getElementById("ending");
const button = document.querySelector("button");
const answer = document.getElementById("answer");

const  test = beginning.value = 5;
const test2 = ending.value = 10;


button.addEventListener("click", function(){
   answer =  test - test2/test;
});

console.log(test);
console.log(test2);
console.log(test- test2/test);