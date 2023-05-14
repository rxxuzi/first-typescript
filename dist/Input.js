"use strict";
const slider = document.getElementById("slider");
const valueSpan = document.getElementById("value");
slider.addEventListener("input", () => {
    if (valueSpan) {
        valueSpan.innerHTML = slider.value;
    }
});
//# sourceMappingURL=Input.js.map