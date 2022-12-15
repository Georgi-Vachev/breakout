import { inputSelected } from "./app";
import { ballState, brickState, paddleState } from "./gameState";

export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');

export const HEIGHT: number = canvas.height;
export const WIDTH: number = canvas.width;

export let ball = ballState;
let paddle = paddleState;
let bricks = brickState;
let mousePos = 0;
let keydown = "";

export function getNewObejcts() {
    ball = ballState;
    paddle = paddleState;
    bricks = brickState;
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
    else if (ball.y < 0 && ball.speedY * ball.directionY < 0) {
        ball.directionY *= -1;
    }

    if (ball.speedY * ball.directionY > 0) {
        if (ball.y + ball.size >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w) {
            if (ball.x >= paddle.x - ball.size && ball.x <= paddle.x + paddle.w * (1 / 3) - ball.size) {
                if (ball.speedX * ball.directionX < 0) {
                    ball.speedX += 1;
                    ball.speedY -= 1;
                } else if (ball.speedX * ball.directionX < 0) {
                    ball.speedY += 1;
                    ball.speedX -= 1;
                }
            } else if (ball.x >= paddle.x + paddle.w * (1 / 3) - ball.size && ball.x <= paddle.x + paddle.w * (2 / 3) - ball.size) {

            } else {
                if (ball.speedX * ball.directionX < 0) {
                    ball.speedX -= 1;
                    ball.speedY += 1;
                } else if (ball.speedX * ball.directionX < 0) {
                    ball.speedY -= 1;
                    ball.speedX += 1;
                }
            }

        }
        ball.directionX *= -1;
    }

    for (let brick of bricks) {
        if (ball.x >= brick[1].x - ball.size && ball.x <= brick[1].x + brick[1].w - ball.size && ball.y >= brick[1].y - ball.size && ball.y <= brick[1].y + brick[1].h) {
            ball.directionY *= -1;
            bricks.delete(brick[0]);
            console.log(brick);
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
    drawBricks();
}

function drawPaddle() {
    ctx.drawImage(paddle.image, paddle.x, paddle.y, paddle.w, paddle.h);
}

function drawBall() {
    ctx.drawImage(ball.image, ball.x, ball.y, ball.size, ball.size);
}

function drawBricks() {
    for (let brick of bricks) {
        ctx.drawImage(brick[1].image, brick[1].x, brick[1].y, brick[1].w, brick[1].h);
    }
}

function updatePaddle() {
    if (inputSelected === 'Mouse') {
        if ((paddle.x + paddle.w / 2 > mousePos - 10) && paddle.x > 5 && Math.abs(paddle.x + paddle.w / 2 - mousePos) > 10) {
            paddle.x -= paddle.speedX + 2;
        } else if ((paddle.x + paddle.w / 2 < mousePos - 10) && paddle.x + paddle.w < WIDTH - 5 && Math.abs(paddle.x + paddle.w / 2 - mousePos) > 10) {
            paddle.x += paddle.speedX + 2;
        }

    } else if (inputSelected === 'Keyboard') {
        if (keydown === 'ArrowLeft' && paddle.x > 5) {
            paddle.x -= paddle.speedX + 6
        } else if (keydown === 'ArrowRight' && paddle.x + paddle.w < WIDTH - 5) {
            paddle.x += paddle.speedX + 6
        }
    }
}

function updateBall() {
    ball.x += ball.speedX * ball.directionX;
    ball.y += ball.speedY * ball.directionY;
}

export function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

canvas.addEventListener('mousemove', (event) => {
    mousePos = Math.floor(event.clientX);
})

window.addEventListener('keydown', (event) => {
    keydown = event.code;
})

window.addEventListener('keyup', (event) => {
    if (keydown == event.code) {
        keydown = '';
    }
})