"use strict";
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const Radius = 20;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (W - paddleWidth) / 2;
const paddleY = H - paddleHeight;
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
function drawBBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if (y + dy < Radius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - Radius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    if (x + dx < Radius || x + dx > canvas.width - Radius) {
        dx = -dx;
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}
const interval = setInterval(drawBBall, 30);
//# sourceMappingURL=Bouncing.js.map