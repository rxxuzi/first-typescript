"use strict";
const canvas = document.getElementById('canvas');
const ctx2 = canvas.getContext('2d');
const W = canvas.width;
const H = canvas.height;
const centerX = W / 2;
const centerY = H / 2;
const radius = 100;
const sides = 6;
const angle = (Math.PI * 2) / sides;
let step = 0;
function draw() {
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
    requestAnimationFrame(draw);
}
draw();
//# sourceMappingURL=Hexagon.js.map