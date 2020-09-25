import { addTwoNumbers } from './mathUtils.js';


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


// MULTIPLY 


// DIVIDE 