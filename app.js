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

});
  
