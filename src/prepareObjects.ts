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
        speedX: 3,
        speedY: 3,
        size: 15,
        image: new Image(),
    }

    ball.image.onload = () => {
        ball.image.src = imgSources.ballImgSrc;
    }

    return ball;
}

export function createPaddle() {
    const paddle = {
        x: 350,
        y: 550,
        w: 100,
        h: 15,
        image: new Image(),
    }
    paddle.image.src = imgSources.paddleImgSrc;
    paddle.image.onload = () => {
        console.log(paddle.image.src)
    }

    return paddle;
}