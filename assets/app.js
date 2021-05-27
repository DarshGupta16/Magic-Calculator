let answer = null;
const input = document.getElementById("calcInput");
const activateBtn = document.getElementById("activateBtn");
let pressTimer;

const insert = (objToInsert) => {
  input.value += objToInsert;
};

const clearInput = () => {
  input.value = null;
  answer = null;
};

const activateMagic = () => {
  pressTimer = window.setTimeout(() => {
    answer = prompt("Enter the prank answer: ");
  }, 2000);
  return false;
};

const disableMagic = () => {
  clearTimeout(pressTimer);
};

activateBtn.addEventListener("touchstart", activateMagic);
activateBtn.addEventListener("touchend", disableMagic);

const findAnswer = () => {
  if (answer == null) {
    let problemAnswer = eval(input.value);
    setTimeout(() => {
      input.value = problemAnswer;
    }, 10);
  }

  input.value = answer;
};
