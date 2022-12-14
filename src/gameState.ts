import { createBall, createPaddle } from "./prepareObjects";

export let gameOn: boolean = false;

export let ballState = createBall();
export let paddleState = createPaddle();



export function saveObjects(currentBall, currentPaddle) {
    ballState = currentBall;
    paddleState = currentPaddle;
}

export function createNewObjects() {
    ballState = createBall();
    paddleState = createPaddle();
}