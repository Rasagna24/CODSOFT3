document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const calculateButton = document.getElementById('calculate');
  
    // Add click event listeners to number buttons
    numberButtons.forEach(button => {
      button.addEventListener('click', function() {
        appendToDisplay(button.dataset.value);
      });
    });
  
    // Add click event listeners to operator buttons
    operatorButtons.forEach(button => {
      button.addEventListener('click', function() {
        appendToDisplay(' ' + button.dataset.value + ' ');
      });
    });
  
    // Add click event listener to clear button
    clearButton.addEventListener('click', function() {
      clearDisplay();
    });
  
    // Add click event listener to calculate button
    calculateButton.addEventListener('click', function() {
      calculate();
    });
  
    function appendToDisplay(value) {
      display.value += value;
    }
  
    function clearDisplay() {
      display.value = '';
    }
  
    function calculate() {
      let input = display.value;
  
      // Split input into parts based on spaces
      let parts = input.split(' ');
  
      // Initialize variables for calculation
      let result = parseFloat(parts[0]); // Initialize result with the first number
      let currentOperator = null;
  
      // Loop through parts to perform calculations
      for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
  
        if (part === '+' || part === '-' || part === '*' || part === '/') {
          // If part is an operator, update currentOperator
          currentOperator = part;
        } else {
          // If part is a number, perform calculation based on currentOperator
          let number = parseFloat(part);
  
          if (currentOperator === '+') {
            result += number;
          } else if (currentOperator === '-') {
            result -= number;
          } else if (currentOperator === '*') {
            result *= number;
          } else if (currentOperator === '/') {
            if (number === 0) {
              alert("Division by zero error!");
              clearDisplay();
              return;
            }
            result /= number;
          }
        }
      }
  
      // Display the result
      display.value = result;
    }
  });
  