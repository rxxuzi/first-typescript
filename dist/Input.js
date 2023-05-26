"use strict";
const slider = document.getElementById("slider");
const valueSpan = document.getElementById("value");
const setValue = (val) => {
    valueSpan.innerText = val;
};
const change = () => {
    setValue(slider.value);
};
window.onload = () => {
    slider.addEventListener("input", change);
    setValue(slider.value);
};
//# sourceMappingURL=Input.js.map