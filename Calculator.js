const beginning = document.getElementById("beginning");
const ending = document.getElementById("ending");
const button = document.querySelector("button");
const answer = document.getElementById("answer");

beginning.value = "This is a test. ";
ending.value = "This is also a test. ";
answer.textContent = "Yet another test. ";

button.addEventListener("click", function(){
    alert("I am connected!");
});