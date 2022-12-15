import { showMenu } from "./app";
import { ballState, gameOn, paddleState } from "./gameState";

export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');
const selectedOption = document.querySelectorAll('input');

canvas.addEventListener('mousemove', (event) => {
    mousePos = Math.floor(event.clientX);
})

export const HEIGHT: number = canvas.height;
export const WIDTH: number = canvas.width;

let ball = ballState;
let paddle = paddleState;
let mousePos = 0;
let keydown = "";

export function getNewObejcts() {
    ball = ballState;
    paddle = paddleState;
}

export function collisionCheck() {
    if (ball.x > WIDTH - ball.size) {
        ball.directionX *= -1;
    }
    else if (ball.x < 0) {
        ball.directionX *= -1;
    }
    else if (ball.y > HEIGHT - ball.size) {
        ball.lives--;
        ball.x = 390;
        ball.y = 500;
        ball.directionY = -1;
    }
    else if (ball.y < 0) {
        ball.directionY *= -1;
    }
    else if (ball.speedY * ball.directionY > 0) {
        console.log(ball.speedY);
        if (ball.y + ball.size >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w) {
            ball.directionY *= -1;
        }
    }

}
export function updatePhysics() {
    updateBall();
    updatePaddle();
}

export function render() {
    clear();
    ctx.fillStyle = "gold";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    drawBall();
    drawPaddle();
}

function drawPaddle() {
    ctx.drawImage(paddle.image, paddle.x, paddle.y, paddle.w, paddle.h);
}

function drawBall() {
    ctx.drawImage(ball.image, ball.x, ball.y, ball.size, ball.size);
}

function updatePaddle() {
    if (mousePos != 0) {
        if ((paddle.x + paddle.w / 2 > mousePos - 10) && paddle.x > 5 && Math.abs(paddle.x + paddle.w / 2 - mousePos) > 10) {
            paddle.x -= paddle.speedX;
        } else if ((paddle.x + paddle.w / 2 < mousePos - 10) && paddle.x + paddle.w < WIDTH - 5 && Math.abs(paddle.x + paddle.w / 2 - mousePos) > 10) {
            paddle.x += paddle.speedX;
        }
    }
    if (keydown === 'ArrowLeft') {
        paddle.x -= paddle.speedX + 10
    } else if (keydown === 'ArrowRight') {
        paddle.x += paddle.speedX + 10
    }
}

function updateBall() {
    ball.x += ball.speedX * ball.directionX;
    ball.y += ball.speedY * ball.directionY;
}

window.addEventListener('keydown', event => {
    if (keydown == "") {
        keydown = event.code;
    }
    mousePos = 0;
})
window.addEventListener('keyup', () => {
    keydown = "";
    mousePos = 0;
})



export function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

