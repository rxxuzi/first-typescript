const d = 50;
const originalSnakeLength = 4;
const updateInterval = 100;

function drawGrid(){
    for(let x = 0; x < W; x += d){
        for(let y = 0; y < H; y += d){
            const rect = document.createElement("div");
            rect.style.position = "absolute";
            rect.style.left = x + "px";
            rect.style.top = y + "px";
            rect.style.width = d + "px";
            rect.style.height = d + "px";
            rect.style.border = "1px solid #000";
            document.body.appendChild(rect);
        }
    }
}


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

//fruit の初期位置
let fruitX = 10;
let fruitY = 10;

//game
let score = 0;
let running = true;
let gameOver = false;
let cause :string;

//start 
function start(){
    draw();
    if(running){
        setInterval(update, updateInterval);
    }
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
    score = 0;
    gameOver = false;
    cause = "";
    generateFruit();
    gameOver = false;
    start();
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

    //draw score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
    
}

start();

