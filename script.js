"use strict";

const userInput = document.getElementById("user-input");
const userOutput = document.getElementById("user-output");
let intervalID;

const showText = () => {
  userOutput.textContent = userInput.value;
  console.log("Функция работает");
};

userInput.addEventListener("input", () => {
  clearTimeout(intervalID);
  intervalID = setTimeout(showText, 300);
});
