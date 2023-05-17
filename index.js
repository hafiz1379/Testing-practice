// function stringLength(string) {
//     return string.length;
//   }
  
//   module.exports = stringLength;


//   function reverseString(string) {
//     return string.split('').reverse().join('');
//   }
  
//   module.exports = reverseString;

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  module.exports = Calculator;