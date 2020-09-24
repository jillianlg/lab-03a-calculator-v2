// ADDITION import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addTotal = document.getElementById('add-total');

// initialize state

// ADDITION set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    console.log(value1, value2);

    const input1Number = Number(value1);
    const input2Number = Number(value2);
    console.log(typeof input1Number, typeof input2Number);

    const sum = input1Number + input2Number;
    console.log(sum);

    addTotal.textContent = sum;
});
  

// SUBTRACTION import functions and grab DOM elements
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subTotal = document.getElementById('sub-total');

// initialize state

// SUBTRACTION set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    console.log(value1, value2);

    const input1Number = Number(value1);
    const input2Number = Number(value2);
    console.log(typeof input1Number, typeof input2Number);

    const sum = input1Number - input2Number;
    console.log(sum);

    subTotal.textContent = sum;
});

// MULTIPLY import functions and grab DOM elements
const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulButton = document.getElementById('mul-button');
const mulTotal = document.getElementById('mul-total');

// initialize state

// MULTIPLY set event listeners to update state and DOM
mulButton.addEventListener('click', () => {
    const value1 = mulInput1.value;
    const value2 = mulInput2.value;
    console.log(value1, value2);

    const input1Number = Number(value1);
    const input2Number = Number(value2);
    console.log(typeof input1Number, typeof input2Number);

    const sum = input1Number * input2Number;
    console.log(sum);

    mulTotal.textContent = sum;
});

// DIVIDE import functions and grab DOM elements
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
// const divTotal = document.getElementById('div-total');

// initialize state

// DIVIDE set event listeners to update state and DOM
divButton.addEventListener('click', () => {
    const value1 = divInput1.value;
    const value2 = divInput2.value;
    console.log(value1, value2);

    const input1Number = Number(value1);
    const input2Number = Number(value2);
    console.log(typeof input1Number, typeof input2Number);

    const sum = input1Number / input2Number;
    console.log(sum);

});