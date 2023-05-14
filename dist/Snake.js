"use strict";
const d = 40;
const snake = [{ x: 0, y: 0 }];
let apple = { x: 10, y: 10 };
let dir = "right";
let score = 0;
function update() {
    const head = { x: snake[0].x, y: snake[0].y };
    switch (dir) {
        case "right":
            head.x += d;
            break;
        case "left":
            head.x -= d;
            break;
        case "up":
            head.y -= d;
            break;
        case "down":
            head.y += d;
            break;
        default:
            break;
    }
    if (head.x < 0 || head.x > W || head.y < 0 || head.y > H) {
        score++;
        apple = {
            x: Math.floor(Math.random() * W / d) * d,
            y: Math.floor(Math.random() * H / d) * d,
        };
    }
    else {
        snake.pop();
    }
    snake.unshift(head);
}
function draw() {
    ctx.clearRect(0, 0, W, H);
    snake.forEach((part, index) => {
        if (index == 0) {
            ctx.fillStyle = "green";
        }
        else {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(part.x, part.y, d, d);
    });
    for (let x = 0; x < W; x++) {
        for (let y = 0; y < H; y++) {
            ctx.strokeStyle = "white";
            ctx.strokeRect(x * d, y * d, d, d);
        }
    }
}
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            dir = "left";
            break;
        case "ArrowRight":
            dir = "right";
            break;
        case "ArrowUp":
            dir = "up";
            break;
        case "ArrowDown":
            dir = "down";
            break;
    }
});
function loop() {
    draw();
    requestAnimationFrame(loop);
}
loop();
//# sourceMappingURL=Snake.js.map