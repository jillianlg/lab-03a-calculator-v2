import { addTwoNumbers, subTwoNumbers, mulTwoNumbers } from './mathUtils.js';


// ADDITION 
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addTotal = document.getElementById('add-total');

export function handleAddClick() {
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    const add = addTwoNumbers(value1, value2);

    addTotal.textContent = add;
}

// SUBTRACTION 
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subTotal = document.getElementById('sub-total');

export function handleSubClick() {
    const value1 = subInput1.value;
    const value2 = subInput2.value;

    const sub = subTwoNumbers(value1, value2);

    subTotal.textContent = sub;
}
    

// MULTIPLY 
const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulTotal = document.getElementById('mul-total');

export function handleMulClick() {
    const value1 = mulInput1.value;
    const value2 = mulInput2.value;

    const mul = mulTwoNumbers(value1, value2);

    mulTotal.textContent = mul;
}
    

// DIVIDE 