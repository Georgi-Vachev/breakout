const imgSources = {
    ballImgSrc: './assets/Ball.png',
    paddleImgSrc: './assets/Paddle.png',
}

export function createBall() {
    const ball = {
        x: 390,
        y: 500,
        directionX: -1,
        directionY: 1,
        speedX: 5,
        speedY: 5,
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