"use strict";
const inputElem = document.getElementById('num1');
const currentValueElem = document.getElementById('width');
const setCurrentValue = (value) => {
    currentValueElem.innerText = value;
    console.log(value);
};
const rangeOnChange = (e) => {
    currentValueElem.textContent = e.target.value;
};
//# sourceMappingURL=Input.js.map