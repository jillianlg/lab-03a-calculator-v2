// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addTotal = document.getElementById('add-total');

// initialize state

// set event listeners to update state and DOM
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
  

// import functions and grab DOM elements
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
// const subTotal = document.getElementById('sub-total');

// initialize state

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    console.log(value1, value2);


});