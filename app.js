// import functions and grab DOM elements
import {
    handleAddClick,
    handleSubClick,
    handleMulClick,
    handleDivClick,
} from './clickHandlers.js';


// set event listeners to update state and DOM
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const mulButton = document.getElementById('mul-button');
const divButton = document.getElementById('div-button');

// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubClick);
mulButton.addEventListener('click', handleMulClick);
divButton.addEventListener('click', handleDivClick);


