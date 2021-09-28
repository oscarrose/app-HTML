//Select the elemts html
const btnNumber = document.getElementsByName("btnNumber");
const btnOperator = document.getElementsByName("btnOperator");
const btnEqual = document.getElementById("btnEqual");
const btnDelete = document.getElementById("btnDelete");

var result = document.getElementById("result");

var operatorCurrent = "";
var operatorPrevious = "";
var operation = undefined;

//add the events
btnNumber.forEach(function (button) {
  button.addEventListener("click", function () {
    selectNumber(button.innerText);
  });
});

btnOperator.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOperator(button.innerHTML);
  });
});

btnEqual.addEventListener("click", function () {
  calculate();
  updateDisplay();
});

btnDelete.addEventListener("click", function () {
  clear();
  updateDisplay();
});

//programming the function

function selectNumber(number) {
  operatorCurrent = operatorCurrent.toString() + number.toString();
  updateDisplay();
}

function updateDisplay() {
  result.value = operatorCurrent;
}

function selectOperator(operator) {
  if (operatorCurrent === "") return;

  if (operatorPrevious !== "") {
    calculate();
  }
  operation = operator.toString();
  operatorPrevious = operatorCurrent;
  operatorCurrent = "";
}


function calculate() {
  var calculation;
  let current = parseFloat(operatorCurrent);
  let provious = parseFloat(operatorPrevious);

  if (isNaN(current) || isNaN(provious)) return;

  switch (operation) {
    case "+":
      calculation = provious + current;
      break;

    case "-":
      calculation = provious - current;
      break;

    case "*":
      calculation = provious * current;
      break;

    case "/":
      calculation = provious / current;
      break;

    default:
      alert("operator not found");

      break;
  }

  operatorCurrent = calculation;
  operatorPrevious = "";
  operation = undefined;
}

function clear() {
  operatorCurrent = "";
  operatorPrevious = "";
  operator = undefined;
}
