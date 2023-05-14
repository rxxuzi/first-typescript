//bouncing ball project

//ボールの初期位置と速度
const speed  = 4;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = speed;
let dy = -speed;

const Radius = 20;

//スクリーンのパドル
const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (W - paddleWidth) / 2;
const paddleY = H - paddleHeight;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let rightPressed = false;

let leftPressed = false;

function keyDownHandler(e: KeyboardEvent) {
    if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e: KeyboardEvent) {
    if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

//draw ball
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, Radius, 0, Math.PI * 2);
    ctx.fillStyle
    ctx.fill();
    
    ctx.closePath();

}

//パドル描画
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBBall(): void{
    //clear 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw ball
    drawBall();
    

    //draw paddle
    drawPaddle();

    //スクリーンの上下に当たったら反転させる
    if(y + dy < Radius){
        dy = -dy;
    }else if(y + dy > canvas.height - Radius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }else{
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }

    //ボールがすくりーンの左右にあたったら反転
    if(x + dx < Radius || x + dx > canvas.width - Radius){
        dx = -dx;
    }
    
    //パドルを移動させる

    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;
    }else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }

    //ボールの座標を更新
    x += dx;
    y += dy;
}

const interval = setInterval(drawBBall, 10);
