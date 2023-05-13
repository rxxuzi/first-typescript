"use strict";
const cavas = document.getElementById("canvas");
const ctx = cavas.getContext("2d");
let x = cavas.width / 2;
let y = cavas.height - 30;
let dx = 2;
let dy = -2;
const Radius = 20;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (cavas.width - paddleWidth) / 2;
const paddleY = cavas.height - paddleHeight;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
let rightPressed = false;
let leftPressed = false;
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, Radius, 0, Math.PI * 2);
    ctx.fillStyle;
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
const interval = setInterval(draw, 30);
//# sourceMappingURL=Bouncing.js.map