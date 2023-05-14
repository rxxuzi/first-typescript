// const d = 20;
const originalSnakeLength = 4;
const spanScore = document.getElementById("score") as HTMLSpanElement;
const spanWidth = document.getElementById("width") as HTMLSpanElement;
// const updateInterval = 100;


ctx.fillStyle  = "#000";

//snakeの定義
interface  Snake {
    x: number;
    y: number;
}

const snake: Snake[] = [];
for(let i = originalSnakeLength - 1; i >= 0; i--) {
    snake.push({x: i, y: 0});
}

let direction: "left" | "right" | "up" | "down" = "right";
let tmpDirection: "left" | "right" | "up" | "down" = "right";

//fruit の初期位置
let fruitX = 10;
let fruitY = 10;

//game
let score = 0;
let running = false ;
let gameOver = false;
let cause :string;

//start 
function start(){
    if(running){
        draw();
        setInterval(update, updateInterval);
    }
}

function endGame(){
    running = false;
    alert("Game Over ! \n Your Score is " + score + "\n Cause: " + cause);
    //all reset 
    snake.length = 0;
    for(let i = originalSnakeLength - 1; i >= 0; i--) {
        snake.push({x: i, y: 0});
    }
    direction = "right";
    score = 0;
    gameOver = false;
    cause = "";
    generateFruit();
    gameOver = false;
}

function restart(){
    running = true;
    start();
}

function update(){
    //snakeの位置
    const head = snake[0];
    let newX = head.x;
    let newY = head.y;

    switch(direction){
        case "left":
            newX--;
            break;
        case "right":
            newX++;
            break;
        case "up":
            newY--;
            break;
        case "down":
            newY++;
            break;
    }
    snake.unshift({x: newX, y: newY});

    //フルーツを食べた場合
    if(newX === fruitX && newY === fruitY){
        score++;
        generateFruit();
    
    }else{
        snake.pop();
    }
    //壁に衝突した場合
    if(newX < 0 || newX >= W/d || newY < 0 || newY >= H/d){
        gameOver = true;
        cause = "wall";
        endGame();
    }

    //snake自身に衝突した場合
    for (let index = 1; index < snake.length; index++) {
        if(newX === snake[index].x && newY === snake[index].y){
            gameOver = true;
            cause = "snake";
            endGame();
        }
    }
    draw();    

}

function generateFruit(){
    fruitX = Math.floor(Math.random() * (W/d));
    fruitY = Math.floor(Math.random() * (H/d));
}



//キーボード入力
document.addEventListener('keydown' , e => {
    switch(e.code){
        case 'ArrowLeft':
            if(direction !== "right"){
                direction = "left";
            }
            break;
            
        case 'ArrowRight':
            if(direction !== "left"){
                direction = "right";
            }
            break;
            
        case 'ArrowUp':
            if(direction !== "down"){
                direction = "up";
            }
            break;

        case 'ArrowDown':
            if(direction !== "up"){
                direction = "down";
            }
            break;

        case 'Space': 
            if(!running){
                running = true;
                start();
                ctx.fillText("Space", 10, 30);
            }else{
                ctx.fillText("Pushed", 10, 60);
            }
            break;
    }
    
});

//描画
function draw(){
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "green";
    
    //draw snake
    for (let index = 0; index < snake.length; index++) {
        const element = snake[index];
        ctx.fillRect(element.x * d, element.y * d, d, d);
    }   

    //draw fruit
    ctx.fillStyle = "red";
    ctx.fillRect(fruitX * d, fruitY * d, d, d);

    // //draw score
    // ctx.fillStyle = "white";
    // ctx.font = "20px Arial";
    // ctx.fillText("Score: " + score, 10, 30);

    // //draw score 
    // ctx.fillStyle = "yellow";
    // ctx.font = "20px Arial"; 
    // ctx.fillText("Score: " + score, 20, 50);
    drawGrid();

    spanScore.textContent = score.toString();
    spanWidth.textContent = d.toString();
}

function drawGrid(){
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    for(let i = 0; i < W; i += d){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, H);
        ctx.stroke();
    }
    for(let i = 0; i < H; i += d){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(W, i);
        ctx.stroke();
    }
}

// start();

