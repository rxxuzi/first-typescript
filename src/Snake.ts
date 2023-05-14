//snake game 

const d = 50;
//蛇の要素を格納する配列
const snake = [{x :0 , y :0}];
let apple = {x : 0 , y : 0};
//向き
let dir = "right";
let running = true;
let score = 0;

function update(){
    const head = {x: snake[0].x , y : snake[0].y};

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
    
    drawApple();
    
    if(head.x == apple.x && head.y == apple.y){
        score ++ ;
        apple = {
            x : Math.floor(Math.random() * W / d) * d,
            y : Math.floor(Math.random() * H / d) * d,
        };
        //draw String apple.x + "," + apple.y
        snake.push(head);
        
    }else{
        // snake.unshift(head);
        snake.pop();
    }
    ctx.textAlign = "center";
    snake.unshift(head);
    // checkCollision();
}

//壁にぶつかったかの処理
function checkCollision(){
    const head = snake[0];
    if(head.x < 0 || head.x >= W / d || head.y < 0 || head.y >= H / d){
        clearInterval(interval);
        alert("Game Over \n Score ${score} \n Press Space to Restart");
    }
    running = true;
}

//リンゴの描画
function drawApple(){
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x * d ,apple.y * d,d,d);
}

function draw(){

    ctx.clearRect(0,0,W,H);

    snake.forEach((part,index) => {
        if(index == 0){
            ctx.fillStyle = "green";
        }else{
            ctx.fillStyle = "white";
        }
        ctx.fillRect(part.x,part.y,d,d);
    });
    for(let x = 0; x<W; x++){
        for(let y = 0; y<H; y++){
            //draw Line
            ctx.strokeStyle = "black";
            ctx.strokeRect(x*d,y*d,d,d);
        }
    }
}

document.addEventListener("keydown",(e) => {
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
        case "SpaceKey ":
            running = true;
            alert("Space")
            break;
    }
});

//リンゴの実装

function loop() {
    update();
    // draw();
    // requestAnimationFrame(loop);
    draw();
    requestAnimationFrame(loop);
}
loop();
