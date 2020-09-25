// IMPORT MODULES under test here:
import { addTwoNumbers, subTwoNumbers } from '../mathUtils.js';

const test = QUnit.test;


// ADDITION TEST
test('should return 7 if passed 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const firstNumber = 3;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// SUBTRACTION TEST
test('should return 4 if passed 9 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    const firstNumber = 9;
    const secondNumber = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});