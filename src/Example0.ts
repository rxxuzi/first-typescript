//bouncing ball project
const cavas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = cavas.getContext("2d");

// ctx.fillStyle = "red";

//ボールの初期位置と速度
let x = cavas.width / 2;

let y = cavas.height - 30;

let dx = 2;
let dy = -2;

const Radius = 20;

//スクリーンのパドル
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
