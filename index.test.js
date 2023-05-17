
// describe('stringLength', () => {
    //     test('should return the length of a string', () => {
        //       const string = 'Hello, world!';
        //       const length = stringLength(string);
        //       expect(length).toBe(string.length);
//     });
  
//     test('should return 0 for an empty string', () => {
    //       const string = '';
    //       const length = stringLength(string);
    //       expect(length).toBe(0);
    //     });
//   });





//   const reverseString = require('./index.js');

// test('should reverse a string', () => {
    //   const string = 'Hello, world!';
//   const reversedString = reverseString(string);
//   expect(reversedString).toBe('!dlrow ,olleH');
// });


const Calculator = require('./index');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two positive numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });

    test('should add a positive and a negative number', () => {
      const result = calculator.add(2, -3);
      expect(result).toBe(-1);
    });

    test('should add two negative numbers', () => {
      const result = calculator.add(-2, -3);
      expect(result).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });

    test('should subtract a positive and a negative number', () => {
      const result = calculator.subtract(5, -3);
      expect(result).toBe(8);
    });

    test('should subtract two negative numbers', () => {
      const result = calculator.subtract(-5, -3);
      expect(result).toBe(-2);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      const result = calculator.divide(6, 3);
      expect(result).toBe(2);
    });

    test('should divide a positive and a negative number', () => {
      const result = calculator.divide(6, -3);
      expect(result).toBe(-2);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      const result = calculator.multiply(2, 3);
      expect(result).toBe(6);
    });

    test('should multiply a positive and a negative number', () => {
      const result = calculator.multiply(2, -3);
      expect(result).toBe(-6);
    });

    test('should multiply two negative numbers', () => {
      const result = calculator.multiply(-2, -3);
      expect(result).toBe(6);
    });
  });
});