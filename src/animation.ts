import { ball, paddle } from "./gameState";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const HEIGHT: number = canvas.height;
const WIDTH: number = canvas.width;

export function collisionCheck() {

    if (ball.x > WIDTH - ball.size) {
        ball.directionX *= -1;
    }
    if (ball.x < 0) {
        ball.directionX *= -1;
    }
    if (ball.y > HEIGHT - ball.size) {
        // // Game Over
        // ball.x = 390;
        // ball.y = 500;
        // gameOn = false;
        ball.directionY *= -1;
    }
    if (ball.y < 0) {
        ball.directionY *= -1;
    }
    if (ball.speedY > 0) {
        if (ball.y + ball.size >= paddle.y && ball.x + ball.size >= paddle.x && ball.x + ball.size <= paddle.x + paddle.w && ball.y <= HEIGHT - ball.size) {
            ball.directionY *= -1;
        }
    }
}

export function render() {
    clear();
    ctx.fillStyle = "gold";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    // collisionCheck();
    drawBall();
    drawPaddle();
    // updateBall and updatePaddle on a given timeframe
}


export function checkInput() {
    //if escape is pressed set gameOn to false and call saveGame
}

function drawPaddle() {
    ctx.drawImage(paddle.image, paddle.x, paddle.y, paddle.w, paddle.h);
}


function drawBall() {
    console.log(ball.image.src)
    ball.x += ball.speedX * ball.directionX;
    ball.y += ball.speedY * ball.directionY;
    ctx.drawImage(ball.image, ball.x, ball.y, ball.size, ball.size);
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}