'use strict';

const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const textArea = document.getElementById("textarea");

upperCaseBtn.addEventListener("click", function (){
  let newtext = textArea.value.toUpperCase();
  textArea.value = newtext;
});

lowerCaseBtn.addEventListener("click", function (){
  let newtext = textArea.value.toLowerCase();
  textArea.value = newtext;
});
