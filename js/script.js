//Sorena Shirzad

let numbers = [];
let resultElement = document.getElementById("result");
let operationElement = document.getElementById("operation");

// Click Event Listeners for Number Buttons
document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => {
    numbers.push(button.innerHTML);
    resultElement.innerHTML = numbers.join("");
  });
});

document.getElementById("C").addEventListener("click", () => {
  resultElement.innerHTML = "";
  numbers = [];
});
document.getElementById("AC").addEventListener("click", () => {
  resultElement.innerHTML = "";
  operationElement.innerHTML = "";
  numbers = [];
});

const backspaceButton = document.getElementById("DFO");

backspaceButton.addEventListener("click", () => {
  numbers.pop();
  resultElement.innerHTML = numbers.join("");
});

// Click Event Listener for Equal Button
document.querySelector(".equal").addEventListener("click", () => {
  // Join the numbers array into a string and use eval() to evaluate it
  operationElement.innerHTML = `${resultElement.innerText}=`;
  if (numbers.length > 0) {
    const ex = numbers.join("");
    try {
      const result = eval(ex);
      resultElement.innerHTML = result;
    } catch (error) {
      resultElement.innerHTML = "Error";
    }
  }
});
