const slider = document.getElementById("slider") as HTMLInputElement;
const valueSpan = document.getElementById("value") as HTMLSpanElement;

const setValue = (val : string) => {
    valueSpan.innerText = val;
}

const change = () => {
    setValue(slider.value);
}

window.onload = () => {
    slider.addEventListener("input", change);
    setValue(slider.value);
}