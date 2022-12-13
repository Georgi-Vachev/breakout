const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const HEIGHT = canvas.height;
const WIDTH = canvas.width;

const imgSources = {
    ballImgSrc: './assets/Ball.png',
    paddleImgSrc: './assets/Paddle.png',
}
const ball = {
    x: 390,
    y: 500,
    directionX: -1,
    directionY: 1,
    speedX: 3,
    speedY: 3,
    size: 15,
    image: new Image(),
}
const paddle = {
    x: 350,
    y: 550,
    w: 100,
    h: 15,
    image: new Image(),
}

function loadImages() {
    ball.image.src = imgSources.ballImgSrc;
    ball.image.onload = () => {
        paddle.image.src = imgSources.paddleImgSrc;
        paddle.image.onload = () => {
            render();
        }
    }
}

function drawBall() {
    ball.x += ball.speedX * ball.directionX;
    ball.y += ball.speedY * ball.directionY;

    if (ball.x > WIDTH - ball.size) {
        ball.directionX *= -1;
    } else if (ball.x < 0) {
        ball.directionX *= -1;
    } else if (ball.y > HEIGHT - ball.size) {
        // Game Over
        ball.directionY *= -1;
    } else if (ball.y < 0) {
        ball.directionY *= -1;
    } else if (ball.y > paddle.y - ball.size && ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
        ball.directionY *= -1;
    } else if ((ball.x > paddle.x - ball.size) && (ball.x < paddle.x + paddle.w) && (ball.y > paddle.y - ball.size) && (ball.y < paddle.y - ball.size + paddle.h)) {
        ball.directionX *= -1;
    }

    ctx.drawImage(ball.image, ball.x, ball.y, ball.size, ball.size);
}

function drawPaddle() {
    ctx.drawImage(paddle.image, paddle.x, paddle.y, paddle.w, paddle.h);
}

function render() {
    clear();
    ctx.fillStyle = "gold";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    drawBall();
    drawPaddle();
    requestAnimationFrame(render);
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

loadImages();

// define objects
    // ball = { x, y, size, image, onCollision(), }
    // paddle = { x, y, size, image, onCollision(), slide() }
    // brick = { index, x, y, size, image, onCollision() }

// create animation loop with render() function using requestAnimationFrame

// render bricks, ball, and paddle

// implement ball / paddle physics

// implement ball / bricks physics

// implement mouse tracking and paddle movement

// level tracking and progression

// bonus drops

// create menu with 'settings' and 'start game' options