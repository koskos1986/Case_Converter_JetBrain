'use strict';

const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");
const saveTextBtn = document.getElementById("save-text-file");
const textArea = document.getElementById("textarea");

upperCaseBtn.addEventListener("click", function (){
  textArea.value = textArea.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", function (){
  textArea.value = textArea.value.toLowerCase();
});

properCaseBtn.addEventListener("click", function() {
  let arrayFromString = textArea.value.split(" ");
  arrayToUpperCase(arrayFromString);
  textArea.value = arrayFromString.join(" ");
});

sentenceCaseBtn.addEventListener("click", function() {
  let arrayFromString = textArea.value.toLowerCase().split(". ");
  arrayToUpperCase(arrayFromString);
  textArea.value = arrayFromString.join(". ");
});

const arrayToUpperCase = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substr(1);
  }
};

saveTextBtn.addEventListener("click", function () {
  download("text.txt", textArea.value);
});

const download = (filename, text) => {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
