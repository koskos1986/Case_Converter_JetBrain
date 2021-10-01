'use strict';

const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");
const textArea = document.getElementById("textarea");

upperCaseBtn.addEventListener("click", function (){
  let newText = textArea.value.toUpperCase();
  textArea.value = newText;
});

lowerCaseBtn.addEventListener("click", function (){
  let newText = textArea.value.toLowerCase();
  textArea.value = newText;
});

properCaseBtn.addEventListener("click", function() {
  let arrayFromString = textArea.value.split(" ");
  for (let i = 0; i < arrayFromString.length; i++) {
    arrayFromString[i] = arrayFromString[i][0].toUpperCase() + arrayFromString[i].substr(1);
  };
  textArea.value = arrayFromString.join(" ");
});

sentenceCaseBtn.addEventListener("click", function() {
  let arrayFromString = textArea.value.split(". ");
  console.log(arrayFromString);
  for (let i = 0; i < arrayFromString.length; i++) {
    arrayFromString[i] = arrayFromString[i][0].toUpperCase() + arrayFromString[i].substr(1);
  };
  textArea.value = arrayFromString.join(". ");
});
