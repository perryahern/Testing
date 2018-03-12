/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return the expected output', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(5)).to.equal(50);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(5)).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the given value minus five', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(50)).to.equal(45);
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(50)).to.be.a('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should verify the given items are the same length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('four', 'five')).to.equal(true);
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('four', 'five')).to.be.a('boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should verify the given values are equal', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(5, 5)).to.equal(true);
    });
    it('should return a boolean value', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(5, 5)).to.be.a('boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should verify the given values is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(80)).to.equal(true);
    });
    it('should return a boolean value', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(80)).to.be.a('boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should verify the given values are greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(80)).to.equal(true);
    });
    it('should return a boolean value', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(80)).to.be.a('boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the sum of the two given numbers', () => {
      const add = funcs.add;
      expect(add(7, 8)).to.equal(15);
    });
    it('should return a number', () => {
      const add = funcs.add;
      expect(add(7, 8)).to.be.a('number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract the second number from the first', () => {
      const subtract = funcs.subtract;
      expect(subtract(10, 3)).to.equal(7);
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      expect(subtract(10, 3)).to.be.a('number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide the first number by the second', () => {
      const divide = funcs.divide;
      expect(divide(20, 4)).to.equal(5);
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      expect(divide(20, 4)).to.be.a('number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () => {
      const multiply = funcs.multiply;
      expect(multiply(15, 2)).to.equal(30);
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      expect(multiply(15, 2)).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should get the remainder when dividing numbers', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(15, 9)).to.equal(6);
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(15, 9)).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if even', () => {
      const isEven = funcs.isEven;
      expect(isEven(14)).to.equal(true);
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      expect(isEven(14)).to.be.a('boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if odd', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(15)).to.equal(true);
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(15)).to.be.a('boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const square = funcs.square;
      expect(square(5)).to.equal(25);
    });
    it('should return a number', () => {
      const square = funcs.square;
      expect(square(5)).to.be.a('number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const cube = funcs.cube;
      expect(cube(5)).to.equal(125);
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      expect(cube(5)).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should raise a number to a power', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(5, 3)).to.equal(125);
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(5, 3)).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round the given number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.25)).to.equal(5);
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.25)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round the given number up', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(5.7)).to.equal(6);
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(5.7)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point to the string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Hello')).to.equal('Hello!');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Hello')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine two names with a space in between', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Perry', 'Ahern')).to.equal('Perry Ahern');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Perry', 'Ahern')).to.be.a('string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a greeting with the name given', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Perry')).to.equal('Hello Perry!');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Perry')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of the rectangle', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(10, 3)).to.equal(30);
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(10, 3)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of the triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(10, 2)).to.equal(10);
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(10, 2)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of the circle', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(5)).to.equal(78.53981633974483);
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(5)).to.be.a('number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangular prism', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(5, 3, 10)).to.equal(150);
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(5, 3, 10)).to.be.a('number');
    });
  });
});
