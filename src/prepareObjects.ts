import { WIDTH } from "./animation";

const imgSources = {
    ballImgSrc: './assets/Ball.png',
    paddleImgSrc: './assets/Paddle.png',
    brickImgSrc1: './assets/Brick1.png',
    brickImgSrc2: './assets/Brick2.png',
}

export function createBall() {
    const ball = {
        x: 390,
        y: 500,
        directionX: -1,
        directionY: -1,
        speedX: 2,
        speedY: 2,
        size: 15,
        lives: 3,
        image: new Image(),
    }
    ball.image.src = imgSources.ballImgSrc;

    return ball;
}

export function createPaddle() {
    const paddle = {
        x: 350,
        y: 550,
        w: 100,
        h: 15,
        speedX: 6,
        image: new Image(),
    }
    paddle.image.src = imgSources.paddleImgSrc;

    return paddle;
}

function createBrick(x, y, imgType, id) {
    const brick = {
        x: x,
        y: y,
        w: 70,
        h: 36,
        id: id,
        alive: true,
        image: new Image(),
    }

    if (imgType == 1) {
        brick.image.src = imgSources.brickImgSrc1;
    } else {
        brick.image.src = imgSources.brickImgSrc2;
    }

    return brick;
}

export function createBricks() {
    let bricks = new Map();
    let imgType = 1;
    let xOffSet = 5;
    let id = 0;
    for (let y = 50; y <= 285; y += 40) {
        xOffSet *= -1
        for (let x = 25; x < WIDTH - 65; x += 75) {
            imgType *= -1;
            bricks.set(id, createBrick(x + xOffSet, y, imgType, id));
            id++;
        }
    }
    console.log(bricks)
    return bricks;
}
