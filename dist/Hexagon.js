"use strict";
const ctx2 = canvas.getContext('2d');
const radius = 100;
const sides = 6;
const angle = (Math.PI * 2) / sides;
let step = 0;
function drawHexagon() {
    ctx2.clearRect(0, 0, W, H);
    ctx2.beginPath();
    for (let i = 0; i < sides; i++) {
        const x = centerX + radius * Math.cos(angle * i + step);
        const y = centerY + radius * Math.sin(angle * i + step);
        if (i == 0) {
            ctx2.moveTo(x, y);
        }
        else {
            ctx2.lineTo(x, y);
        }
    }
    ctx2.closePath();
    ctx2.stroke();
    step += 0.01;
    requestAnimationFrame(drawHexagon);
}
drawHexagon();
//# sourceMappingURL=Hexagon.js.map