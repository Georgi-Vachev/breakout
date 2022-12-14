import { ballState, paddleState } from "./gameState";


export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');
canvas.addEventListener('mousemove', (event) => {
    updateMousePosition(event);
})

export const HEIGHT: number = canvas.height;
export const WIDTH: number = canvas.width;

const ball = ballState;
const paddle = paddleState;
const mousePos = {
    x: 0,
    y: 0
}

function updateMousePosition(event) {
    mousePos.x = event.clientX;
}

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

export function render(now) {
    clear();
    ctx.fillStyle = "gold";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (!lastTime) { lastTime = now; }
    let elapsed = now - lastTime;
    if (elapsed > 1000 / 30) {
        updateBall();
        updatePaddle();
    }

    drawBall();
    drawPaddle();
    // updateBall and updatePaddle on a given timeframe
}


export function checkInput() {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            alert('Escape button pressed')
        }
    });
}

function drawPaddle() {
    ctx.drawImage(paddle.image, paddle.x, paddle.y, paddle.w, paddle.h);
}

function updatePaddle(event) {
    if (paddle.x + paddle.w / 2 > event.clientX - 10) {
        paddle.x -= paddle.speedX;
    } else if (paddle.x + paddle.w / 2 < event.clientX - 10) {
        paddle.x += paddle.speedX;
    }
}

function updateBall() {
    ball.x += ball.speedX * ball.directionX;
    ball.y += ball.speedY * ball.directionY;
}


function drawBall() {
    ctx.drawImage(ball.image, ball.x, ball.y, ball.size, ball.size);
}

export function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}