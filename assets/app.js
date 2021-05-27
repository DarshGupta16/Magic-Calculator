let answer = null;
const input = document.getElementById("calcInput");

const insert = (objToInsert) => {
  input.value += objToInsert;
};

const clearInput = () => {
  input.value = null;
};

const findAnswer = () => {
  if (answer == null) {
    let problemAnswer = eval(input.value);
    setTimeout(() => {
      input.value = problemAnswer;
    }, 10);
  }

  input.value = answer;
};
